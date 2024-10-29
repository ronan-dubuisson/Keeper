export type NoteType = {
  id: number;
  title: string;
  content: string;
};

export type SessionType = object | null;
export type AccountType = object | null;

export type UserContextType =
  | {
      user: TAccount | null;
      loginUser: (userName: string, password: string) => void;
      registerUser: () => void;
      logoutUser: () => void;
    }
  | undefined;
