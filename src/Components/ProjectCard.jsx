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
  const navigate = () => {
    window.open(link, "_blank");
  };

  const navigateCode = () => {
    window.open(codeLink, "_blank");
  };

  let skillsColors = {
    React: "secondary",
    NodeJS: "primary",
    PHP: "neutral",
    Laravel: "accent",
    Postgresql: "base-content",
  };

  return (
    <div className="border-2 border-black w-96 bg-base-100 min-h-[70vh] mb-2">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt={title}
          className="object-contain w-full h-48 cursor-pointer bg-white border-2 border-black"
          onClick={navigate}
        />
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
          <button className="border-[1.5px] border-black text-xl p-2 hover:bg-primary mr-2" onClick={navigate}>
            Live
          </button>
          {codeLink && (
            <button className="border-[1.5px] border-black text-xl p-2 hover:bg-primary" onClick={navigateCode}>
              Code
            </button>
          )}
        </div>
        <div className="flex">
          {skills.map((skill, index) => (
            <p
              key={index}
              className={`border-2 border-black bg-${skillsColors[skill]} text-xs m-1 p-1`}
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
