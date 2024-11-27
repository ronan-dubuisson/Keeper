import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  highlight?: boolean;
  shadow?: boolean;
}

function Border({ children, highlight, shadow }: Props) {
  const cx = classNames(
    "relative",
    "border-rd-10px",
    "outline-solid",
    "overflow-hidden",
    { "outline-color-brand outline-1px": !highlight },
    { "outline-brand-secundary-300 outline-2px": highlight },
    { "shadow-brand": shadow }
  );

  return <div className={cx}>{children}</div>;
}

export default Border;
