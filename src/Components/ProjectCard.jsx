import React from "react";

const ProjectCard = ({
  title,
  description,
  img,
  link,
  codeLink,
  skills,
  highlights = [],
}) => {
  const skillsColors = {
    React: "bg-secondary",
    NodeJS: "bg-primary",
    PHP: "bg-neutral",
    Laravel: "bg-accent",
    Postgresql: "bg-base-content",
  };

  return (
    <div className="border-2 border-black w-full max-w-96 bg-base-100 min-h-[70vh] mb-2">
      <figure className="px-10 pt-10">
        <a href={link} target="_blank" rel="noreferrer" aria-label={`Visit ${title}`}>
          {img ? (
            <img src={img} alt={`${title} preview`} className="object-contain w-full h-48 bg-white border-2 border-black" />
          ) : (
            <div className="w-full h-48 border-2 border-black bg-primary flex items-center justify-center p-6">
              <span className="text-4xl font-bold tracking-tight">{title}</span>
            </div>
          )}
        </a>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <ul className="text-left list-disc pl-5 text-sm">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
        <div className="card-actions">
          <a className="border-[1.5px] border-black text-xl p-2 hover:bg-primary mr-2" href={link} target="_blank" rel="noreferrer">Live</a>
          {codeLink && (
            <a className="border-[1.5px] border-black text-xl p-2 hover:bg-primary" href={codeLink} target="_blank" rel="noreferrer">Code</a>
          )}
        </div>
        <div className="flex">
          {skills.map((skill, index) => (
            <p
              key={index}
              className={`border-2 border-black ${skillsColors[skill] || "bg-base-200"} text-xs m-1 p-1`}
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
