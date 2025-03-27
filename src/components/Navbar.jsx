import React, { useEffect, useState } from "react";
import HomeIcon from "./HomeIcon";

const Navbar = () => {
  const [activeSession, setActiveSession] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 60;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY <= bottom) {
          setActiveSession(section.getAttribute("id"));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href="#home" className={activeSession === "home" ? "active" : ""}>
            <HomeIcon />
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSession === "about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSession === "projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={activeSession === "skills" ? "active" : ""}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSession === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
