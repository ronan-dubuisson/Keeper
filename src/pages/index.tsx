import Note from "@src/components/NoteCard";
import Heading from "@components/Heading";
import Footer from "@components/Footer";
import NoteEditModal from "@src/components/modal/NoteEditModal";
import { useState } from "react";
import { useNotes } from "@src/hooks/useNotes";
import { NoteRow } from "@src/types";

function Home() {
  const [isNewNoteModal, setNewNoteModal] = useState(false);
  const { notes } = useNotes();

  function openModal() {
    setNewNoteModal(true);
  }

  function closeModal() {
    setNewNoteModal(false);
  }

  return (
    <>
      <div className="h-100vh flex flex-col">
        <Heading position="sticky" openModal={openModal} />
        <div>
          <div className="my-10 mx-10% flex flex-wrap gap-lg justify-start font-primary">
            {notes.length > 0 &&
              notes.map((note: NoteRow) => <Note key={note.id} note={note} />)}
          </div>
        </div>
        <Footer />
      </div>

      {isNewNoteModal && <NoteEditModal closeModal={closeModal} />}
    </>
  );
}

export default Home;
