import React from "react";
import App from "../App";

const Skills = () => {
  return (
    <div>
      <div className="skillPres">
        <p>
          As a full-stack developer, I acquired a diverse set of skills that
          allow me to tackle both front-end and back-end challenges. My toolkit
          is designed to create seamless and dynamic web application from the
          ground up. Here's a glimpse into what I can bring to the table.
        </p>
        <div className="skillCard">
          <h1>JavaScript Game</h1>
        </div>
        <div className="skillCard">
          <h1>React JS</h1>
        </div>
        <div className="skillCard">
          <h1>MongoDB</h1>
        </div>
        <div className="skillCard">
          <h1>Express</h1>
        </div>
        <div className="skillCard">
          <h1>Node</h1>
        </div>
      </div>
      <div>
        <p>Skills I am learning</p>
        <div className="skillCard">
          <ul>
            <li>TypeScript</li>
            <li>Next.Js</li>
            <li>TailWind</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
