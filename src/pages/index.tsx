import Note from "@components/NoteCard";
import Heading from "@components/Heading";
import Footer from "@components/Footer";
import NoteEditModal from "@components/modal/NoteEditModal";
import SidebarModal from "@components/modal/SidebarModal";
import Toolbar from "@src/components/notes-toolbar/Toolbar";
import { useState } from "react";
import { useNotes } from "@hooks/useNotes";
import { NoteRow } from "@src/types";
import { createPortal } from "react-dom";
import classNames from "classnames";

function Home() {
  const [isNoteEditOpen, setNoteEditOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { notes, clearCurrentNote } = useNotes();

  const pageStyle = classNames(
    "flex",
    "flex-col",
    "min-h-100vh",
    "transition-margin-300"
  );

  return (
    <>
      <div className={pageStyle}>
        <Heading
          sideNaveToggleIcon={true}
          openSideNav={() => setIsSideNavOpen(true)}
          sideNavOpen={isSideNavOpen}
        />
        <div>
          <Toolbar openNoteEditModal={openNoteEdit} />
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
