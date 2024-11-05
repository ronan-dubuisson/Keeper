import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition;
  onclick: () => void;
  isPointer?: boolean;
}

function control({ icon, onclick, isPointer }: Props) {
  return (
    <FontAwesomeIcon
      icon={icon}
      onClick={onclick}
      className={isPointer !== undefined ? "cursor-pointer" : ""}
    />
  );
}

export default control;
