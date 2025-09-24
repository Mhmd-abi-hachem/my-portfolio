import React from "react";

function ProjectScreenshots({ project }) {
  return (
    project.screenshots?.length > 0 && (
      <div className="flex flex-col gap-6">
        <h2 className=" border-b-1 border-gray-400 text-[1.7rem] font-bold pb-4">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:gap-18 md:gap-24 py-8 place-items-center">
          {project.screenshots.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} app Screenshot ${idx + 1}`}
              className="rounded-xl shadow-lg w-full md:max-w-full"
            />
          ))}
        </div>
      </div>
    )
  );
}

export default ProjectScreenshots;
