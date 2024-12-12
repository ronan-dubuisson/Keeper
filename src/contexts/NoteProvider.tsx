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
  const { user } = useAuth();

  const notesQuery = useQuery({
    queryFn: () => fetchNotes(),
    queryKey: ["notes"],
  });

  if (notesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  function getNoteById(id: string): NoteRow {
    return notes[findIndex(id)];
  }

  async function fetchNotes() {
    if (user) {
      const { data, error } = await supabase.from("notes").select();

      if (error) {
        throw error;
      }

      setNotes(data);
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
        setNotes([...notes, data[0]]);
      } else {
        throw new Error("Data is Null!");
      }
    }
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

      setNotes(updatedNotes);
    }
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
    getNoteById,
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
