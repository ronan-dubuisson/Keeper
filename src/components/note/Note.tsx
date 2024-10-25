import { Note as TNote } from "../../types";
import { useState } from "react";
import FaControlIcon from "../common/FaControlIcon";
import {
  faSquare,
  faSquareCheck,
  faTrashCan,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";

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
    // Call your API to update the note status here.
  }

  return (
    <div className={setNoteClassNames()}>
      <div className="note-controls clickable-pointer">
        {isDone ? (
          <FaControlIcon icon={faSquareCheck} onclick={handleStateChange} />
        ) : (
          <FaControlIcon icon={faSquare} onclick={handleStateChange} />
        )}
        <FaControlIcon
          className="note-toggle-full-size clickable-pointer"
          icon={faUpRightAndDownLeftFromCenter}
          onclick={() => {}}
        />
      </div>
      <div className="note-body">
        <h1 className="overflow-hidden">{note.title}</h1>
        <p className="content overflow-hidden">{note.content}</p>
      </div>
      <div className="note-footer">
        <FaControlIcon
          icon={faTrashCan}
          onclick={() => {}}
          className="note-footer-trash"
        />
        <p className="note-footer-date-time">24/10/2024 16:59</p>
      </div>
    </div>
  );
}

export default Note;