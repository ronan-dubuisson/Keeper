import {
  faGear,
  faNoteSticky,
  faPowerOff,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@hooks/useAuth";
import NavItem from "@components/ui/NavItem";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  isOpen: boolean;
  closeNav: () => void;
}

function SidebarModal({ isOpen, closeNav }: Props) {
  /**HOOKS */
  const { logoutUser } = useAuth();

  /**STYLING */
  const navStyle = classNames(
    "fs-modal",
    "bg-brand-primary-400",
    "overflow-hidden",
    "flex",
    "justify-center",
    "flex-items-center",
    "font-size-medium",
    "transition-width-500",
    { "w-0": !isOpen },
    { "w-100%": isOpen }
  );

  const navMenuDivStyle = classNames("absolute", "top-20px", "right-20px");
  const navIconStyle = classNames(
    "cursor-pointer",
    "hover:text-brand-secundary-300",
    "h-20px",
    "w-20px"
  );
  const itemDivStyle = classNames(
    "p-5",
    "decoration-none",
    "flex",
    "flex-col",
    "flex-items-start",
    "gap-10"
  );

  /**COMPONENT LOGIC */
  return (
    <div className={navStyle}>
      <div className={navMenuDivStyle}>
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
    </div>
  );
}

export default SidebarModal;
