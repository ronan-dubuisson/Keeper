import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  highlight?: boolean;
  shadow?: boolean;
  borderRadius?: "SMALL" | "BIG";
  styling?: string;
  visible?: boolean;
}

function Border({
  children,
  borderRadius = "SMALL",
  highlight = false,
  shadow = false,
  styling,
  visible = true,
}: Props) {
  const cx = classNames(
    "overflow-hidden",
    "outline-solid",
    { "border-rd-5px": borderRadius === "SMALL" },
    { "border-rd-10px": borderRadius === "BIG" },
    { "outline-color-brand outline-1px": !highlight },
    { "outline-brand-secundary-300 outline-2px": highlight },
    { "shadow-brand": shadow },
    { "outline-0!": !visible },
    styling
  );

  return <div className={cx}>{children}</div>;
}

export default Border;
