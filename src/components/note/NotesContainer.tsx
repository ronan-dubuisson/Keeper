import { NOTES } from "../../data/notes";
import { Note as TNote } from "../../types";
import Note from "./Note";

function NotesContainer() {
  return (
    <div className="notes-container">
      {NOTES.map((note: TNote) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NotesContainer;
