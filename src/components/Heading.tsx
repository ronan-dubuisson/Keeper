import { useAuth } from "@src/hooks/useAuth";
import classNames from "classnames";
import NoteFunctions from "@components/NoteFunctions";

interface Props {
  position?: "sticky" | "relative";
  openModal?: () => void;
}
/**
 * return the heading element
 * @param position - optional position - default is relative
 * @returns the heading as jsx element
 */
function Heading({ position = "relative", openModal }: Props) {
  const { logoutUser } = useAuth();

  function handleClickLogout() {
    logoutUser();
  }

  const cx = classNames(position, { "top-0 z-1": position === "sticky" });

  return (
    <header
      className={`${cx} color-brand bg-brand-primary-400 flex flex-col justify-start flex-items-start w-100vw border-b-1px border-brand border-b-solid`}
    >
      <div className="flex">
        <h1 className="font-title font-bold font-size-title m-0 p-20px">
          Notify
        </h1>
        <button className="" onClick={handleClickLogout}>
          <p>logout</p>
        </button>
      </div>
      <NoteFunctions openModal={openModal} />
    </header>
  );
}

export default Heading;
