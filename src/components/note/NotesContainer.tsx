import { useNotes } from "@src/hooks/useNotes";
import NoteCard from "./NoteCard";
import { NoteRow } from "@src/types";
import Toolbar from "../notes-toolbar/Toolbar";
import { createPortal } from "react-dom";
import NoteEditModal from "../modals/NoteEditModal";
import { useState } from "react";

function NoteContainer() {
  const [isNoteEditOpen, setNoteEditOpen] = useState(false);
  const { notes, clearCurrentNote } = useNotes();

  return (
    <div className="flex-grow my-10% mx-10% flex flex-wrap gap-lg justify-center font-primary">
      <Toolbar openNoteEditModal={openNoteEdit} />
      {notes.length > 0 &&
        notes.map((note: NoteRow) => (
          <NoteCard
            key={note.id}
            note={note}
            openNoteEdit={() => setNoteEditOpen(true)}
          />
        ))}

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
  );

  function openNoteEdit() {
    setNoteEditOpen(true);
  }
}

export default NoteContainer;
