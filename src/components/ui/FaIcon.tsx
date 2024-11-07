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
    "top-50%": input,
    "left-13px": input,
    "translate-y--50%": input,
    "h-20px": input,
    "color-primary-600": input || brand,
    "h-40px": brand,
  });

  return (
    <FontAwesomeIcon icon={icon} onClick={onClick} className={iconClass} />
  );
}

export default control;
