import {
  faSquare,
  faSquareCheck,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  isDone: boolean;
  setIsDone: () => void;
}

function NoteControls({ isDone, setIsDone }: Props) {
  return (
    <div className="note-controls">
      {isDone ? (
        <FontAwesomeIcon
          icon={faSquareCheck}
          onClick={() => {
            setIsDone();
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faSquare}
          onClick={() => {
            setIsDone();
          }}
        />
      )}
      <FontAwesomeIcon
        className="note-toggle-full-size"
        icon={faUpRightAndDownLeftFromCenter}
        onClick={() => {}}
      />
    </div>
  );
}

export default NoteControls;
