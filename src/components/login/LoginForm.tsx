import { useEffect, useState } from "react";
import Style from "./LoginForm.module.css";
import cx from "classnames";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
    <div className={cx(Style.wrapper, Style.flex)}>
      <form
        onSubmit={handleSubmit}
        className={cx(Style.flex, Style.flex_column, Style.loginForm)}
      >
        <div className={Style.formHeader}>
          <h1 className={Style.formHeaderTitle}>Login</h1>
        </div>
        <div
          className={cx(
            Style.formBody,
            Style.flex,
            Style.flex_column,
            Style.flex_gap_1
          )}
        >
          <input
            name="userName"
            className={Style.loginInput}
            type="text"
            placeholder="Enter Username"
            value={credentials.userName}
            required={true}
            onChange={handleChange}
            autoComplete="username"
          />
          <input
            name="password"
            className={cx(Style.loginInput)}
            type="password"
            placeholder="Enter Password"
            value={credentials.password}
            required={true}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <button
            type="submit"
            className={cx(
              Style.loginButton,
              isMouseOver
                ? Style.loginButtonMouseOver
                : Style.loginButtonMouseOut
            )}
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
