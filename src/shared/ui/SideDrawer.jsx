import React from "react";
import ReactDOM from "react-dom";

import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

function SideDrawer({ children, onClick, isMenuOpen }) {
  // disable body scroll when drawer is open
  useLockBodyScroll(isMenuOpen);

  const content = (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[999] ${
          isMenuOpen ? "backdrop-open" : "backdrop-close"
        }`}
        onClick={onClick}
      />
      <aside
        className={`fixed top-0 right-0 w-[85vw] h-screen bg-[#e5e7df]/80 backdrop-blur-xl border-l border-white/20 z-[1000] overflow-y-auto ${
          isMenuOpen ? "drawer-open" : "drawer-close"
        }`}
      >
        {children}
      </aside>
    </>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;
