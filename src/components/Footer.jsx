import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
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
