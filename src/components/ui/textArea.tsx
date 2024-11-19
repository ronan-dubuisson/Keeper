interface Props {
  name: string;
  value: string;
  onChange?: (e: { target: { value: string; name: string } }) => void;
}

function TextArea({ name, value, onChange }: Props) {
  return (
    <textarea
      placeholder="Enter some content"
      rows={20}
      className="border-brand p-5.5 w-410px resize-none border-rd-5px font-primary font-size-normal"
      name={name}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}

export default TextArea;
