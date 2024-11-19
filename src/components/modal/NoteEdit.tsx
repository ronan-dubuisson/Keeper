import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputText from "../ui/InputText";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TextArea from "../ui/textArea";
import Button from "../ui/Button";
import { useState } from "react";
import { useAuth } from "@src/hooks/useAuth";
import supabase from "@src/utils/supabaseConfig";
import { NoteInsert, NoteRow } from "@src/types";

interface Props {
  closeModal: () => void;
  addNote: (note: NoteRow) => void;
}

function NoteEdit({ closeModal, addNote }: Props) {
  const { user } = useAuth();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e: { target: { value: string; name: string } }) {
    const { value, name } = e.target;

    setNote({ ...note, [name]: value });
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const newNote: NoteInsert = {
      ...note,
      user_uuid: user.id,
      created_on: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("notes")
      .insert([newNote])
      .select();

    if (data !== null) {
      addNote(data[0]);
      closeModal();
    } else if (error) {
      throw new Error("Note could note be added to the database!!!");
    }
  }

  return (
    <div className="w-100% h-100% flex flex-justify-center flex-items-center bg-#ccc backdrop-blur bg-opacity-70 fixed z-10">
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
          placeholder="Give the note a title"
          onChange={handleChange}
          value={note.title}
        />
        <TextArea name="content" value={note.content} onChange={handleChange} />
        <Button value="Save note" />
      </form>
    </div>
  );
}

export default NoteEdit;
