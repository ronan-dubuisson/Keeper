import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition;
  onclick: () => void;
  className?: string;
}

function control({ icon, onclick, className }: Props) {
  return (
    <FontAwesomeIcon icon={icon} onClick={onclick} className={className} />
  );
}

export default control;
