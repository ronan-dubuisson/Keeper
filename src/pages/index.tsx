import Note from "@components/Note";
import { NoteType } from "@src/types";
import { NOTES } from "@src/data/notes";
import Heading from "@components/Heading";
import Footer from "@components/Footer";

function Home() {
  return (
    <>
      <Heading position="sticky" />
      <div className="my-10 mx-10% flex flex-wrap gap-lg justify-center font-primary">
        {NOTES.map((note: NoteType) => (
          <Note key={note.id} note={note} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;
