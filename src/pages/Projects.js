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
              codeLink={"https://github.com/Jacksonbond11/trisha"}
              skills={["React"]}
              highlights={[
                "Built a conversion-focused marketing site for a local service business.",
                "Added structured local SEO content, metadata, and booking paths.",
              ]}
            />
            <ProjectCard
              title={"Old Man Pham's Lawn Care"}
              description={
                "A service-area focused website for an OKC metro lawn care business, with location pages and search-friendly content."
              }
              img={"/projects/oldmanphams.jpg"}
              link={"https://www.oldmanphamslawncare.com/"}
              codeLink={"https://github.com/Jacksonbond11/OldManPhams"}
              skills={["React"]}
              highlights={[
                "Created service-area pages for multiple OKC metro locations.",
                "Balanced business copy, gallery content, and contact flows for lead generation.",
              ]}
            />
            <ProjectCard
              title={"Space Economy"}
              description={
                "A market research app for public space companies, combining company profiles, quotes, and industry news."
              }
              img={"/projects/spaceeconomy.png"}
              link={"https://spaceeconomy.app/"}
              codeLink={"https://github.com/Jacksonbond11/SpaceEconomy"}
              skills={["React", "NodeJS", "Postgresql"]}
              highlights={[
                "Built a market research app for public space companies and sectors.",
                "Combined company profiles, quote data, and news into one searchable interface.",
              ]}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
