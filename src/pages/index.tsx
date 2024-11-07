import Note from "@components/Note";
import { NoteType } from "@src/types";
import { NOTES } from "@src/data/notes";
import Heading from "@components/Heading";
import Footer from "@components/Footer";

function Home() {
  return (
    <>
      <Heading />
      <div className="my-6 mx-[10%] flex flex-wrap gap-lg justify-center w-auto">
        {NOTES.map((note: NoteType) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
