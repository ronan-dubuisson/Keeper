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
        <Heading position="sticky" openModal={() => setNoteEditOpen(true)} />
        <div>
          <div className="my-10 mx-10% flex flex-wrap gap-lg justify-center font-primary">
            {notes.length > 0 &&
              notes.map((note: NoteRow) => (
                <Note
                  key={note.id}
                  note={note}
                  openNoteEdit={() => setNoteEditOpen(true)}
                />
              ))}
          </div>
        </div>
        <Footer />
      </div>

      <NoteEditModal
        isOpen={isNoteEditOpen}
        closeModal={() => {
          setNoteEditOpen(false);
          clearCurrentNote();
        }}
      />
    </>
  );
}

export default Home;
