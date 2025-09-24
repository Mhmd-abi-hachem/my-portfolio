import React from "react";

function About() {
  return (
    <section className="px-6 md:px-12 pb-24 md:pb-50" id="about">
      <h2
        className="header-line border-b-1 border-gray-400 text-2xl md:text-3xl font-bold pb-4"
        data-aos="fade-up"
      >
        About Me
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 md:mt-20 gap-12 md:gap-0">
        <p
          data-aos="fade-right"
          className="text-3xl md:text-4xl max-w-full md:max-w-[60%] px-0 md:px-10 leading-[1.7]"
        >
          Hi, I'm Mohamad—a{" "}
          <span className="font-bold">frontend-focused MERN developer</span>{" "}
          passionate about crafting intuitive, user-centered experiences. My
          philosophy of <span className="font-bold"> 'less is more'</span>{" "}
          guides my work. I create clean, elegant and efficient frontends that
          remove clutter and let users focus on what truly matters. <br />
          <br />
          From building pixel-perfect layouts to optimizing for accessibility
          and performance. With full MERN stack experience, I ensure seamless
          experiences{" "}
          <span className="font-bold">
            by bridging the frontend with the server-side
          </span>
          . I&apos;m eager to take on new challenges and contribute to a team
          that values simplicity and user-focused design.
        </p>

        <img
          src="code-snippet.png"
          alt="Code snippet showing 'Building experiences with clarity & care'"
          className="w-full md:w-[40%]"
          data-aos="fade-left"
        />
      </div>
    </section>
  );
}

export default About;
