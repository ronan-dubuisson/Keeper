import Heading from "@components/Heading";
import Footer from "@components/Footer";
import SidebarModal from "@src/components/modals/SidebarModal";
import { useState } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import NotesContainer from "@src/components/note/NotesContainer";

function Home() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const pageStyle = classNames("flex", "flex-col", "min-h-100vh");

  return (
    <>
      <div className={pageStyle}>
        <Heading
          sideNaveToggleIcon={true}
          openSideNav={() => setIsSideNavOpen(true)}
          sideNavOpen={isSideNavOpen}
        />
        <NotesContainer />
        <Footer />
      </div>

      {createPortal(
        <SidebarModal
          isOpen={isSideNavOpen}
          closeNav={() => setIsSideNavOpen(false)}
        />,
        document.body
      )}
    </>
  );
}

export default Home;
