import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import InputText from "@components/ui/InputText";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import BrandLoginIcon from "@components/ui/BrandLoginIcon";
import {
  faApple,
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./ui/Button";
import Border from "./ui/Border";
import Alert from "./Alert";

/**
 * Handles dynamic status of the login form
 * @returns the login form
 */
function LoginForm() {
  const { user, loginWithPassword } = useAuth();
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  //const navigate = useNavigate();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    try {
      loginWithPassword(credentials.userName, credentials.password);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setCredentials({ ...credentials, [name]: value });
  }

  return (
    <>
      <div className="flex justify-center flex-items-center w-100vw my-auto ">
        <Border shadow={true}>
          <form
            onSubmit={handleSubmit}
            className="relative w-550px h-480px bg-white p-40px flex flex-col flex-items-center justify-around font-primary color-brand"
          >
            <div>
              <h1 className="m-0 font-bold font-size-medium">Sign In</h1>
            </div>
            <div>
              <InputText
                type="text"
                placeholder={"Enter Username"}
                onChange={handleChange}
                value={credentials.userName}
                name={"userName"}
                icon={faUser}
              />
              <InputText
                type="password"
                placeholder={"Enter Password"}
                onChange={handleChange}
                value={credentials.password}
                name={"password"}
                icon={faLock}
              />
              <p className="m-0 mt-1 text-align-right font-size-normal underline cursor-pointer hover:text-brand-secundary-300">
                Forgot password?
              </p>{" "}
            </div>
            <div className="flex flex-col flex-items-center">
              <Button value="Sign in" />
              <p className="m-1 font-size-normal underline cursor-pointer hover:text-brand-secundary-300">
                Don't have an account?
              </p>{" "}
            </div>
            <div className="w-100%">
              <div className="mb-5 flex flex-items-center before:content-[''] before:flex-1 before:h-1px before:bg-black after:content-[''] after:flex-1 after:h-1px after:bg-black">
                <p className="my-5 mx-5">Or sign in using</p>
              </div>
              <div className="flex justify-around flex-items-center">
                <BrandLoginIcon name="google" icon={faGoogle} />
                <BrandLoginIcon name="apple" icon={faApple} />
                <BrandLoginIcon name="facebook" icon={faFacebook} />
                <BrandLoginIcon name="twitter" icon={faXTwitter} />
              </div>
            </div>
            <Alert
              isOpen={isAlertOpen}
              message="Temporary Alert Message"
              closeModal={() => setIsAlertOpen(false)}
              timeToDisplayMilliSeconds={3000}
            />
          </form>
        </Border>
      </div>
    </>
  );
}

export default LoginForm;
