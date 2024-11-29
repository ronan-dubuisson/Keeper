import NoteFunctions from "@components/NoteFunctions";
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
function Heading({
  openModal,
  renderNoteFunctions = true,
  sideNaveToggleIcon = false,
  openSideNav,
  sideNavOpen,
}: Props) {
  return (
    <header
      className={
        "sticky top-0 z-10 flex-grow-0 flex-shrink-1 flex-basis-auto color-brand bg-brand-primary-400 flex flex-col justify-start border-b-1px border-brand border-b-solid"
      }
    >
      <div className="flex">
        <h1 className="font-title font-bold font-size-title m-0 p-20px">
          Notify
        </h1>
      </div>

      {sideNaveToggleIcon && !sideNavOpen && (
        <FontAwesomeIcon
          className="cursor-pointer absolute left-20px bottom-20px hover:text-brand-secundary-300"
          icon={faBars}
          onClick={openSideNav}
        />
      )}
      {renderNoteFunctions && <NoteFunctions openModal={openModal} />}
    </header>
  );
}

export default Heading;
