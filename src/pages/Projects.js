import React from "react";
import Header from "../Components/Header";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";
import BackgroundImage from "../Components/BackgroundImage";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="m-auto max-w-7xl min-h-[90vh]">
        <div className="text-center">
          <h1 className="text-4xl my-4">Projects</h1>
          <div className="md:flex md:p-8 items-center justify-between p-2 m-auto">
            <ProjectCard
              title={"Vegain Recipes"}
              description={
                "AI powered vegan recipes provided without the fluff. You shouldn't need to read a life story to view a recipe."
              }
              img={"/projects/vegainrecipes.png"}
              link={"https://www.vegainrecipes.com"}
              skills={["NodeJS", "React", "Postgresql"]}
            />
            <ProjectCard
              title={"Botify"}
              description={
                "Discord bot to add songs to a Spotify playlist automatically."
              }
              img={"/projects/botify.png"}
              link={"https://github.com/Jacksonbond11/Botify"}
              skills={["NodeJS"]}
            />
            <ProjectCard
              title={"NWA Mold"}
              description={"A business site for NWA Mold."}
              img={"/projects/nwamold.png"}
              link={"https://www.nwamoldinspector.com/"}
              skills={["PHP", "Laravel"]}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
