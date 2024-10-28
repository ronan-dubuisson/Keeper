export type TNote = {
  id: number;
  title: string;
  content: string;
};

export type TSession = object | null;
export type TAccount = object | null;

export type TUserContext =
  | {
      user: TAccount | null;
      loginUser: (userName: string, password: string) => void;
      registerUser: () => void;
      logoutUser: () => void;
    }
  | undefined;
