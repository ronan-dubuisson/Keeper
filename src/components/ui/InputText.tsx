import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import Border from "./branding/Border";

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
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="relative my-3">
      <Border highlight={isFocus}>
        <input
          className="pl-11 font-size-normal border-none outline-none text-center w-410px h-45px font-primary "
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          autoComplete={name}
          autoFocus={autoFocus}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        ></input>

        {icon && (
          <FontAwesomeIcon
            className="absolute top-50% left-13px translate-y--50% h-20px"
            icon={icon}
          />
        )}
      </Border>
    </div>
  );
}

export default InputText;
