import React from "react";

import Hero from "../shared/ui/Hero";
import Projects from "../shared/ui/Projects";
import About from "../shared/ui/About";
import Toolkit from "../shared/ui/Toolkit";

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Toolkit />
      <About />
    </>
  );
}

export default HomePage;
