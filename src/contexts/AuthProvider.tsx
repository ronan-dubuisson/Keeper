import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { AccountType, UserContextType } from "@src/types";
import { account } from "@utils/appwriteConfig";
const AuthContext = createContext<UserContextType>(undefined);

type Props = PropsWithChildren;
//TODO: convert const function to functions
export const AuthProvider = ({ children }: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<AccountType>(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  async function loginUser(userName: string, password: string) {
    setLoading(true);

    try {
      //Create session with email and password (only 1 session per user, default settings appwrite)
      await account.createEmailPasswordSession(userName, password);
      //get user datails
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      logoutUser();
      console.error(error); // Failure to login
    }

    setLoading(false);
  }

  function registerUser() {}

  function logoutUser() {
    account.deleteSession("current");
    setUser(null);
  }

  async function checkUserStatus() {
    try {
      //TODO: remove after testing
      console.info("check status called");
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error); // Failure to check user status
    }
    setLoading(false);
  }

  const contextData = {
    user,
    loginUser,
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
