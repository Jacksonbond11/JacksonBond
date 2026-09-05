import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, img, link, tags }) => {
  return (
    <article className="blog-card">
      <figure className="blog-card__image">
        <Link to={link}><img src={img} alt={`${title} cover`} /></Link>
      </figure>
      <div className="blog-card__body">
        <p className="project-number">Field notes</p>
        <h2>{title}</h2>
        <Link className="text-link" to={link}>Read the post <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
};

export default BlogCard;
