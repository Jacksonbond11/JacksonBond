import React from "react";

const AboutContent = () => {
  return (
    <div className="page-wrap page-section">
      <section className="about-grid">
        <div className="page-intro about-intro">
          <p className="eyebrow">A little context</p>
          <h1>Software developer. Product thinker. <em>Builder.</em></h1>
          <p className="about-lede">I like working where quality and delivery meet: turning unclear requirements into usable software, then making sure it actually holds up.</p>
        </div>
        <div className="about-copy">
          <p>
            I am a software developer from Oklahoma City with experience across QA, test automation, frontend development, and full product builds.
          </p>
          <p>
            My background started in manual QA, grew into software development, and led me to earn a Bachelor&apos;s degree in Computer Science. That path gave me a practical view of the full software development lifecycle: how features are planned, built, tested, released, and improved after real users touch them.
          </p>
          <p>
            I am strongest in React, JavaScript, API integration, automated testing, and debugging. I also bring experience from finance, HVAC, and music, which helps me communicate clearly with non-technical users and keep the work grounded in real-world outcomes.
          </p>
          <p>
            I am interested in software developer and frontend roles where I can build reliable products, improve the details, and keep learning with a strong engineering team.
          </p>
          <div className="skills-panel"><p className="eyebrow">My toolkit</p><div className="tag-row tag-row--large"><span>React</span><span>JavaScript</span><span>Test automation</span><span>API integration</span><span>Debugging</span><span>SEO</span></div></div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
