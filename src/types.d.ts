import { Tables, TablesInsert } from "@databaseTypes";

/**
 * Supabase general types
 */
export type SessionType = object | null;
export type AccountType = object | null;

/** supabase database types */
export type NoteRow = Tables<"notes">
export type NoteInsert = TablesInsert<"notes">

/**
 * context types
 */
export type UserContextType =
  | {
      user: TAccount | null;
      loginWithPassword: (userName: string, password: string) => void;
      oauthLogin: (provider: Provider) => void;
      registerUser: () => void;
      logoutUser: () => void;
    }
  | undefined;
