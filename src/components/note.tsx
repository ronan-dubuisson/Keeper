import { Note as TNote } from "../types";

interface Props {
  note: TNote;
}

function Note({ note }: Props) {
  return (
    <div className="note">
      <h1>{note.id + " - " + note.title}</h1>
      <p>{note.body}</p>
    </div>
  );
}

export default Note;
