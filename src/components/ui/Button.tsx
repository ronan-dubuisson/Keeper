interface Props {
  value: string;
}
function Button({ value }: Props) {
  return (
    <button
      type="submit"
      className="m-1 cursor-pointer font-primary w-150px h-40px font-size-medium border-rd-10px border-style-solid border-1px
             bg-brand-primary-400 text-brand border-brand 
            hover:bg-brand-secundary-300 hover:transition"
    >
      {value}
    </button>
  );
}

export default Button;
