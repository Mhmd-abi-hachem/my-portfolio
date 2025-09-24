import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import NavList from "./NavList";
import SideDrawer from "./SideDrawer";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // handle scroll into clicked section (bcz the default anchor element sroll behavior is not available on Link element)
  function handleNavClick(id) {
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  return (
    <header className="max-w-screen flex justify-between items-center text-[1.8rem] p-10 px-12 relative navbar-slide-down">
      <Link to="/">
        <h2 className="">Mohamad Abi Hachem</h2>
      </Link>
      <nav className="hidden md:block">
        <NavList handleNavClick={handleNavClick} />
      </nav>

      <button
        className="md:hidden text-[2.8rem]"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        aria-label="Toggle Menu"
      >
        <HiOutlineMenuAlt3 className="text-[#1e1e1e]" />
      </button>

      {/* Mobile drawer menu*/}
      {isMenuOpen && (
        <SideDrawer
          onClick={() => setIsMenuOpen(false)}
          isMenuOpen={isMenuOpen}
        >
          <button
            className="absolute top-10 right-10 text-[2.8rem] mb-8"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <HiX className="text-[#1e1e1e]" />
          </button>
          <nav className="flex items-center justify-center h-full p-8">
            <NavList type="mobile" handleNavClick={handleNavClick} />
          </nav>
        </SideDrawer>
      )}
    </header>
  );
}

export default Navbar;
