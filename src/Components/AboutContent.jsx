import React from "react";

const AboutContent = () => {
  return (
    <div className="pl-2 pr-2">
      <section className="flex flex-col items-center justify-center min-h-full border-2 border-t-0 border-black">
        <div className="border-b-2 border-black border-t-0 w-full text-center">
          <h2 className="text-3xl py-12">Software developer. SDET. Builder.</h2>
        </div>
        <div className="flex flex-col justify-center w-9/12 p-4">
          <p>
            I am a software developer from Oklahoma City with experience across
            QA, test automation, frontend development, and full product builds.
            I like working where quality and delivery meet: turning unclear
            requirements into usable software, then making sure it actually
            holds up.
          </p>
          <br />
          <p>
            My background started in manual QA, grew into software development,
            and led me to earn a Bachelor's degree in Computer Science. That
            path gave me a practical view of the full software development
            lifecycle: how features are planned, built, tested, released, and
            improved after real users touch them.
          </p>
          <br />
          <p>
            I am strongest in React, JavaScript, API integration, automated
            testing, and debugging. I also bring experience from finance, HVAC,
            and music, which helps me communicate clearly with non-technical
            users and keep the work grounded in real-world outcomes.
          </p>
          <br />
          <p>
            I am interested in software developer, frontend developer, QA
            automation, and SDET roles where I can build reliable products,
            improve test coverage, and keep learning with a strong engineering
            team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
