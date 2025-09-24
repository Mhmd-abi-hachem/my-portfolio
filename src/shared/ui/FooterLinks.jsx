import React from "react";
import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="flex flex-col justify-between md:justify-start items-center md:items-end gap-14 md:gap-12 pb-14 text-[#e5e7df] font-light text-3xl sm:text-[2rem]">
      <Link
        to="https://github.com/Mhmd-abi-hachem"
        className=" flex gap-2 uppercase animated-link hover:text-[#f7f7f7]"
        data-aos="fade"
        data-aos-delay={150}
      >
        View my GitHub <span className="rotate-45">&uarr;</span>
      </Link>
      <div
        data-aos="fade"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay={300}
      >
        <Link
          to="#"
          className="flex gap-2 uppercase animated-link hover:text-[#f7f7f7]"
        >
          CV <span className="rotate-45">&uarr;</span>
        </Link>
      </div>

      <div className="self-center md:self-start text-center md:text-end text-[1.5rem] sm:text-[1.7rem] text-[#e5e7df]">
        <p>&copy; Mohamad Abi Hachem 2025.</p>
      </div>
    </div>
  );
}

export default FooterLinks;
