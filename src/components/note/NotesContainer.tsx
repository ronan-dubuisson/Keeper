import { useState } from "react";
import { NOTES } from "../../data/notes";
import { Note as TNote } from "../../types";
import Note from "./Note";

function NotesContainer() {
  const [notes] = useState(NOTES);

  return (
    <div className="notes-container">
      {notes.map((note: TNote) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NotesContainer;
