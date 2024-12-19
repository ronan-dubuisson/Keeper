interface Props {
  value: string;
}

function NoteHeader({ value }: Props) {
  return <h1 className="text-size-xl line-clamp-2">{value}</h1>;
}

export default NoteHeader;
