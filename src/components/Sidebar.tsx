import {
  faGear,
  faNoteSticky,
  faPowerOff,
  faThumbTack,
  faThumbtackSlash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@hooks/useAuth";
import NavItem from "./ui/NavItem";
import Border from "./ui/Border";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  isOpen: boolean;
  closeNav: () => void;
  setDefaultSideNavOpenState: () => void;
  defaultSideNavOpenState: boolean;
}

function Sidebar({
  isOpen,
  closeNav,
  defaultSideNavOpenState,
  setDefaultSideNavOpenState,
}: Props) {
  /**HOOKS */
  const { logoutUser } = useAuth();

  /**STYLING */
  const navStyle = classNames(
    "z-20",
    "fixed",
    "h-100vh",
    "transition-width-300",
    "bg-brand-primary-400",
    { "w-0": !isOpen },
    { "w-200px": isOpen }
  );

  const navMenuDivStyle = classNames("flex", "justify-end", "gap-2", "p-20px");
  const navIconStyle = classNames(
    "cursor-pointer",
    "hover:text-brand-secundary-300",
    "h-20px",
    "w-20px"
  );
  const itemDivStyle = classNames(
    "w-15rem",
    "p-5",
    "decoration-none",
    "flex",
    "flex-col",
    "flex-items-start",
    "gap-4"
  );

  /**COMPONENT LOGIC */

  return (
    <div className={navStyle}>
      <Border borderRadius={false}>
        <div className={navMenuDivStyle}>
          <FontAwesomeIcon
            onClick={setDefaultSideNavOpenState}
            className={navIconStyle}
            icon={defaultSideNavOpenState ? faThumbtackSlash : faThumbTack}
          />
          <FontAwesomeIcon
            onClick={closeNav}
            className={navIconStyle}
            icon={faXmark}
          />
        </div>
        <div className={itemDivStyle}>
          <NavItem icon={faNoteSticky} displayText="Notes"></NavItem>
          <NavItem icon={faGear} displayText="Settings"></NavItem>
          <NavItem
            icon={faPowerOff}
            displayText="Logout"
            onClick={logoutUser}
          ></NavItem>
        </div>
      </Border>
    </div>
  );
}

export default Sidebar;
