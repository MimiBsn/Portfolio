import React, { useState } from "react";
import { Link } from "react-router-dom";
import linkedIn from "../assets/LI-In-Bug.png";
import GitHub from "../assets/github-mark.png";
import mail from "../assets/outlook.png";
import cv from "../assets/cv.pdf";
// import EmailIcon from "./EmailIcon";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="mailto">
          <a href="mailto:[alexandra_b@live.fr]">
            <img src={mail} alt="" />
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/alexandra-busson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="" />
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/MimiBsn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="" />
          </a>
        </div>
      </div>
      <a href={cv} download={"alexandra-busson-CV"}>
        <button className="cv">Download my CV</button>
      </a>
    </>
  );
};
export default Contact;
