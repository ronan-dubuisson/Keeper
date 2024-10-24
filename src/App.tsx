import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Note from "./components/note";
import { NOTES } from "./data/notes";
import { Note as TNote } from "./types";

function App() {
  return (
    <>
      <Heading />
      {NOTES.map((note: TNote) => (
        <Note key={note.id} note={note} />
      ))}
      <Footer />
    </>
  );
}

export default App;
