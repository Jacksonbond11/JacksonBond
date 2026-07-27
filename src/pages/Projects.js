import React from "react";
import Header from "../Components/Header";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="m-auto max-w-7xl min-h-[90vh]">
        <div className="text-center">
          <h1 className="text-4xl my-4">Projects</h1>
          <div className="md:flex md:p-8 items-center justify-between p-2 m-auto">
            <ProjectCard
              title={"Trisha Gonzalez Barber"}
              description={
                "A polished local-service marketing site for an Oklahoma City barber, built around booking conversion and strong local SEO."
              }
              img={"/projects/trisha-cover.jpg"}
              link={"https://trishathebarber.com/"}
              skills={["React"]}
            />
            <ProjectCard
              title={"Old Man Pham's Lawn Care"}
              description={
                "A service-area focused website for an OKC metro lawn care business, with location pages and search-friendly content."
              }
              img={"/projects/oldmanphams.jpg"}
              link={"https://www.oldmanphamslawncare.com/"}
              skills={["React"]}
            />
            <ProjectCard
              title={"Space Economy"}
              description={
                "A market research app for public space companies, combining company profiles, quotes, and industry news."
              }
              img={"/projects/spaceeconomy.png"}
              link={"https://spaceeconomy.app/"}
              skills={["React", "NodeJS", "Postgresql"]}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
