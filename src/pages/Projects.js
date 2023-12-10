import React from "react";
import Header from "../Components/Header";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl my-4">Projects</h1>
          <div className="md:flex md:p-8">
            <ProjectCard
              title={"Vegain Recipes"}
              description={
                "AI powered vegan recipes provided without the fluff. You shouldn't need to read a life story to view a recipe."
              }
              img={"/vegainrecipes.png"}
              link={"https://www.vegainrecipes.com"}
            />
            <ProjectCard
              title={"Botify"}
              description={
                "Discord bot to add songs to a Spotify playlist automatically."
              }
              img={"/botify.png"}
              link={"https://github.com/Jacksonbond11/Botify"}
            />

            <ProjectCard
              title={"NWA Mold"}
              description={"A business site for NWA Mold."}
              img={"/nwamold.png"}
              link={"https://nwamold.dylanbaine.com/"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
