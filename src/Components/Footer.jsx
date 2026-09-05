import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__top">
      <div><p className="eyebrow">Have a good problem?</p><h2>Let&apos;s build something that holds up.</h2></div>
      <a className="button button--accent" href="https://www.linkedin.com/in/jacksonbond1/" target="_blank" rel="noreferrer">Find me on LinkedIn <span aria-hidden="true">↗</span></a>
    </div>
    <div className="site-footer__bottom">
      <Link to="/" className="footer-signature">Jackson Bond<span aria-hidden="true">.</span></Link>
      <div className="footer-links">
        <a href="https://github.com/jacksonbond11" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jacksonbond1/" target="_blank" rel="noreferrer">LinkedIn</a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
);

export default Footer;
