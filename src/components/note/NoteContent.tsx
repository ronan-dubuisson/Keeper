interface Props {
  value: string;
}

function NoteContent({ value }: Props) {
  return <p className="text-size-base line-clamp-6">{value}</p>;
}

export default NoteContent;
