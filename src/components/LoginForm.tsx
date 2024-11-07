import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import InputText from "@components/ui/InputText";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import FaIcon from "@components/ui/FaIcon";
import {
  faApple,
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function LoginForm() {
  const { user, loginUser } = useAuth();
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
      loginUser(credentials.userName, credentials.password);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e: { target: { value: string; name: string } }) {
    const { value, name } = e.target;

    setCredentials({ ...credentials, [name]: value });
  }

  return (
    <div className="flex justify-center flex-items-center w-100vw my-auto ">
      <form
        onSubmit={handleSubmit}
        className="login-form border-rd-10px w-550px h-480px bg-white p-40px flex flex-col flex-items-center justify-around font-primary color-primary-600 border-1px border-solid border-color-primary-600"
      >
        <div>
          <h1 className="m-0 font-bold font-size-big">Sign In</h1>
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
          <p className="m-0 mt-1 text-align-right font-size-normal underline cursor-pointer">
            Forgot password?
          </p>{" "}
        </div>
        <div className="flex flex-col flex-items-center">
          {/* TODO: change to react link component */}
          <button
            type="submit"
            className=" m-1 cursor-pointer font-primary w-150px h-40px font-size-medium bg-secundary-300 border-rd-10px border-color-secundary-600 border-style-solid border-1px"
          >
            login
          </button>
          <p className="m-1 font-size-normal underline cursor-pointer">
            Don't have an account?
          </p>{" "}
        </div>
        <div className="w-100%">
          {/* //TODO: change to react link component */}
          <div className="mb-5 flex flex-items-center before:content-[''] before:flex-1 before:h-1px before:bg-black after:content-[''] after:flex-1 after:h-1px after:bg-black">
            <p className="m-0">Or sign in using</p>
          </div>
          <div className="flex justify-center gap-40px">
            <FaIcon icon={faGoogle} brand={true} isPointer={true} />
            <FaIcon icon={faApple} brand={true} isPointer={true} />
            <FaIcon icon={faFacebook} brand={true} isPointer={true} />
            <FaIcon icon={faXTwitter} brand={true} isPointer={true} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
