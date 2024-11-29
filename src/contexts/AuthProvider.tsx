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

  useQuery({
    queryFn: () => checkUserStatus(),
    queryKey: ["user"],
  });

  async function loginWithPassword(userName: string, password: string) {
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: userName,
      password: password,
    });

    if (error) {
      setLoading(false);
      throw error;
    }

    setUser(data.user);
    setLoading(false);
  }

  async function oauthLogin(provider: Provider) {
    setLoading(true);

    try {
      const { data } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: import.meta.env.VITE_BASE_URL,
        },
      });

      console.log(data);
    } catch (error) {
      console.error(error); // Failure to login
    }

    setLoading(false);
  }

  function registerUser() {}

  async function logoutUser() {
    console.log("logout user called");
    try {
      await supabase.auth.signOut({ scope: "local" });
      setUser(undefined);
    } catch (error) {
      console.error(error); // Failure to logout
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
