import Note from "@src/components/NoteCard";
import Heading from "@components/Heading";
import Footer from "@components/Footer";
import NoteEditModal from "@src/components/modal/NoteEditModal";
import { useEffect, useState } from "react";
import { useNotes } from "@src/hooks/useNotes";
import { NoteRow } from "@src/types";
import { useQuery } from "react-query";
import Sidebar from "@src/components/Sidebar";
import classNames from "classnames";
import { useCookies } from "react-cookie";

function Home() {
  const [isNoteEditOpen, setNoteEditOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { notes, clearCurrentNote, fetchNotes } = useNotes();
  const [cookies, setCookie] = useCookies(["defaultSideNavOpenState"]);

  /** FETCH NOTES TO NOTES CONTEXT WITH REACT-QUERY*/
  const notesQuery = useQuery({
    queryFn: () => fetchNotes(),
    queryKey: ["notes"],
  });

  useEffect(() => {
    setIsSideNavOpen(cookies.defaultSideNavOpenState);
  }, [cookies.defaultSideNavOpenState]);

  if (notesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  const pageStyle = classNames(
    "flex",
    "flex-col",
    "min-h-100vh",
    "transition-margin-300",
    {
      "ml-200px": isSideNavOpen,
      "ml-0": !isSideNavOpen,
    }
  );

  // on query completed
  return (
    <>
      <div className={pageStyle}>
        <Heading
          openModal={() => setNoteEditOpen(true)}
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
                openNoteEdit={() => setNoteEditOpen(true)}
              />
            ))}
        </div>
        <Footer />
      </div>

      <Sidebar
        defaultSideNavOpenState={cookies.defaultSideNavOpenState}
        setDefaultSideNavOpenState={setDefaultSideNavOpenState}
        isOpen={isSideNavOpen}
        closeNav={() => setIsSideNavOpen(false)}
      />

      <NoteEditModal
        isOpen={isNoteEditOpen}
        closeModal={() => {
          setNoteEditOpen(false);
          clearCurrentNote();
        }}
      />
    </>
  );

  function setDefaultSideNavOpenState() {
    setCookie(
      "defaultSideNavOpenState",
      cookies.defaultSideNavOpenState ? !cookies.defaultSideNavOpenState : true
    );
  }
}

export default Home;
