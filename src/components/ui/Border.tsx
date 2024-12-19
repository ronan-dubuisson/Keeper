import classNames from "classnames";
import { ReactNode, useState } from "react";

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
  const [isMouseOver, setIsMouseOver] = useState(false);

  const cx = classNames(
    "overflow-hidden",
    "outline-solid",
    "outline-color-brand",
    "outline-1px",
    { "border-rd-5px": borderRadius === "SMALL" },
    { "border-rd-10px": borderRadius === "BIG" },
    { "outline-brand-secundary-300! outline-3px!": highlight && isMouseOver },
    { "shadow-brand": shadow },
    { "outline-0!": !visible },
    styling
  );

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className={cx}
    >
      {children}
    </div>
  );
}

export default Border;
