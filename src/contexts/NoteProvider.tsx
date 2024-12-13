import { useAuth } from "@src/hooks/useAuth";
import { NoteContextType, NoteInsert, NoteRow, NoteUpdate } from "@src/types";
import supabase from "@src/utils/supabaseConfig";
import { format } from "date-fns";
import { createContext, PropsWithChildren, useState } from "react";
import { useQuery } from "react-query";

const NoteContext = createContext<NoteContextType>(undefined);
type props = PropsWithChildren;

export function NoteContextProvider({ children }: props) {
  const [notes, setNotes] = useState<NoteRow[]>([]);
  const [currentNoteToEdit, setCurrentNoteToEdit] = useState<NoteRow>();
  const [sort] = useState<{
    by: "CREATED_DATE" | "LAST_UPDATED" | "TITLE";
    order: "DESC" | "ASC";
  }>({ by: "CREATED_DATE", order: "DESC" });
  const { user } = useAuth();

  const notesQuery = useQuery({
    queryFn: () => fetchNotes(),
    queryKey: ["notes"],
  });

  if (notesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  /** DATABASE FUNCTIONS */
  async function fetchNotes() {
    if (user) {
      const { data, error } = await supabase.from("notes").select();

      if (error) {
        throw error;
      }

      setNotes(sortNotes(data));
    } else {
      throw Error("user needs to be logged in before fetching notes");
    }
  }

  async function insertNote(title: string, content: string) {
    if (user) {
      const createdDate = new Date().toISOString();

      const newNote: NoteInsert = {
        title,
        content,
        user_uuid: user.id,
        created_on: createdDate,
        last_updated_on: createdDate,
      };

      const { data, error } = await supabase
        .from("notes")
        .insert([newNote])
        .select();

      if (error) {
        throw new Error("Note could note be added to the database!!!");
      }

      if (data !== null) {
        setNotes(sortNotes([...notes, data[0]]));
      } else {
        throw new Error("Data is Null!");
      }
    }
  }

  async function updateNote(id: string, fieldsToUpdate: NoteUpdate) {
    if (user) {
      const { data, error } = await supabase
        .from("notes")
        .update({
          ...fieldsToUpdate,
          last_updated_on: new Date().toISOString(),
        })
        .eq("id", id)
        .select();

      if (error) {
        throw new Error("Note could note be updated");
      }

      const updatedNotes = notes.map((note) => {
        if (note.id === id) {
          return data[0];
        } else {
          return note;
        }
      });

      setNotes(sortNotes(updatedNotes));
    }
  }

  /**HELPER FUNCTIONS */
  function sortNotes(notes: NoteRow[]) {
    let sortedNotes: NoteRow[];

    switch (true) {
      case sort.by === "CREATED_DATE" && sort.order === "ASC":
        sortedNotes = notes.toSorted((a, b) =>
          a.created_on.localeCompare(b.created_on)
        );
        break;
      case sort.by === "CREATED_DATE" && sort.order === "DESC":
        sortedNotes = notes.toSorted((a, b) =>
          b.created_on.localeCompare(a.created_on)
        );
        break;
      case sort.by === "LAST_UPDATED" && sort.order === "ASC":
        sortedNotes = notes.toSorted((a, b) =>
          a.last_updated_on.localeCompare(b.last_updated_on)
        );
        break;
      case sort.by === "LAST_UPDATED" && sort.order === "DESC":
        sortedNotes = notes.toSorted((a, b) =>
          b.last_updated_on.localeCompare(a.last_updated_on)
        );
        break;
      case sort.by === "TITLE" && sort.order === "ASC":
        sortedNotes = notes.toSorted((a, b) => a.title.localeCompare(b.title));
        break;
      case sort.by === "TITLE" && sort.order === "DESC":
        sortedNotes = notes.toSorted((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        sortedNotes = notes.toSorted((a, b) =>
          b.created_on.localeCompare(a.created_on)
        );
        break;
    }

    return sortedNotes;
  }

  function setEditNote(id: string) {
    const note = notes[findIndex(id)];

    if (note) {
      setCurrentNoteToEdit(note);
    } else {
      throw Error(`note with id:${id} does not exist`);
    }
  }

  function clearCurrentNote() {
    setCurrentNoteToEdit(undefined);
  }

  function findIndex(id: string) {
    return notes.findIndex((note) => note.id === id);
  }

  function formatTimeStamp(dateTime: string): string {
    const formattedDate = format(dateTime, "dd/MM/yyyy HH:mm");
    return formattedDate;
  }

  const contextData = {
    notes,
    currentNoteToEdit,
    insertNote,
    setEditNote,
    clearCurrentNote,
    updateNote,
    formatTimeStamp,
  };

  return (
    <NoteContext.Provider value={contextData}>{children}</NoteContext.Provider>
  );
}

export default NoteContext;
