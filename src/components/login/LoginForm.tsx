import { useEffect, useState } from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";

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
  const [isMouseOver, setIsMouseOver] = useState(false);

  //const navigate = useNavigate();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    loginUser(credentials.userName, credentials.password);
  }

  function handleChange(e: { target: { value: string; name: string } }) {
    const { value, name } = e.target;

    setCredentials({ ...credentials, [name]: value });
  }

  function handleMouseOverLoginButton() {
    setIsMouseOver(true);
  }

  function handleMouseOutLoginButton() {
    setIsMouseOver(false);
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="">
        <div className="">
          <h1 className="">Login</h1>
        </div>
        <div className="">
          <input
            name="userName"
            className=""
            type="text"
            placeholder="Enter Username"
            value={credentials.userName}
            required={true}
            onChange={handleChange}
            autoComplete="username"
          />
          <input
            name="password"
            className=""
            type="password"
            placeholder="Enter Password"
            value={credentials.password}
            required={true}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <button
            type="submit"
            className=""
            onMouseOver={handleMouseOverLoginButton}
            onMouseOut={handleMouseOutLoginButton}
          >
            login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
