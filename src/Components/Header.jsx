import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Writing", to: "/blog" },
  ];
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Jackson Bond home">
          <span className="brand__mark">JB</span>
          <span>Jackson Bond</span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={isMenuOpen} aria-controls="site-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </button>
        <nav id="site-navigation" className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? "nav-link--active" : ""}`}>
              {item.label}
            </NavLink>
          ))}
          <a className="nav-link nav-link--cta" href="https://www.linkedin.com/in/jacksonbond1/" target="_blank" rel="noreferrer">
            Let&apos;s connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
