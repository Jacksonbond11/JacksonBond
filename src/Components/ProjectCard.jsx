import React from "react";

const ProjectCard = ({ title, description, img, link, skills }) => {
  const navigate = () => {
    window.open(link, "_blank");
  };

  let skillsColors = {
    React: "badge-secondary",
    NodeJS: "badge-primary",
    PHP: "badge-neutral",
    Laravel: "badge-accent",
    Postgresql: "badge-info",
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[50vh] mb-2">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt={title}
          className="rounded-xl object-cover w-full h-48 cursor-pointer"
          onClick={navigate}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary badge-" onClick={navigate}>
            View
          </button>
        </div>
        <div className="">
          {skills.map((skill, index) => (
            <p
              key={index}
              className={`badge ${skillsColors[skill]} text-xs m-1`}
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
