import { useAuth } from "@src/hooks/useAuth";
import classNames from "classnames";

interface Props {
  position?: "sticky" | "relative";
}
/**
 * return the heading element
 * @param position - optional position - default is relative
 * @returns the heading as jsx element
 */
function Heading({ position = "relative" }: Props) {
  const { logoutUser } = useAuth();

  function handleClickLogout() {
    logoutUser();
  }

  const cx = classNames(position, { "top-0 z-1": position === "sticky" });

  return (
    <header
      className={`${cx} bg-brand-primary-400 h-100px flex justify-start flex-items-center w-100vw border-b-1px border-brand border-b-solid`}
    >
      <h1 className="brand-primary-600 font-title font-bold font-size-title m-0 p-20px">
        Notify
      </h1>
      <button className="" onClick={handleClickLogout}>
        <p>logout</p>
      </button>
    </header>
  );
}

export default Heading;
