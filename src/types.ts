export type Note = {
  id: number;
  title: string;
  content: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppwriteSession = { [key: string]: any } | null;

export type Context =
  | {
      user: { [key: string]: string } | null;
      login: (userName: string, password: string) => void;
      register: () => void;
      logout: (userInfo: { userId: string; sessionToken: string }) => void;
    }
  | undefined;
