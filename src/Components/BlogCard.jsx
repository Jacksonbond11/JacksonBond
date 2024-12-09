import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, img, link }) => {
  const navigate = useNavigate();

  const navigateToLink = () => {
    navigate(link);
  };

  return (
    <div className="border-2 border-black w-96 h-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-48 cursor-pointer"
          onClick={navigateToLink}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions">
          <button className="border-[1.5px] border-black text-xl p-2 hover:bg-primary" onClick={navigateToLink}>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
