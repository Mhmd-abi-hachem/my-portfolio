import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomCursor from "./CustomCursor";
import Button from "./Button";

function DetailsHero({ project }) {
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center mt-12 sm:mt-6 md:mt-0  md:min-h-[65vh]">
      <CustomCursor isHovering={isHoveringImage} />

      <Link
        to={project.link}
        className="cursor-none w-full md:w-[60%]"
        onMouseEnter={() => setIsHoveringImage(true)}
        onMouseLeave={() => setIsHoveringImage(false)}
      >
        <img
          src={project.image || project.screenshots[0]}
          alt={`${project.title} app live screenshot`}
          className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
        />
      </Link>

      <div className="flex flex-col gap-6 md:gap-8 md:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          {project.title}
        </h1>
        <p className="text-3xl md:text-4xl text-[#8b919b] leading-14">
          {project.tagline}
        </p>
        <p className="text-xl md:text-2xl text-[#8b919b]">
          <span className="font-bold">{project.type}</span>
        </p>

        {/* cta */}
        <div className="flex flex-wrap gap-12 mt-4">
          <Button to={project.link} variant="primary" size="large">
            Visit Website
          </Button>
          <Button to={project.repoLink} variation="tertiary" size="small">
            View My Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailsHero;
