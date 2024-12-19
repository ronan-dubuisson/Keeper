import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  openModal?: () => void;
  renderNoteFunctions?: boolean;
  sideNaveToggleIcon?: boolean;
  openSideNav?: () => void;
  sideNavOpen?: boolean;
}
/**
 * return the heading element
 * @param position - optional position - default is relative
 * @returns the heading as jsx element
 */
function Heading({ openSideNav }: Props) {
  return (
    <header
      className={
        "color-brand bg-brand-primary-400 flex flex-col flex-items-start gap-5 border-b-1px border-brand border-b-solid p-20px"
      }
    >
      <h1 className="font-title font-bold font-size-title m-0 ">Notify</h1>

      <FontAwesomeIcon
        className="cursor-pointer left-20px bottom-20px hover:text-brand-secundary-300"
        icon={faBars}
        onClick={openSideNav}
      />
    </header>
  );
}

export default Heading;
