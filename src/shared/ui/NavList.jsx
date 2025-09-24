import React from "react";
import { PiHandWaving } from "react-icons/pi";
import { Link } from "react-router-dom";

function NavList({ handleNavClick, type = "desktop" }) {
  const ulClassName =
    type === "mobile"
      ? "flex flex-col gap-20 text-[#1e1e1e] text-4xl mb-12"
      : "flex justify-center gap-14 items-center";

  return (
    <ul className={ulClassName}>
      <li>
        <Link
          to="/#projects"
          onClick={() => handleNavClick("projects")}
          className="animated-link animated-link--nav"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/#about"
          onClick={() => handleNavClick("about")}
          className="animated-link animated-link--nav"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="mailto:mohamadhachem908@gmail.com"
          className="animated-link animated-link--nav flex items-center gap-3 sm:gap-[0.6rem]"
        >
          Say Hello <PiHandWaving className="w-9.5 h-9.5" />
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
