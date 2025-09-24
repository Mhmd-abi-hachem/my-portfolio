import React from "react";
import { useParams } from "react-router-dom";

import BubbleList from "../shared/ui/BubbleList";
import DetailsHero from "../shared/ui/DetailsHero";
import TechHighlights from "../shared/ui/TechHighlights";
import ProffesionalLearnings from "../shared/ui/ProffesionalLearnings";
import ProjectScreenshots from "../shared/ui/ProjectScreenshots";

const projects = [
  {
    title: "The Wild Oasis",
    tagline: "Simplifying hotel operations with a modern MERN dashboard.",
    slug: "the-wild-oasis",
    type: "MERN Fullstack",
    description:
      "The Wild Oasis solves operational challenges for boutique hotels by replacing spreadsheets and legacy systems with a real-time, intuitive dashboard. It provides instant insights into arrivals, departures, occupancy, and revenue, while simplifying daily operations through a secure, responsive, and user-friendly interface.",
    features: [
      "Dashboard Overview with real-time metrics",
      "Secure Authentication & Protected Routes",
      "Cabin Management (Full CRUD)",
      "Booking Management System",
      "Dark Mode for accessibility",
      "Hotel Settings Panel for dynamic configurations",
    ],
    technicalHighlights: [
      "Efficient Data Management with React Query",
      "Robust State Management with Context API",
      "Type Safety with TypeScript",
      "Modern Styling with Tailwind CSS & CSS Modules",
      "Optimized Forms with React Hook Form",
      "Accessible Modals with React Portals",
      "Elegant Notifications with React Hot Toast",
      "Data Visualization with Recharts",
      "Secure Authentication Flow",
      "Robust Error Handling with Error Boundaries",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "React Query",
      "React Hook Form",
      "React Context API",
      "CSS Modules",
      "Recharts",
      "Node.js",
      "MongoDB",
    ],
    learnings: [
      <>
        Optimized complex state and data flow using <strong>React Query</strong>{" "}
        and <strong>Context API</strong>, improving dashboard responsiveness and
        real-time updates for hotel management.
      </>,
      <>
        Designed scalable <strong>MERN architecture</strong> with modular
        feature-driven structure, making the codebase maintainable and
        team-friendly.
      </>,
      <>
        Applied <strong>code splitting and lazy loading</strong> at page level
        for performance optimization in a complex MERN stack project
      </>,
      <>
        Implemented <strong>secure authentication flows</strong> with cookies
        and protected routes, ensuring sensitive business data remained safe.
      </>,
      <>
        Applied advanced <strong>UX considerations</strong>, including dark
        mode, responsive design, and accessible components, to improve usability
        for hotel staff
      </>,
    ],
    screenshots: [
      "/screenshots/wild-oasis-screenshot-1.png",
      "/screenshots/wild-oasis-screenshot-2.png",
    ],
    repoLink: "https://github.com/Mhmd-abi-hachem/admin-management-system-mern",
    link: "https://app-the-wild-oasis.vercel.app",
  },
  {
    title: "Natours",
    tagline:
      "A real-world tour booking app with secure payments and a seamless booking experience.",
    slug: "natours",
    type: "MERN Fullstack",
    description:
      "Natours is a real-world tour booking application designed to simplify how users explore and book tours worldwide. Built with the MERN stack, it demonstrates advanced frontend engineering, secure authentication, and integrated payment systems. The project highlights modern web development best practices and provides a production-ready user experience.",
    features: [
      "Seamless User Experience with responsive, intuitive design",
      "Full CRUD Functionality for tours and user accounts",
      "Secure Authentication & Protected Routes",
      "Integrated Payments with Stripe",
    ],
    technicalHighlights: [
      "Advanced Data Fetching with TanStack Query (caching, background sync, refetching)",
      "Code Splitting & Lazy Loading with React Suspense",
      "Enhanced Accessibility with React Portals",
      "Robust Error Handling with Error Boundaries",
      "Professional, scalable folder structure",
      "Responsive Design across devices",
    ],
    stack: [
      "React.js",
      "React Router",
      "TanStack React Query",
      "Stripe.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    learnings: [
      <>
        Integrated <strong>multi-step booking flows and payment systems</strong>{" "}
        using Stripe, demonstrating secure and professional e-commerce
        implementation.
      </>,
      <>
        Applied <strong>code splitting and lazy loading</strong> at page level
        for performance optimization in a complex MERN stack project.
      </>,
      <>
        Built <strong>robust error handling with React Error Boundaries</strong>{" "}
        and accessible <strong>React Portals</strong> for modals, enhancing user
        experience and reliability.
      </>,
      <>
        Improved project maintainability through{" "}
        <strong>well-structured folder architecture</strong>, scalable state
        management, and reusable components.
      </>,
    ],
    screenshots: [
      "/screenshots/Natours-screenshot-1.jpg",
      "/screenshots/Natours-screenshot-2.jpg",
    ],
    repoLink: "https://github.com/Mhmd-abi-hachem/natours-mern",
    link: "https://app-natours.vercel.app",
  },
  {
    title: "LinguaSpeak",
    tagline:
      "Breaking language barriers with voice translation and real-time playback.",
    slug: "linguaspeak",
    type: "React.js Frontend",
    description:
      "LinguaSpeak is a single-page web application that enables users to speak into the microphone, instantly translate their spoken text into another language, and play back the translation. It also features a 'Word of the Day' to support vocabulary growth. The project was built to showcase advanced frontend skills with a focus on raw API consumption, speech recognition, and accessibility using modern React best practices.",
    features: [
      "Text Translation with auto-detection",
      "Speech Recognition for real-time voice input",
      "Audio Playback of both input and translated text",
      "Word of the Day feature for vocabulary building",
      "Copy to Clipboard functionality",
      "Responsive Design across devices",
    ],
    technicalHighlights: [
      "Multi-API Integration: Deep Translate API + Word of the Day API",
      "Accessible Modals with React Portals",
      "Custom Hooks for API fetching & state management",
      "Raw API Consumption with useEffect (no external query library)",
      "Environment Variables for secure API key management",
    ],
    stack: [
      "React.js",
      "Deep Translate API",
      "Word of the Day API",
      "React Speech Recognition",
      "Web Speech API",
      "Tailwind CSS",
    ],

    learning: [
      <>
        Mastered <strong>API integratio</strong>n by consuming multiple external
        APIs (translation & word-of-the-day) while managing asynchronous state
        effectively.
      </>,
      <>
        Implemented <strong>speech recognition</strong> and synthesis for a
        fully interactive web application, focusing on accessibility and
        real-time feedback.
      </>,
      <>
        Developed <strong>custom hooks and reusable components</strong> to
        simplify logic and improve code maintainability.
      </>,
      <>
        Strengthened security practices by handling{" "}
        <strong>API keys via environment variables</strong>, protecting
        sensitive data in a production-ready application.
      </>,
    ],
    screenshots: [
      "/screenshots/lingua-screenshot-1.png",
      "/screenshots/lingua-screenshot-2.png",
    ],
    repoLink:
      "https://github.com/Mhmd-abi-hachem/linguaspeak-translator-reactjs",
    link: "https://linguaspeak.netlify.app",
  },
];

