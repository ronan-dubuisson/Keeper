import { useState } from "react";
import FaControlIcon from "@src/components/ui/FaIcon";
import {
  faSquareCheck,
  faTrashCan,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { NoteType } from "../types";

interface Props {
  note: NoteType;
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
      className={`note w-15rem h-15rem p-4 b-rounded-lg ${isDone ? "decoration-line-through" : ""} flex flex-col`}
    >
      <div className="flex justify-between">
        {isDone ? (
          <FaControlIcon
            isPointer={true}
            icon={faSquareCheck}
            onClick={handleStateChange}
          />
        ) : (
          <FaControlIcon
            icon={faSquare}
            onClick={handleStateChange}
            isPointer={true}
          />
        )}
        <FaControlIcon
          isPointer={true}
          icon={faUpRightAndDownLeftFromCenter}
          onClick={() => {}}
        />
      </div>
      <div>
        <h1 className="text-size-xl line-clamp-2">{note.title}</h1>
        <p className="text-size-base line-clamp-6">{note.content}</p>
      </div>
      <div className="flex justify-between mt-auto">
        <FaControlIcon icon={faTrashCan} onClick={() => {}} isPointer={true} />
        <p className="m-0">24/10/2024 16:59</p>
      </div>
    </div>
  );
}

export default Note;
