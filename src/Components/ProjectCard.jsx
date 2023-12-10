import React from "react";

const ProjectCard = ({ title, description, img, link }) => {
  const navigate = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
          <button className="btn btn-primary" onClick={navigate}>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
