import {
  faSquare,
  faSquareCheck,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FaControlIcon from "../common/FaControlIcon";

interface Props {
  isDone: boolean;
  setIsDone: () => void;
}

function NoteControls({ isDone, setIsDone }: Props) {
  return (
    <div className="note-controls clickable-pointer">
      {isDone ? (
        <FaControlIcon
          icon={faSquareCheck}
          onclick={() => {
            setIsDone();
          }}
        />
      ) : (
        <FaControlIcon
          icon={faSquare}
          onclick={() => {
            setIsDone();
          }}
        />
      )}
      <FaControlIcon
        className="note-toggle-full-size clickable-pointer"
        icon={faUpRightAndDownLeftFromCenter}
        onclick={() => {}}
      />
    </div>
  );
}

export default NoteControls;
