import { useState } from "react";
import ControlIcon from "@src/components/ui/NoteControlIcon";
import {
  faSquareCheck,
  faTrashCan,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { NoteRow } from "@src/types";

interface Props {
  note: NoteRow;
}
/**
 * @param note - single note object
 * @returns a single note
 */
function Note({ note }: Props) {
  const [isDone, setIsDone] = useState(false);

  function handleStateChange() {
    setIsDone(!isDone);
    // Call your API to update the note status here.
  }

  return (
    <div
      className={`note w-15rem h-15rem p-4 b-rounded-lg ${
        isDone ? "decoration-line-through" : ""
      } flex flex-col`}
    >
      <div className="flex justify-between">
        {isDone ? (
          <ControlIcon icon={faSquareCheck} onClick={handleStateChange} />
        ) : (
          <ControlIcon icon={faSquare} onClick={handleStateChange} />
        )}
        <ControlIcon icon={faUpRightAndDownLeftFromCenter} onClick={() => {}} />
      </div>
      <div>
        <h1 className="text-size-xl line-clamp-2">{note.title}</h1>
        <p className="text-size-base line-clamp-6">{note.content}</p>
      </div>
      <div className="flex justify-between mt-auto">
        <ControlIcon icon={faTrashCan} onClick={() => {}} />
        <p className="m-0">24/10/2024 16:59</p>
      </div>
    </div>
  );
}

export default Note;
