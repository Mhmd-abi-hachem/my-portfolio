import React from "react";

import Button from "./Button";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <footer className="min-h-screen relative px-6 md:px-12 bg-[#1e1e1e] text-[#f7f7f7]  flex flex-col gap-80 sm:gap-30 md:gap-0 md:justify-between">
      {/* cta */}
      <div
        data-aos="fade-up"
        className="flex flex-col gap-16 sm:gap-12 md:gap-8 items-center pt-28 sm:pt-20 md:pt-12 w-full"
      >
        <h2 className="text-[6rem] sm:text-[10rem] md:text-[10vw] lg:text-[11vw] text-center md:whitespace-nowrap">
          Let&apos;s Work Together
        </h2>
        <Button to="mailto:mohamadhachem908@gmail.com" variation="secondary">
          Get in touch
        </Button>
      </div>

      {/* links list */}
      <FooterLinks />
    </footer>
  );
}

export default Footer;
