import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToAbout = () => {
    navigate("/about");
  };

  const navigateToBlog = () => {
    navigate("/blog");
  };

  const navigateToProjects = () => {
    navigate("/projects");
  };
  const navigateToSaccharine = () => {
    navigate("/saccharine");
  };

  return (
    <div className="navbar bg-primary-content flex justify-between">
      <div className="flex-1">
        <button className="btn text-xl" onClick={navigateToHome}>
          Jackson Bond
        </button>
      </div>
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        <li>
          <button onClick={navigateToAbout}>About</button>
        </li>
        <li onClick={navigateToProjects}>
          <button onClick={navigateToProjects}>Projects</button>
        </li>
        <li onClick={navigateToBlog}>
          <button onClick={navigateToBlog}>Blog</button>
        </li>
        <li onClick={navigateToSaccharine}>
          <button onClick={navigateToSaccharine}>Saccharine</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
