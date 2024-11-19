import Note from "@src/components/NoteCard";
import Heading from "@components/Heading";
import Footer from "@components/Footer";
import NoteEdit from "@components/modal/NoteEdit";
import { useEffect, useState } from "react";
import { NoteRow } from "@src/types";
import supabase from "@src/utils/supabaseConfig";

function Home() {
  const [isNewNoteModal, setNewNoteModal] = useState(false);
  const [notes, setNotes] = useState<NoteRow[]>([]);

  async function fetchNotes() {
    const { data, error } = await supabase.from("notes").select();

    if (error) {
      throw new Error(error.message);
    } else {
      setNotes(data);
    }
  }

  function openModal() {
    setNewNoteModal(true);
  }

  function closeModal() {
    setNewNoteModal(false);
  }

  function addNote(note: NoteRow) {
    setNotes([...notes, note]);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <div className="h-100vh flex flex-col">
        <Heading position="sticky" openModal={openModal} />
        <div>
          <div className="my-10 mx-10% flex flex-wrap gap-lg justify-start font-primary">
            {notes &&
              notes.map((note: NoteRow) => <Note key={note.id} note={note} />)}
          </div>
        </div>
        <Footer />
      </div>

      {isNewNoteModal && <NoteEdit addNote={addNote} closeModal={closeModal} />}
    </>
  );
}

export default Home;
