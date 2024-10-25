import { Note as TNote } from "../../types";
import { useState } from "react";
import NoteControls from "./NoteControls";
import NoteBody from "./NoteBody";
import NoteFooter from "./NoteFooter";

interface Props {
  note: TNote;
}

function Note({ note }: Props) {
  const [isDone, setIsDone] = useState(false);

  function setNoteClassNames() {
    return isDone ? "note note-done" : "note";
  }

  function handleStateChange() {
    setIsDone(!isDone);
  }

  return (
    <div className={setNoteClassNames()}>
      <NoteControls isDone={isDone} setIsDone={handleStateChange} />
      <NoteBody title={note.title} content={note.body} />
      <NoteFooter />
    </div>
  );
}

export default Note;
