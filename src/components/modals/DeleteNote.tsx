import { NoteRow } from "@src/types";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  note: NoteRow;
}

function DeleteNote({ isOpen, closeModal, note }: Props) {
  if (!isOpen) return null;

  return (
    <div className="top-0 bottom-0 left-0 right-0 flex flex-justify-center flex-items-center bg-brand backdrop-blur bg-opacity-70 fixed z-10">
      <div className="bg-white border-solid border-rd-10px border-1px w-550px flex flex-col flex-justify-start flex-items-center p-10 color-brand relative">
        <div className="bg-brand-primary-400 hover:bg-brand-secundary-300 border-brand border-solid border-1px px-7px py-5px border-rd-5px absolute top-0 right-0 translate-y--50% translate-x-50% cursor-pointer">
          <FontAwesomeIcon
            className=" color-brand"
            icon={faXmark}
            size="lg"
            onClick={closeModal}
          />
        </div>
        <h1>Are you sure you want to delete the following note?</h1>
        <p>{note.title}</p>
        <p>{note.content}</p>
        <Button value="DELETE" />
      </div>
    </div>
  );
}

export default DeleteNote;
