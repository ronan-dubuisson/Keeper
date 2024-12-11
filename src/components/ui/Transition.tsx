import { PropsWithChildren } from "react";

interface Props {
  transition: string;
}

function Transition({ children, transition }: PropsWithChildren<Props>) {
  return <div className={transition}>{children}</div>;
}

export default Transition;
