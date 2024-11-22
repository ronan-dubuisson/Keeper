import { ChangeEvent } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({ name, value, placeholder, onChange }: Props) {
  return (
    <textarea
      placeholder={placeholder}
      rows={20}
      className="border-brand p-5.5 w-410px resize-none border-rd-5px font-primary font-size-normal focus:outline-brand-secundary-300"
      name={name}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}

export default TextArea;
