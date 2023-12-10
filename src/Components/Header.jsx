import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu on selection
  };
  return (
    <div className="navbar bg-primary-content relative">
      <div className="flex-1 flex justify-between items-center">
        <button className="btn text-xl" onClick={() => navigateTo("/")}>
          Jackson Bond
        </button>
        <button
          className={`btn text-xl sm:hidden`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      <div
        className={`absolute z-10 sm:relative sm:block ${
          isMenuOpen ? "block" : "hidden"
        } right-0 w-40 sm:w-auto top-full`}
      >
        <ul className="menu bg-base-200 rounded-box sm:flex sm:flex-row">
          <li>
            <button onClick={() => navigateTo("/about")}>About</button>
          </li>
          <li>
            <button onClick={() => navigateTo("/projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => navigateTo("/blog")}>Blog</button>
          </li>
          <li>
            <button onClick={() => navigateTo("/saccharine")}>
              Saccharine
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
