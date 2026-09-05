import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <div className="m-auto max-w-7xl min-h-[90vh]">
        <div className="text-center">
          <h1 className="text-4xl my-4">Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:p-8 items-stretch gap-4 px-4 py-2 m-auto">
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
              title={"TaffyStack"}
              description={
                "A playful, polished web experience built to make the TaffyStack brand easy to explore."
              }
              link={"https://taffystack.com/"}
              skills={["Web design"]}
              highlights={["Designed as a responsive public-facing experience."]}
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
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
