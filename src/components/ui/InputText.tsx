import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Icon from "@src/components/ui/FaIcon";

interface Props {
  type: "text" | "password";
  placeholder: string;
  onChange: (e: { target: { value: string; name: string } }) => void;
  value: string;
  required?: boolean;
  name: string;
  icon?: IconDefinition;
}

function InputText({
  type = "text",
  placeholder,
  onChange,
  value,
  required = false,
  name,
  icon = undefined,
}: Props) {
  return (
    <div className="relative">
      <input
        className="font-size-normal my-1 pl-11 text-center w-410px h-45px font-primary border-[#122D36] border-1px border-rd-5px border-style-solid"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        autoComplete={name}
      ></input>
      {icon && <Icon icon={icon} position="absolute" input={true} />}
    </div>
  );
}

export default InputText;
