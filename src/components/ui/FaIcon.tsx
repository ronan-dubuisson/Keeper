import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface Props {
  icon: IconDefinition;
  onClick?: () => void;
  isPointer?: boolean;
  position?: "absolute" | "relative";
  input?: boolean;
  brand?: boolean;
}

function control({
  icon,
  onClick = undefined,
  isPointer = false,
  position = "relative",
  input = false,
  brand = false,
}: Props) {
  //
  const iconClass = classNames(position, "left-0", {
    "cursor-pointer": isPointer,
    "top-50% left-13px translate-y--50% h-20px": input,
    "text-brand": input || brand,
    "h-40px hover:text-brand-secundary-300 hover:transition-ease-out hover:transition-transform-300 hover:transform-scale-150":
      brand,
  });

  return (
    <FontAwesomeIcon icon={icon} onClick={onClick} className={iconClass} />
  );
}

export default control;
