import { useState } from "react";
import NoteHeader from "@components/note/NoteHeader";
import NoteControlIcon from "@src/components/note/NoteControlIcon";
import {
  faSquareCheck,
  faTrashCan,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { useNotes } from "@src/hooks/useNotes";
import Border from "../ui/Border";
import { NoteRow } from "@src/types";
import NoteContent from "./NoteContent";

interface Props {
  note: NoteRow;
  openNoteEdit: () => void;
}
/**
 * @param note - single note object
 * @returns a single note
 */
function Note({ note, openNoteEdit }: Props) {
  const [isDone, setIsDone] = useState(note.is_done);
  const { formatTimeStamp, updateNote, setEditNote } = useNotes();

  function handleStateChange() {
    setIsDone(!isDone);
    updateNote(note.id, { is_done: !note.is_done });
  }

  function handleEditNote() {
    setEditNote(note.id);
    openNoteEdit();
  }

  return (
    <Border
      styling={`note w-15rem h-15rem p-4 ${
        isDone ? "decoration-line-through" : ""
      } flex flex-col`}
      highlight={true}
    >
      <div className="flex justify-between">
        <NoteControlIcon
          icon={isDone ? faSquareCheck : faSquare}
          onClick={handleStateChange}
        />
        <NoteControlIcon
          icon={faUpRightAndDownLeftFromCenter}
          onClick={handleEditNote}
        />
      </div>
      <div>
        <NoteHeader value={note.title} />
        <NoteContent value={note.content} />
      </div>
      <div className="flex justify-between mt-auto">
        <NoteControlIcon icon={faTrashCan} onClick={() => {}} />
        <p className="m-0 font-size-small">
          {`last updated: ${formatTimeStamp(note.last_updated_on)}`}
        </p>
      </div>
    </Border>
  );
}

export default Note;
