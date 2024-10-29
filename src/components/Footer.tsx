import { useAuth } from "../hooks/useAuth";

function Footer() {
  const { logoutUser } = useAuth();

  function handleClickLogout() {
    logoutUser();
  }

  return (
    <footer className="footer">
      <p>Copyright ⓒ {new Date().getFullYear()}</p>
      <button onClick={handleClickLogout}>
        <p>logout</p>
      </button>
    </footer>
  );
}

export default Footer;
