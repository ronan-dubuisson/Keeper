import { Note as TNote } from "../types";
import { useState } from "react";

interface Props {
  note: TNote;
}

function Note({ note }: Props) {
  const [isDone, setIsDone] = useState(false);

  function setNoteClassNames() {
    return isDone ? "note note-done" : "note";
  }

  return (
    <div
      className={setNoteClassNames()}
      onClick={() => {
        setIsDone(!isDone);
      }}
    >
      <h1>{note.id + " - " + note.title}</h1>
      <p>{note.body}</p>
      <input type="checkbox" checked={isDone} readOnly />
      <p className="time">24/10/2024 16:59</p>
    </div>
  );
}

export default Note;
