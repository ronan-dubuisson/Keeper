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
      lastError: string | null;
      clearError: ()=> void;
      loginWithPassword: (userName: string, password: string) => Promise<boolean>;
      oauthLogin: (provider: Provider) => void;
      registerUser: () => void;
      logoutUser: () => void;
    }
  | undefined;

export type NoteContextType =
  | {
      notes: NoteRow[];
      getNoteById : (id: string) => NoteRow;
      currentNoteToEdit: NoteRow | undefined;
      insertNote: (title: string, content: string) => Promise<void>;
      updateNote: (id: string, fieldsToUpdate: NoteUpdate) => Promise<noteRow>;
      setEditNote: (id: string) => void;
      clearCurrentNote: () => void;
      formatTimeStamp: (dateTime: string) => string;
    }
  | undefined;
