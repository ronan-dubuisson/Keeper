import { createContext, PropsWithChildren, useState } from "react";
import { UserContextType } from "@src/types";
import supabase from "@utils/supabaseConfig";
import { Provider, User } from "@supabase/supabase-js";
import { useQuery } from "react-query";

const AuthContext = createContext<UserContextType>(undefined);

type Props = PropsWithChildren;
//TODO: convert const function to functions
export function AuthProvider({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>();
  const [lastError, setLastError] = useState<string>("");

  useQuery({
    queryFn: () => checkUserStatus(),
    queryKey: ["user"],
  });

  async function loginWithPassword(
    userName: string,
    password: string
  ): Promise<string | null> {
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: userName,
      password: password,
    });

    if (error) {
      setLoading(false);
      return `${error.status}: ${error.message}`;
    } else {
      setUser(data.user);
      setLoading(false);
      setLastError("");
      return null;
    }
  }

  async function oauthLogin(provider: Provider) {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: import.meta.env.VITE_BASE_URL,
      },
    });

    if (error) {
      console.log(error);
      setLoading(false);
    }

    setLoading(false);
  }

  function registerUser() {}

  async function logoutUser() {
    const { error } = await supabase.auth.signOut({ scope: "local" });

    if (error) {
      return { error: { status: error.status, message: error.message } };
    } else {
      setUser(undefined);
      return { error: null };
    }
  }

  async function checkUserStatus() {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      setLoading(false);
      throw error;
    }

    setUser(data.user);
    setLoading(false);
  }

  const contextData = {
    user,
    lastError,
    loginWithPassword,
    oauthLogin,
    registerUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>LOADING....</p> : children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
