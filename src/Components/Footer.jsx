import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 absolute bottom-0 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a
            className="link link-hover"
            href="https://www.linkedin.com/in/jacksonbond1/"
          >
            LinkedIn
          </a>
          <a
            className="link link-hover"
            href="https://github.com/jacksonbond11"
          >
            GitHub
          </a>
        </nav>
        <aside>
          <p>Copyright © 2023 - Jackson Bond</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
