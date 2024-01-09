import React from "react";
import BackgroundImage from "./BackgroundImage";

const AboutContent = () => {
  return (
    <div>
      <BackgroundImage />
      <section className="flex flex-col items-center justify-center min-h-full py-4 mb-12 text-white">
        <div className="text-center ">
          <h1 className="text-7xl py-12">Hi I am Jackson.</h1>
        </div>
        <div className="flex flex-col justify-center w-9/12">
          <p>
            Hello! I'm a software developer from Oklahoma City with a unique
            journey into the world of technology. My adventure in tech began
            unexpectedly when I stepped into the role of a manual QA, a position
            I embraced with no prior technical experience. This leap of faith
            wasn't just a career change; it ignited a passion for the software
            development lifecycle that I never knew I had.{" "}
          </p>{" "}
          <br />
          <p>
            Driven by this newfound passion, I pursued and earned a Bachelor's
            degree in Computer Science, a journey that not only honed my
            technical skills but also deepened my appreciation for the
            intricacies of software development. Before diving into the tech
            world, I worked in HVAC and earned a degree in finance. This diverse
            background equips me with a unique perspective on problem-solving
            and project management.
          </p>
          <br />
          <p>
            Music plays a significant role in my life, harmonizing my technical
            work with creativity and rhythm. I believe that my musical skills
            enhance my ability to think outside the box and approach software
            development with a blend of precision and creativity.{" "}
          </p>
          <br />
          <p>
            As I transition from QA to software development, I am eager to bring
            my unique blend of skills, experience, and passion to the table. My
            journey through diverse fields has taught me the value of
            adaptability, continuous learning, and the beauty of creating
            something impactful. I am excited about the future of technology and
            am looking forward to contributing to innovative projects that make
            a difference. Let's connect and create something amazing together!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
