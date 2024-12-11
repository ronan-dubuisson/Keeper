import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  position: "relative" | "absolute" | "fixed";
  location?: "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
}

function Positioning({ position, children, location }: Props) {
  const style = classNames(
    "w-100%",
    position,
    { "top-0": location === "TOP" },
    { "right-0": location === "RIGHT" },
    { "bottom-0": location === "BOTTOM" },
    { "left-0": location === "LEFT" }
  );
  return <div className={style}>{children}</div>;
}

export default Positioning;
