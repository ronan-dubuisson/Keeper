import { useState } from "react";
import { NOTES } from "../../data/notes";
import { NoteType } from "@src/types";
import Note from "@components/note/note";

function NotesContainer() {
  const [notes] = useState(NOTES);

  return (
    <div className="my-6 mx-[10%] flex flex-wrap gap-lg justify-center w-auto">
      {notes.map((note: NoteType) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NotesContainer;
