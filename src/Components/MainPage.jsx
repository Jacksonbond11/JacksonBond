import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => (
  <div className="home-page">
    <section className="hero page-wrap">
      <div className="hero__copy">
        <p className="eyebrow"><span className="eyebrow__dot" /> Software developer · SDET · Oklahoma City</p>
        <h1>I make software feel <em>inevitable.</em></h1>
        <p className="hero__lede">I turn fuzzy ideas into reliable, useful products — then test the edges until they are ready for real people.</p>
        <div className="button-row">
          <Link className="button button--primary" to="/projects">See the work <span aria-hidden="true">↘</span></Link>
          <Link className="button button--quiet" to="/about">More about me <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="hero__art" aria-label="A colorful abstract composition">
        <div className="hero__sun" /><div className="hero__stair hero__stair--one" /><div className="hero__stair hero__stair--two" /><div className="hero__stair hero__stair--three" />
        <span className="hero__label">SHIP<br />BETTER</span><span className="hero__scribble" aria-hidden="true">✳</span>
      </div>
    </section>
    <section className="proof-strip page-wrap" aria-label="Areas of focus">
      <div><strong>01</strong><span>Build</span><small>React · JavaScript · APIs</small></div>
      <div><strong>02</strong><span>Protect</span><small>Automation · QA · Debugging</small></div>
      <div><strong>03</strong><span>Ship</span><small>Clear UX · Performance · SEO</small></div>
    </section>
    <section className="feature-section page-wrap">
      <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Useful things, shipped.</h2></div><Link className="text-link" to="/projects">View all projects <span aria-hidden="true">↗</span></Link></div>
      <article className="feature-project">
        <a className="feature-project__image" href="https://taffystack.com/" target="_blank" rel="noreferrer"><img src="/projects/taffystack.jpg" alt="TaffyStack website preview" /><span className="image-badge">Live site ↗</span></a>
        <div className="feature-project__body"><p className="project-number">01 / Featured</p><h3>TaffyStack</h3><p>A bright, conversion-minded website for booking software built for independent businesses.</p><div className="tag-row"><span>Product design</span><span>Frontend</span><span>Responsive web</span></div><a className="text-link" href="https://taffystack.com/" target="_blank" rel="noreferrer">Visit TaffyStack <span aria-hidden="true">↗</span></a></div>
      </article>
    </section>
    <section className="home-cta page-wrap"><p className="eyebrow">The short version</p><h2>Good software is a team sport. I bring the curiosity, the follow-through, and the test cases.</h2><Link className="button button--dark" to="/about">Get the longer version <span aria-hidden="true">↗</span></Link></section>
  </div>
);

export default MainPage;
