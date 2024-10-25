interface Props {
  title: string;
  content: string;
}

function NoteBody({ title, content }: Props) {
  return (
    <div className="note-body">
      <h1 className="overflow-hidden">{title}</h1>
      <p className="content overflow-hidden">{content}</p>
    </div>
  );
}

export default NoteBody;
