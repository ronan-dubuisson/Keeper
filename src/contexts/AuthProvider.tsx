import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { AccountType, UserContextType } from "@src/types";
import supabase from "@utils/supabaseConfig";
import { Provider } from "@supabase/supabase-js";

const AuthContext = createContext<UserContextType>(undefined);

type Props = PropsWithChildren;
//TODO: convert const function to functions
export const AuthProvider = ({ children }: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<AccountType>(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  async function loginWithPassword(userName: string, password: string) {
    setLoading(true);

    try {
      const { data } = await supabase.auth.signInWithPassword({
        email: userName,
        password: password,
      });

      setUser(data.user);
    } catch (error) {
      logoutUser();
      console.error(error); // Failure to login
    }

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
    try {
      await supabase.auth.signOut({ scope: "local" });
      setUser(null);
    } catch (error) {
      console.error(error); // Failure to logout
    }
  }

  async function checkUserStatus() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    } catch (error) {
      console.error(error); // Failure to check user status
    }
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
      {isLoading ? <p>LOADING....</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
