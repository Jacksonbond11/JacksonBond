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
    <div>
      <div className="navbar relative border-b-2 border-black">
        <div className="flex-1 flex justify-between items-center">
          <button className="border-[1.5px] border-black text-xl p-2 hover:bg-primary" onClick={() => navigateTo("/")}>
            Jackson Bond
          </button>
          <button
            className={`border-[1.5px] w-12 h-12 border-black text-xl sm:hidden`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        <div
          className={`absolute z-10 sm:relative sm:block ${
            isMenuOpen ? "block" : "hidden"
          } right-0  sm:w-auto top-full bg-base-100`}
        >
          <ul className="sm:flex sm:flex-row">
            <li>
              <button className="border-[1.5px] border-black text-xl p-2 hover:bg-primary mr-2" onClick={() => navigateTo("/about")}>About</button>
            </li>
            <li>
              <button className="border-[1.5px] border-black text-xl p-2 hover:bg-primary mr-2" onClick={() => navigateTo("/projects")}>Projects</button>
            </li>
            <li>
              <button className="border-[1.5px] border-black text-xl p-2 hover:bg-primary mr-2" onClick={() => navigateTo("/blog")}>Blog</button>
            </li>
            <li>
              <button className="border-[1.5px] border-black text-xl p-2 hover:bg-primary mr-2" onClick={() => window.location.href ="https://www.saccharine.shop"}>
                Saccharine
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Header;
