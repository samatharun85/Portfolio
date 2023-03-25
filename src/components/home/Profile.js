import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://instagram.com/tharun_sama?igshid=ZDdkNTZiNTM=" target="_blank" rel="noreferrer">
                <i className="icons">
                  <BsInstagram />
                </i>
              </a>
              <a href="https://twitter.com/TharunSama85" target="_blank" rel="noreferrer">
                <i className="icons">
                  <AiOutlineTwitter />
                </i>
              </a>
              <a href="http://github.com/samatharun85" target="_blank" rel="noreferrer">
                <i className="icons">
                  <BsGithub />
                </i>
              </a>
              <a href="https://www.linkedin.com/in/sama-tharun-989028220" target="_blank" rel="noreferrer">
                <i className="icons">
                  <BsLinkedin />
                </i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <spam className="primary-text">
              Hello, I'm
              <span className="highlighted-text"> Tharun Sama</span>
            </spam>
          </div>
          <div className="profile-details-role">
            <spam className="primary-text">I built things for the web.</spam>
            <spam className="profile-role-tagline">
              I'm a software engineer specializing in building exponential
              digital experiences.
            </spam>
          </div>
          <div className="profile-options">
            <a href="mailto:samatharun85@gmail.com">
              <button className="hireme"> Hire Me</button></a>
            <a href="Tharun_Sama.pdf" target="_blank" rel="noreferrer">
              <button className="resume">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default Profile;
