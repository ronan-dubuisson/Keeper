import Note from "@components/NoteCard";
import Heading from "@components/Heading";
import Footer from "@components/Footer";
import NoteEditModal from "@components/modal/NoteEditModal";
import { useState } from "react";
import { useNotes } from "@hooks/useNotes";
import { NoteRow } from "@src/types";
import { useQuery } from "react-query";
import SidebarModal from "@components/modal/SidebarModal";
import classNames from "classnames";
import { createPortal } from "react-dom";

function Home() {
  const [isNoteEditOpen, setNoteEditOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { notes, clearCurrentNote, fetchNotes } = useNotes();
  /** FETCH NOTES TO NOTES CONTEXT WITH REACT-QUERY*/
  const notesQuery = useQuery({
    queryFn: () => fetchNotes(),
    queryKey: ["notes"],
  });

  if (notesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  const pageStyle = classNames(
    "flex",
    "flex-col",
    "min-h-100vh",
    "transition-margin-300"
  );

  // on query completed
  return (
    <>
      <div className={pageStyle}>
        <Heading
          openModal={openNoteEdit}
          sideNaveToggleIcon={true}
          openSideNav={() => setIsSideNavOpen(true)}
          sideNavOpen={isSideNavOpen}
        />
        <div className="mt-10 mb-auto mx-10% flex flex-wrap gap-lg justify-center font-primary">
          {notes.length > 0 &&
            notes.map((note: NoteRow) => (
              <Note
                key={note.id}
                note={note}
                openNoteEdit={() => {
                  setNoteEditOpen(true);
                }}
              />
            ))}
        </div>
        <Footer />

        {createPortal(
          <SidebarModal
            isOpen={isSideNavOpen}
            closeNav={() => setIsSideNavOpen(false)}
          />,
          document.body
        )}

        {createPortal(
          <NoteEditModal
            isOpen={isNoteEditOpen}
            closeModal={() => {
              setNoteEditOpen(false);
              clearCurrentNote();
            }}
          />,
          document.body
        )}
      </div>
    </>
  );

  function openNoteEdit() {
    setNoteEditOpen(true);
    setIsSideNavOpen(false);
  }
}

export default Home;
