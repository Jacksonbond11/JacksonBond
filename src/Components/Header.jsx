import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="navbar relative border-b-2 border-black">
        <div className="flex-1 flex justify-between items-center">
          <Link
            to="/"
            className="border-[1.5px] border-black text-xl p-2 hover:bg-primary"
          >
            Jackson Bond
          </Link>
          <button
            className="border-[1.5px] w-12 h-12 border-black text-xs sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
        </div>
        <div
          className={`absolute z-10 sm:relative sm:block ${
            isMenuOpen ? "block" : "hidden"
          } right-0 sm:w-auto top-full bg-base-100`}
        >
          <ul className="sm:flex sm:flex-row">
            <li>
              <Link
                to="/about"
                className="border-[1.5px] border-black text-xl p-2 hover:bg-primary mr-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="border-[1.5px] border-black text-xl p-2 hover:bg-primary mr-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="border-[1.5px] border-black text-xl p-2 hover:bg-primary mr-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
