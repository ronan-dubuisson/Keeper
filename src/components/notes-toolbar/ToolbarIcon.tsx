import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface Props {
  icon: IconDefinition;
  show: boolean;
  onClick?: () => void;
}

function ToolbarIcon({ icon, show, onClick }: Props) {
  const itemSize = "xl";
  const itemStyle = classNames(
    "hover:color-brand-secundary-300",
    "cursor-pointer",
    "w-max",
    "transition-max-width-500",
    { "max-w-0px": !show },
    { "max-w-50px": show }
  );

  return (
    <FontAwesomeIcon
      className={itemStyle}
      onClick={onClick}
      icon={icon}
      size={itemSize}
    />
  );
}

export default ToolbarIcon;
