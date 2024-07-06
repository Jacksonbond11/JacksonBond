import React, { useRef, useEffect } from "react";
import BackgroundImage from "./BackgroundImage";
import Stats from "./Stats";
import Steps from "./Steps"

const MainPage = () => {
  
  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({
      x: null,
      y: null,
    });
  
    React.useEffect(() => {
      const updateMousePosition = (ev) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
  
      window.addEventListener("mousemove", updateMousePosition);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);
  
    // useEffect to log mouse position whenever it changes
    React.useEffect(() => {
      console.log(mousePosition);
    }, [mousePosition]); // Dependency array includes mousePosition
  
    return mousePosition; // Return the mouse position if you need to use it elsewhere
  };
  

  return (
    <div className="outer">
      <section className="mainPageSection">
        <h1 className="bigname">
          Jackson Bond
        </h1>
        <p>Software Developer - Software Quality Engineer</p>
      </section>

      <section class="skillsSection">
        <h1>Skills</h1>
        <ul>
          <li>Javascript</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>Figma</li>
        </ul>
      </section>

      <section class="projectSection">
        <h1>PROJECTS</h1>
        <div class="projectsCont">
          <div class="project"><img src="vegain-card.png" className=""/></div>
          <div class="project"><img src="vegain-card.png" className=""/></div>
          <div class="project"><img src="vegain-card.png" className=""/></div>
          <div class="project"><img src="vegain-card.png" className=""/></div>
   
        </div>
      </section>

      <section class="aboutSection">
        <h1>About</h1>
      </section>
      <section class="linksSection">
        <h1>Links</h1>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>SQL</li>
          <li>HTML</li>
        </ul>
      </section>
      {/* <Steps /> */}
    </div>
  );
};

export default MainPage;
