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
      loginWithPassword: (userName: string, password: string) => void;
      oauthLogin: (provider: Provider) => void;
      registerUser: () => void;
      logoutUser: () => void;
    }
  | undefined;