function ProjectDetails() {
  const { projectSlug } = useParams();

  const project = projects.find((p) => p.slug === projectSlug);

  if (!project)
    return (
      <div className="min-h-[90vh] flex items-center justify-center text-6xl sm:text-7xl md:text-8xl tracking-wide">
        <p className="mb-24 sm:mb-12 md:mb-4 text-center leading-20">
          Oops! We couldn't find that project.
        </p>
      </div>
    );

  return (
    <section className="min-h-screen px-6 md:px-12 py-12 md:py-24 flex flex-col gap-16">
      <DetailsHero project={project} />

      {/* Description */}
      <div className="py-6 md:py-12 mt-16 sm:mt-12 prose prose-invert max-w-none text-3xl md:text-4xl leading-relaxed">
        {project.description.split("\n").map((para, idx) => (
          <p key={idx}>- {para}</p>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-col gap-6">
        <h2 className=" border-b-1 border-gray-400  text-[1.7rem] font-bold pb-4">
          Key Features
        </h2>
        <ul className="flex flex-col md:flex-row flex-wrap gap-6 py-8">
          <BubbleList items={project.features} variant="detailsPage" />
        </ul>
      </div>

      {/* Technical Highlights */}
      <TechHighlights project={project} />

      {/* Pro learnings */}
      <ProffesionalLearnings project={project} />

      {/* Screenshots */}
      <ProjectScreenshots project={project} />
    </section>
  );
}

export default ProjectDetails;
