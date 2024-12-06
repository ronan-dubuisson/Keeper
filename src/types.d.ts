import { Tables, TablesInsert, TablesUpdate } from "@databaseTypes";

/**
 * Supabase general types
 */
export type SessionType = object | null;

/** supabase database types */
export type NoteRow = Tables<"notes">;
export type NoteInsert = TablesInsert<"notes">;
export type NoteUpdate = TablesUpdate<"notes">;

/**
 * context types
 */
export type UserContextType =
  | {
      user: TAccount | null;
      lastError: string;
      loginWithPassword: (userName: string, password: string) => string;
      oauthLogin: (provider: Provider) => void;
      registerUser: () => void;
      logoutUser: () => void;
    }
  | undefined;

export type NoteContextType =
  | {
      notes: NoteRow[];
      fetchNotes: () => void;
      currentNoteToEdit: NoteRow | undefined;
      insertNote: (title: string, content: string) => Promise<void>;
      updateNote: (id: string, fieldsToUpdate: NoteUpdate) => Promise<noteRow>;
      setEditNoteId: (id: string) => void;
      clearCurrentNote: () => void;
      formatTimeStamp: (dateTime: string) => string;
    }
  | undefined;
