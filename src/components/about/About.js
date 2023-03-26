import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-title">About Me</div>
      <div className="aboutme">
        <span>
          {" "}
          Hello! My name is <span className="name">Tharun Sama</span>. I enjoy creating things that live on
          the internet. My interest in <span className="name"> Web Development</span> started back in 2020 when
          I decided to choose the domain --turns out hacking together a custom
          reblog button taught me alot about HTML, CSS & Javascript! I have
          enough skills to build a web applications from scratch. I can design
          website and bring it to live with my skill set. Looking forward to
          enhance my skills, capabilities and knowledge in an organization which
          recognizes the value of hardwork.
        </span>
        <span className="about-tech">
          Here are few technologies I've familiar with:
          <ul className="techs">
            <div className="tech">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ES6</li>
            </div>
            <div className="tech">
              <li>ReactJs</li>
              <li>NodeJs</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
            </div>
            <div className="tech">
              <li>MySql</li>
              <li>Python</li>
            </div>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default About;
