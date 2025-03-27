import React from "react";
import App from "../App";

const Skills = () => {
  return (
    <div className="skillPres">
      <h2> My Skills</h2>
      {/* <p>
        As a full-stack developer, I acquired a diverse set of skills that allow
        me to tackle both front-end and back-end challenges. <br />
        Here's a glimpse into what I can bring to the table.
      </p> */}
      <div className="skills">
        <div className="skillCard">
          <p>JavaScript ES6</p>
        </div>
        <div className="skillCard">
          <p>React JS</p>
        </div>
        <div className="skillCard">
          <p>Tailwind CSS</p>
        </div>
        <div className="skillCard">
          <p>MongoDB</p>
        </div>
        <div className="skillCard">
          <p>Express</p>
        </div>
        <div className="skillCard">
          <p>Node</p>
        </div>
        <div className="skillCard">
          <p>HTML5</p>
        </div>
        <div className="skillCard">
          <p>CSS3</p>
        </div>
      </div>
      <h2>Skills I am learning</h2>
      <div className="learningSkills">
        <div className="learningSkillsCard">
          <p>TypeScript</p>
        </div>
        <div className="learningSkillsCard">
          <p>Next.Js</p>
        </div>
        <div className="learningSkillsCard">
          <p>Data analytics</p>
        </div>
      </div>
    </div>
  );
};
export default Skills;
