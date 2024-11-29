import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition;
  displayText: string;
  onClick?: () => void;
}

function NavItem({ icon, displayText, onClick }: Props) {
  return (
    <div className="flex gap-2 cursor-pointer hover:text-brand-secundary-300">
      <FontAwesomeIcon icon={icon} />
      <a onClick={onClick}>{displayText}</a>
    </div>
  );
}

export default NavItem;
