import { useState } from "react";
import ControlIcon from "@src/components/ui/NoteControlIcon";
import {
  faSquareCheck,
  faTrashCan,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { useNotes } from "@src/hooks/useNotes";
import Border from "./ui/Border";
import { NoteRow } from "@src/types";

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
  const [isMouseOver, setIsMouseOver] = useState(false);
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
    <Border highlight={isMouseOver}>
      <div
        className={`note w-15rem h-15rem p-4 b-rounded-lg ${
          isDone ? "decoration-line-through" : ""
        } flex flex-col`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div className="flex justify-between">
          <ControlIcon
            icon={isDone ? faSquareCheck : faSquare}
            onClick={handleStateChange}
          />
          <ControlIcon
            icon={faUpRightAndDownLeftFromCenter}
            onClick={handleEditNote}
          />
        </div>
        <div>
          <h1 className="text-size-xl line-clamp-2">{note.title}</h1>
          <p className="text-size-base line-clamp-6">{note.content}</p>
        </div>
        <div className="flex justify-between mt-auto">
          <ControlIcon icon={faTrashCan} onClick={() => {}} />
          <p className="m-0 font-size-small">
            {`last updated: ${formatTimeStamp(note.last_updated_on)}`}
          </p>
        </div>
      </div>
    </Border>
  );
}

export default Note;
