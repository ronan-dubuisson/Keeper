import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputText from "../ui/InputText";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TextArea from "../ui/textArea";
import Button from "../ui/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNotes } from "@src/hooks/useNotes";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

function NoteEditModal({ isOpen, closeModal }: Props) {
  const { insertNote, currentNoteToEdit, updateNote } = useNotes();
  const [note, setNote] = useState({
    title: currentNoteToEdit?.title ? currentNoteToEdit.title : "",
    content: currentNoteToEdit?.content ? currentNoteToEdit.content : "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value, name } = e.target;
    setNote({ ...note, [name]: value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (currentNoteToEdit) {
      updateNote(currentNoteToEdit.id, {
        title: note.title,
        content: note.content,
      });
    } else {
      insertNote(note.title, note.content);
    }

    closeModal();
  }

  if (!isOpen) return null;

  return (
    <div className="w-100% h-100% flex flex-justify-center flex-items-center bg-brand backdrop-blur bg-opacity-70 fixed z-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white border-solid border-rd-10px border-1px w-550px flex flex-col flex-justify-start flex-items-center p-10 color-brand relative"
      >
        <div className="bg-brand-primary-400 hover:bg-brand-secundary-300 border-brand border-solid border-1px px-7px py-5px border-rd-5px absolute top-0 right-0 translate-y--50% translate-x-50% cursor-pointer">
          <FontAwesomeIcon
            className=" color-brand"
            icon={faXmark}
            size="lg"
            onClick={closeModal}
          />
        </div>
        <InputText
          type="text"
          required={true}
          name="title"
          placeholder="Enter a note a title"
          onChange={handleChange}
          value={note.title}
          autoFocus={true}
        />
        <TextArea
          name="content"
          value={note.content}
          placeholder="Enter some content here"
          onChange={handleChange}
        />
        <Button value="Save note" />
      </form>
    </div>
  );
}

export default NoteEditModal;
