import React from "react";
import HomeIcon from "./HomeIcon";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-nav">
        <ul>
          <li>
            <a href="#home">
              <HomeIcon />
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div> */}
      <div className="legal-info">
        <p className="copyrights">
          &copy; {new Date().getFullYear()} Alexandra BUSSON. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
