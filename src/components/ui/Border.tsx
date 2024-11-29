import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  highlight?: boolean;
  shadow?: boolean;
  borderRadius?: boolean;
}

function Border({ children, borderRadius = true, highlight, shadow }: Props) {
  const cx = classNames(
    "h-inherit",
    "relative",
    "overflow-hidden",
    "outline-solid",
    { "border-rd-10px": borderRadius },
    { "outline-color-brand outline-1px": !highlight },
    { "outline-brand-secundary-300 outline-2px": highlight },
    { "shadow-brand": shadow }
  );

  return <div className={cx}>{children}</div>;
}

export default Border;
