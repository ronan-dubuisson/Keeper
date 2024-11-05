import { useAuth } from "@src/hooks/useAuth";

function Heading() {
  const { logoutUser } = useAuth();

  function handleClickLogout() {
    logoutUser();
  }
  return (
    <header className="flex flex-justify-between sticky m-0 top-0 px-10 left-0 text-center bg-amber color-primary">
      <h1 className="m-0 py-5">Keeper</h1>
      <button className="" onClick={handleClickLogout}>
        <p>logout</p>
      </button>
    </header>
  );
}

export default Heading;
