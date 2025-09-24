import React from "react";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "The Wild Oasis",
    tagline: "Bringing simplicity to management.",
    slug: "the-wild-oasis",
    image: "/mockups/the-wild-oasis-mockup.jpg",
  },
  {
    title: "Natours",
    tagline: "Book your next adventure online in minutes.",
    slug: "natours",
    image: "/mockups/Natours-mockup.jpg",
  },
  {
    title: "LinguaSpeak",
    tagline: "Breaking language barriers, Connecting worlds.",
    slug: "linguaspeak",
    image: "/mockups/lingua-mockup.jpg",
  },
];

function Projects() {
  return (
    <section className="px-6 md:px-12" id="projects">
      <h2
        className="header-line border-b-1 border-gray-400 text-2xl md:text-3xl font-bold pb-4"
        data-aos="fade-up"
      >
        Selected Projects
      </h2>

      <div className="flex flex-col gap-12 md:gap-16 mt-16 sm:mt-20">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
