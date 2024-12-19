import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import Border from "@components/ui/Border";

interface Props {
  type: "ERROR" | "INFO" | "WARNING";
  message: string | null;
  isOpen: boolean;
  closeModal: () => void;
}

function Alert({ type, message, isOpen, closeModal }: Props) {
  const alertStyling = classNames(
    "bg-brand-primary-400",
    "bg-opacity-70",
    "transition-height-200",
    "absolute",
    "top-10px",
    "left-10px",
    "right-10px",
    "text-center",
    { "h-0": !isOpen },
    { "h-20px p-1": isOpen },
    { "text-red-9": type === "ERROR" },
    { "text-blue-9": type === "INFO" },
    { "text-yellow-7": type === "WARNING" }
  );

  const iconStyle = classNames(
    "top-5px",
    "right-5px",
    "absolute",
    "cursor-pointer",
    { hidden: !isOpen }
  );

  const messageStyle = classNames(
    "transition-delay-100",
    "transition-opacity-100",
    { "opacity-100": isOpen },
    { "opacity-0": !isOpen }
  );

  return (
    <Border visible={isOpen} styling={alertStyling}>
      <FontAwesomeIcon
        className={iconStyle}
        icon={faXmark}
        onClick={closeModal}
      />
      <div className={messageStyle}>{message}</div>
    </Border>
  );
}

export default Alert;
