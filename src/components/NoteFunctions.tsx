import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  openModal?: () => void;
}

function NoteControls({ openModal }: Props) {
  return (
    <div className="flex flex-justify-center w-100%">
      <div className="cursor-pointer border-rd-50% bg-brand-primary-400 hover:bg-brand-secundary-300 border-brand border-1px border-solid translate-y-50%">
        <FontAwesomeIcon
          icon={faPlus}
          className="m-3"
          size="2xl"
          onClick={openModal}
        />
      </div>
    </div>
  );
}

export default NoteControls;
