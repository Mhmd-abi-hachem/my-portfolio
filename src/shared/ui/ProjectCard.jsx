import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project, index }) {
  return (
    <div
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 200}
      className="flex flex-col items-center text-center gap-6"
    >
      <Link
        key={index}
        to={`/projects/${project.slug}`}
        className="relative w-full md:max-w-[70%] h-auto md:h-220  rounded-xl overflow-hidden group cursor-pointer"
      >
        <img
          src={project.image}
          alt={`${project.title} project image`}
          className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 flex flex-col justify-end opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
          <div className="absolute inset-0 bg-[#1e1e1e]/20 backdrop-blur-lg"></div>
          <h3 className="text-[#e5e7df] text-4xl font-bold absolute top-15 left-6">
            {project.title}
          </h3>
          <div className="relative z-10 p-6 text-[#e5e7df] flex flex-col gap-8">
            <p className="text-7xl font-bold leading-20 tracking-wide mb-8 text-start">
              {project.tagline}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
