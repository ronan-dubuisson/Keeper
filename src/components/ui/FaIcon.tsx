import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface Props {
  icon: IconDefinition;
  onClick?: () => void;
  position?: "absolute" | "relative";
  input?: boolean;
}

/**
 * A font awesome icon component that will return an icon element.
 * @param icon - specify the icon from the Font Awesome library for this.
 * @param onClick - specify the optional onClick event, will also handle the pointer cursor
 * @param position - specify the position as the icon may be used for different purposes
 * @param input - If to be used for input fields (position inside the input field)
 * @param brand - If to be used for brand icons.
 * @returns returns jsx Element with a font awesome icon
 */
function Icon({
  icon,
  onClick = undefined,
  position = "relative",
  input = false,
}: Props) {
  //
  const iconClass = classNames(position, "left-0", {
    "cursor-pointer": onclick != undefined,
    "top-50% left-13px translate-y--50% h-20px": input,
    "text-brand": input,
  });

  return (
    <FontAwesomeIcon icon={icon} onClick={onClick} className={iconClass} />
  );
}

export default Icon;
