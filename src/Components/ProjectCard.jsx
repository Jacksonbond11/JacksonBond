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
  return (
    <article className="project-card">
      <figure className="project-card__image">
        <a href={link} target="_blank" rel="noreferrer" aria-label={`Visit ${title}`}>
          <img src={img} alt={`${title} preview`} />
        </a>
      </figure>
      <div className="project-card__body">
        <div className="project-card__heading"><p className="project-number">Project</p><h2>{title}</h2></div>
        <p className="project-card__description">{description}</p>
        <ul className="project-card__highlights">
          {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <div className="project-card__actions">
          <a className="button button--small button--primary" href={link} target="_blank" rel="noreferrer">Live <span aria-hidden="true">↗</span></a>
          {codeLink && <a className="button button--small button--quiet" href={codeLink} target="_blank" rel="noreferrer">Code <span aria-hidden="true">↗</span></a>}
        </div>
        <div className="tag-row">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </div>
    </article>
  );
};

export default ProjectCard;
