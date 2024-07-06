import React, { useRef, useEffect } from "react";
import BackgroundImage from "./BackgroundImage";
import Stats from "./Stats";
import Steps from "./Steps";
import AboutContent from "./AboutContent";
import { Badge } from "react-daisyui";

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
        <h1 className="bigname">Jackson Bond</h1>
        <p>Software Developer - Software Quality Engineer</p>
      </section>

      <section class="skillsSection">
        <h1>Skills</h1>
        <ul>
          <li>Javascript / React</li>
          <li>PHP / Laravel</li>
          <li>SQL / Postgres</li>
          <li>C# / .NET</li>
          <li>Figma / Photoshop</li>
        </ul>
      </section>

      <section class="projectSection">
        <h1>PROJECTS</h1>
        <div class="projectsCont">
          <div class="project">
            <a href="https://www.vegainrecipes.com">
              <h2 className="font-bold text-3xl">Vegain Recipes</h2>
              <img src="/projects/vegain-card.png" className="" />
            </a>
            <div className="flex mt-2 gap-2">
            <Badge className="badge-primary">React</Badge>
            <Badge className="badge-secondary">NodeJS</Badge>
            <Badge className="badge-warning">SQL</Badge>
            <Badge className="badge-accent">API</Badge>
            </div>
          </div>
          <div class="project">
            <a href="https://www.saccharine.shop">
              <h2 className="font-bold text-3xl">saccharine streetwear</h2>
              <img src="/projects/saccharine.png" className="" />
            </a>
            <div className="flex mt-2 gap-2">
            <Badge className="badge-primary">Laravel</Badge>
            <Badge className="badge-secondary">MVC</Badge>
            <Badge className="badge-warning">Ecommerce</Badge>
            <Badge className="badge-accent">Photoshop</Badge>
            </div>
          </div>
          <div class="project">
            <a href="www.vegainrecipes.com">
              <h2 className="font-bold text-3xl">Botify</h2>
              <img src="/projects/botify.png" className="h-1/2 m-auto"  />
            </a>
            <div className="flex mt-2 gap-2">
            <Badge className="badge-primary">NodeJS</Badge>
            <Badge className="badge-secondary">Selfhost</Badge>
            <Badge className="badge-warning">DiscordJS</Badge>
            <Badge className="badge-accent">API</Badge>
            </div>
          </div>
          <div class="project">
            <a href="www.vegainrecipes.com">
              <h2 className="font-bold text-3xl">NWA Mold Inspector</h2>
              <img src="/projects/nwamold.png" className="" />
            </a>
            <div className="flex mt-2 gap-2">
            <Badge className="badge-primary">Laravel</Badge>
            <Badge className="badge-secondary">SQL</Badge>
            <Badge className="badge-warning">CMS</Badge>
            <Badge className="badge-accent">Marketing</Badge>
            </div>
          </div>
        </div>
      </section>

      <section class="aboutSection">
        <h1>About</h1>
        <AboutContent />
      </section>
      <section class="linksSection">
        <h1>Links</h1>
        <ul>
          <li><a href="https://github.com/Jacksonbond11/">GitHub</a></li>
          <li><a  href="https://www.linkedin.com/in/jacksonbond1/">LinkedIn</a></li>
          <li>SQL</li>
          <li>HTML</li>
        </ul>
      </section>
      {/* <Steps /> */}
    </div>
  );
};

export default MainPage;
