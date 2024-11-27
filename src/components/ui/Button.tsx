import Border from "./branding/Border";

interface Props {
  value: string;
}
function Button({ value }: Props) {
  return (
    <Border>
      <button
        type="submit"
        className="border-none cursor-pointer font-primary w-150px h-40px font-size-medium
             bg-brand-primary-400 text-brand
            hover:bg-brand-secundary-300 hover:transition"
      >
        {value}
      </button>
    </Border>
  );
}

export default Button;
