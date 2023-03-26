import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects">Personal Projects</div>
      <div className="project-types">
        <div className="div1">
          <div className="project-name">
            <span className="project-title">BookYourStay</span>
            <span className="domain">(Hospitality Management System)</span>
            <span className="project-text">
              -Complete MERN Stack application with User Authentication.
            </span>
            <span className="project-text">
              -User can book their stay at favourite Hotels.
            </span>
            <span className="aa">-Tech Used:</span>
            <ul className="tech-used">
              <li>ReactJs</li>
              <li>NodeJs</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
            </ul>
            <div className="profile-link">
              <span>GitHub Link: </span>
              <a
                href="https://github.com/samatharun85/BookYourStay_MERN"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icons">
                  <BsGithub />
                </i>
              </a>
            </div>
          </div>

          <div className="project-name">
            <span className="project-title">Black OAK</span>
            <span className="domain">(Restaurant Management System)</span>
            <span className="project-text">
              -An application to manage a Restaurant.
            </span>
            <span className="project-text">
              -User can book their favourite Food in Advanced.
            </span>
            <span className="aa">-Tech Used:</span>
            <ul className="tech-used">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>MySql</li>
            </ul>
            <div className="profile-link">
              <span>GitHub Link: </span>
              <a
                href="https://github.com/samatharun85/Restaurant-Management-System"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icons">
                  <BsGithub />
                </i>
              </a>
            </div>
          </div>
        </div>

        <div className="div2">
          <div className="project-name" id="codepenbg">
            <span className="project-title">CodePen</span>
            <span className="project-text">
              -Its an tool to create interfaces using HTML, CSS, Javascript
            </span>
            <span className="aa">-Tech Used:</span>
            <ul className="tech-used">
              <li>ReactJs</li>
            </ul>
            <div className="profile-link">
              <span>GitHub Link: </span>
              <a
                href="https://github.com/samatharun85/CodePen"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icons">
                  <BsGithub />
                </i>
              </a>
            </div>
            <div className="profile-link">
              <span>Netlify Link: </span>
              <a
                href="https://codepen-samatharun85.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icons">
                  <SiNetlify />
                </i>
              </a>
            </div>
          </div>

          <div className="project-name" id="todobg">
            <span className="project-title">Todo List</span>
            <span className="project-text">
              -Its an application to note our daily works to do.
            </span>
            <span className="aa">-Tech Used:</span>
            <ul className="tech-used">
              <li>ReactJs</li>
              <li>Firebase</li>
            </ul>
            <div className="profile-link">
              <span>GitHub Link: </span>
              <a
                href="https://github.com/samatharun85/todo_app"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icons">
                  <BsGithub />
                </i>
              </a>
            </div>
            <div className="profile-link">
              <span>Netlify Link: </span>
              <a
                href="https://todoapp-samatharun85.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icons">
                  <SiNetlify />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
