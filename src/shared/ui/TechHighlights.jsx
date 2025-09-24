import React from "react";
import { HiOutlineCheck } from "react-icons/hi";

function TechHighlights({ project }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className=" border-b-1 border-gray-400  text-[1.7rem] font-bold pb-4">
        Technical Highlights
      </h2>
      <ul className="flex flex-col md:grid md:grid-cols-3  gap-6 py-8">
        {project.technicalHighlights.map((tech, i) => (
          <li
            key={i}
            className="flex gap-3 items-start text-3xl leading-13 font-medium hover:scale-105 transition-transform"
          >
            <HiOutlineCheck className="text-[#075f04] w-8 h-8 md:w-9 md:h-9 mt-3 md:mt-2 flex-shrink-0 inline-block" />{" "}
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechHighlights;
