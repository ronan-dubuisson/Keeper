import { useAuth } from "@src/hooks/useAuth";

function Heading() {
  const { logoutUser } = useAuth();

  function handleClickLogout() {
    logoutUser();
  }
  return (
    <header className="bg-primary-400 h-100px flex justify-start flex-items-center w-100vw">
      <h1 className="color-primary-600 font-caveat font-bold font-size-title m-0 p-20px">
        Notify
      </h1>
      <button className="" onClick={handleClickLogout}>
        <p>logout</p>
      </button>
    </header>
  );
}

export default Heading;
