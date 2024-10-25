import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import FaControlIcon from "../common/FaControlIcon";

function NoteFooter() {
  return (
    <div className="note-footer">
      <FaControlIcon
        icon={faTrashCan}
        onclick={() => {}}
        className="note-footer-trash"
      />
      <p className="note-footer-date-time">24/10/2024 16:59</p>
    </div>
  );
}

export default NoteFooter;
