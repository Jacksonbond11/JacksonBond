import React from "react";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  { title: "TaffyStack", description: "A bright, conversion-minded website for booking software built for independent businesses.", img: "/projects/taffystack.jpg", link: "https://taffystack.com/", skills: ["Product design", "Frontend"], highlights: ["Translated a product story into a clear, memorable public-facing experience.", "Balanced playful visual direction with a focused conversion path."] },
  { title: "Trisha Gonzalez Barber", description: "A polished local-service marketing site for an Oklahoma City barber, built around booking conversion and local search.", img: "/projects/trisha-cover.jpg", link: "https://trishathebarber.com/", codeLink: "https://github.com/JacksonBond11/trisha", skills: ["React", "SEO"], highlights: ["Built a conversion-focused marketing site for a local service business.", "Added structured local SEO content, metadata, and booking paths."] },
  { title: "Old Man Pham's Lawn Care", description: "A service-area focused website for an OKC metro lawn care business, with location pages and search-friendly content.", img: "/projects/oldmanphams.jpg", link: "https://www.oldmanphamslawncare.com/", codeLink: "https://github.com/JacksonBond11/OldManPhams", skills: ["React", "Content strategy"], highlights: ["Created service-area pages for multiple OKC metro locations.", "Balanced business copy, gallery content, and contact flows for lead generation."] },
];

const Projects = () => (
  <div className="page-wrap page-section">
    <div className="page-intro"><p className="eyebrow">Selected work</p><h1>Small teams. Real users. <em>Shipped.</em></h1><p>Projects where design, implementation, and quality all had to pull in the same direction.</p></div>
    <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div>
  </div>
);

export default Projects;
