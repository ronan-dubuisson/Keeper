import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";

interface Props {
  type: "text" | "password";
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required?: boolean;
  name: string;
  icon?: IconDefinition;
  autoFocus?: boolean;
}

/**
 * @param type - can either be "text" or "password. DEFAULT = "text"
 * @param placeholder - specify the placeholder text
 * @param onChange - optional callback for change event.
 * @param value - optional value when controlled from higher order component
 * @param required - default false - make that field required for a form submission
 * @param name - name of the input field
 * @param icon - optional icon for inside the input field
 * @returns an input field as jsx element of type "text" or "password".
 */
function InputText({
  type,
  placeholder,
  onChange = undefined,
  value,
  required = false,
  name,
  icon = undefined,
  autoFocus = false,
}: Props) {
  return (
    <div className="relative">
      <input
        className="font-size-normal my-1 pl-11 text-center w-410px h-45px font-primary border-brand border-1px border-rd-5px border-style-solid
         focus:outline-brand-secundary-300"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        autoComplete={name}
        autoFocus={autoFocus}
      ></input>
      {icon && (
        <FontAwesomeIcon
          className="absolute top-50% left-13px translate-y--50% h-20px"
          icon={icon}
        />
      )}
    </div>
  );
}

export default InputText;
