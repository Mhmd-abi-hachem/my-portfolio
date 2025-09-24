import React from "react";

import ScrollIndicator from "./ScrollIndicator";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-start  px-6 md:px-12  max-w-full md:max-w-[60%]  items-start  pt-32 md:pt-50">
      <p className=" text-2xl md:text-3xl leading-9 md:leading-0 text-gray-600 mb-3 subheader-slide-left">
        Hi, I&apos;m Mohamad — a frontend-focused MERN developer.
      </p>

      <h1 className="text-6xl md:text-7xl  font-bold leading-snug header-left-delay">
        From wireframe to <span className="text-[#8b919b]">wow</span> — crafting
        frontends that delight users and deliver{" "}
        <span className="text-[#8b919b]">results</span>.
      </h1>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
