import {
  faArrowRight,
  faArrowUpAZ,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import Border from "../ui/Border";
import { useState } from "react";
import Draggable from "react-draggable";
import ToolbarIcon from "./ToolbarIcon";

interface Props {
  openNoteEditModal: () => void;
}

function Toolbar({ openNoteEditModal }: Props) {
  const [isOrderNotesOpen, setIsOrderNotesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerStyle = classNames("absolute");
  const menuStyle = classNames(
    "color-brand",
    "flex",
    "flex-col",
    "p-2",
    "bg-brand",
    "bg-opacity-50",
    "overflow-hidden",
    "w-max",
    "handle",
    "cursor-move"
  );
  const menuItemStyle = classNames(
    "flex",
    "w-max",
    "transition-all-300",
    "transition-ease-in",
    { "max-w-50 gap-0": !isMenuOpen },
    { "max-w-200px gap-2": isMenuOpen }
  );
  const subItemStyle = classNames("text-center");

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 16, y: 16 }}
      position={undefined}
      scale={1}
      bounds="parent"
    >
      <div className={containerStyle}>
        <Border styling={menuStyle}>
          <div className={menuItemStyle}>
            <ToolbarIcon
              icon={faPlusCircle}
              show={isMenuOpen}
              onClick={openNoteEditModal}
            />

            <ToolbarIcon
              icon={faArrowUpAZ}
              show={isMenuOpen}
              onClick={() => setIsOrderNotesOpen(!isOrderNotesOpen)}
            />

            <ToolbarIcon
              icon={faArrowRight}
              show={true}
              onClick={HandleMenuState}
            />
          </div>

          {isOrderNotesOpen && (
            <div className={subItemStyle}> order notes </div>
          )}
        </Border>
      </div>
    </Draggable>
  );

  function HandleMenuState() {
    if (isMenuOpen) {
      setIsOrderNotesOpen(false);
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }
}

export default Toolbar;
