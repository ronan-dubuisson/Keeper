import { Account, Client } from "appwrite";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Context } from "../types";

const AuthContext = createContext<Context>(undefined);

type Props = PropsWithChildren;

export const AuthProvider = ({ children }: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = (userName: string, password: string) => {
    const client = new Client();
    const account = new Account(client);

    const promise = account.createEmailPasswordSession(userName, password);

    promise.then(
      function (response) {
        console.log(response);
        //setUser(response) // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  const register = () => {};

  const logout = (userInfo) => {};

  const checkUserStatus = () => {};

  const contextData = {
    user,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isLoading ? <p>LOADING....</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
