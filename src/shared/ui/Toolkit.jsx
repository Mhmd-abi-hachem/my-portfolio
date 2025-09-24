import React from "react";

import BubbleList from "./BubbleList";

const stack = [
  "HTML / Accessibility",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Tailwind CSS",
  "REST API",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
];

const tools = ["VS Code", "Git", "Figma", "SEO", "Lighthouse", "Postman"];

const deploy = ["Vercel", "Netlify", "CI/CD", "Render"];

function Toolkit() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-32">
      <h2
        className="header-line border-b-1 border-gray-400 text-2xl md:text-3xl font-bold pb-4"
        data-aos="fade-up"
      >
        Toolkit
      </h2>

      <div className="flex flex-col gap-24 sm:gap-28 md:gap-32 mt-12 md:mt-24">
        {/* Stack */}
        <div
          data-aos="fade-right"
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-14 sm:gap-18 md:gap-16"
        >
          <h3 className="text-8xl font-semibold">Stack</h3>
          <BubbleList items={stack} variant="home" />
        </div>

        {/* Tools */}
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between gap-14 sm:gap-18 md:gap-16"
        >
          <h3 className="text-8xl font-semibold px-0 sm:px-4 md:px-8 lg:px-12 text-right">
            Tools
          </h3>
          <BubbleList items={tools} variant="home" />
        </div>

        {/* Deployment */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-start md:items-center text-start md:text-center gap-14 sm:gap-18 md:gap-20"
        >
          <h3 className="text-8xl font-semibold">Deployment</h3>
          <BubbleList items={deploy} variant="home" />
        </div>
      </div>
    </section>
  );
}

export default Toolkit;
