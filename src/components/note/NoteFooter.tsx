import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NoteFooter() {
  return (
    <div className="note-footer">
      <FontAwesomeIcon
        className="note-footer-trash"
        icon={faTrashCan}
        onClick={() => {}}
      />
      <p className="note-footer-date-time">24/10/2024 16:59</p>
    </div>
  );
}

export default NoteFooter;
