import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  highlight?: boolean;
  shadow?: boolean;
  borderRadius?: "SMALL" | "BIG";
}

function Border({ children, borderRadius = "BIG", highlight, shadow }: Props) {
  const cx = classNames(
    "overflow-hidden",
    "outline-solid",
    { "border-rd-5px": borderRadius === "SMALL" },
    { "border-rd-10px": borderRadius === "BIG" },
    { "outline-color-brand outline-1px": !highlight },
    { "outline-brand-secundary-300 outline-2px": highlight },
    { "shadow-brand": shadow }
  );

  return <div className={cx}>{children}</div>;
}

export default Border;
