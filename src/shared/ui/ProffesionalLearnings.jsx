import React from "react";

function ProffesionalLearnings({ project }) {
  return (
    project.learnings?.length > 0 && (
      <div className="flex flex-col gap-6 mt-12">
        <h2 className=" border-b-1 border-gray-400  text-[1.7rem] font-bold pb-4">
          Professional Learnings
        </h2>
        <div className="pl-12">
          <ul className="list-disc list-outside space-y-4 py-8 text-3xl md:text-[2rem] leading-14">
            {project.learnings.map((learning, idx) => (
              <li key={idx}>{learning}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}

export default ProffesionalLearnings;
