import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Note as TNote } from "../types";
import { useState } from "react";
import {
  faTrashCan,
  faUpRightAndDownLeftFromCenter,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";

interface Props {
  note: TNote;
}

function Note({ note }: Props) {
  const [isDone, setIsDone] = useState(false);

  function setNoteClassNames() {
    return isDone ? "note note-done" : "note";
  }

  //TODO: time = now at note creation time.
  return (
    <div className={setNoteClassNames()}>
      <div className="note-controls">
        {isDone ? (
          <FontAwesomeIcon
            icon={faSquareCheck}
            onClick={() => {
              setIsDone(!isDone);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faSquare}
            onClick={() => {
              setIsDone(!isDone);
            }}
          />
        )}
        <FontAwesomeIcon
          className="note-toggle-full-size"
          icon={faUpRightAndDownLeftFromCenter}
          onClick={() => {}}
        />
      </div>
      <div className="note-body">
        <h1 className="overflow-hidden">{note.title}</h1>
        <p className="content overflow-hidden">{note.body}</p>
      </div>
      <div className="note-footer">
        <FontAwesomeIcon
          className="note-footer-trash"
          icon={faTrashCan}
          onClick={() => {}}
        />
        <p className="note-footer-date-time">24/10/2024 16:59</p>
      </div>
    </div>
  );
}

export default Note;
