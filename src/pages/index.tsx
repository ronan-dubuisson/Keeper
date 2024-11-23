import Note from "@src/components/NoteCard";
import Heading from "@components/Heading";
import Footer from "@components/Footer";
import NoteEditModal from "@src/components/modal/NoteEditModal";
import { useState } from "react";
import { useNotes } from "@src/hooks/useNotes";
import { NoteRow } from "@src/types";
import { useQuery } from "react-query";

function Home() {
  const [isNoteEditOpen, setNoteEditOpen] = useState(false);
  const { notes, clearCurrentNote, fetchNotes } = useNotes();

  /** FETCH NOTES TO NOTES CONTEXT WITH REACT-QUERY*/
  const notesQuery = useQuery({
    queryFn: () => fetchNotes(),
    queryKey: ["notes"],
  });

  if (notesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  // on query completed
  return (
    <>
      <div className="h-100vh flex flex-col">
        <Heading position="sticky" openModal={openNoteEditModal} />
        <div>
          <div className="my-10 mx-10% flex flex-wrap gap-lg justify-center font-primary">
            {notes.length > 0 &&
              notes.map((note: NoteRow) => (
                <Note
                  key={note.id}
                  note={note}
                  openNoteEdit={openNoteEditModal}
                />
              ))}
          </div>
        </div>
        <Footer />
      </div>

      {isNoteEditOpen && <NoteEditModal closeModal={closeNoteEditModal} />}
    </>
  );

  /**HELPER FUNCTION*/
  function openNoteEditModal() {
    setNoteEditOpen(true);
  }

  function closeNoteEditModal() {
    setNoteEditOpen(false);
    clearCurrentNote();
  }
}

export default Home;
