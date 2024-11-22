import { useContext } from "react";
import NoteContext from "@src/contexts/NoteProvider";

export function useNotes () {
  const context = useContext(NoteContext);

  if (context === undefined) {
    throw new Error("useNotes must be used within an NoteProvider");
  }

  return context;
};
