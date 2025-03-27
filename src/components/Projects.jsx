import React from "react";
import "../projects.css";

const Projects = () => {
  return (
    <div>
      <h2> My projects</h2>
      <div className="techIssues">
        <em>
          I am currently facing some technical issues with the back-end of my
          Apps, because of <u>Adaptable.io's closing services</u>. <br />
          I'm trying to manage my time as best as I can to resolve those issues.
          <br />
          Thank you for your understanding.
        </em>
      </div>

      <p>
        Below, you'll find a selection of projects that I've worked on. These
        projects showcase my skills in various technologies, from responsive web
        design to server-side programming. <br />
        Each projects reflects my commitment to clean code, as I'm still
        improving the versions submitted during my training.
        <br />
        <em>I hope you enjoy exploring my work as I enjoyed creating it !</em>
      </p>
      <div>
        {/* <h1>#1 Project :</h1> */}
        {/* <div className="project1">
          <article className="card">
            <div className="thumb1"></div>
            <div className="infos">
              <h2 className="title">PokerExp</h2>
              <h3 className="date">Mai 2024 - ongoing</h3>
              <h3 className="seats">Laravel, HeidiSQL</h3>
              <p className="txt">
                An online poker academy, where instructors have the opportunity
                to upload their own courses and share with a wide community of
                poker enthusiasts.
              </p>
              <a
                href="https://pokerexp.com/"
                className="details"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
            </div>
          </article>
        </div> */}
        <div className="project2">
          <h1>#1 Project :</h1>
          <div>
            <article className="card">
              <div className="thumb2"></div>
              <div className="infos">
                <h2 className="title">WanderHer</h2>
                <h3 className="date">April 2024 - ongoing</h3>
                <h3 className="seats">React JS, MERN stack, bcrypt</h3>
                <p className="txt">
                  Created by and for women with itchy feet and fierce hearts,
                  WanderHer is here to revolutionize the way women travel—solo,
                  but never alone.
                </p>
                <a
                  href="https://wanderher.netlify.app/about-us"
                  className="details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              </div>
            </article>
          </div>
        </div>
        <div className="project3">
          <h1>#2 Project :</h1>
          <div>
            <article className="card">
              <div className="thumb3"></div>
              <div className="infos">
                <h2 className="title">Furry Friend Finder</h2>
                <h3 className="date">April 2024 - In remastering</h3>
                <h3 className="seats">React JS, Axios, Mock API</h3>
                <p className="txt">
                  Furry Friends Finder is a website to adopt/put to adoption
                  homeless pets near you and provide them homes.
                </p>
                <a
                  href="https://furryfriendsfinder-remastered.netlify.app/about"
                  className="details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              </div>
            </article>
          </div>
        </div>
        <div className="project4">
          <h1>#3 Project :</h1>
          <div>
            <article className="card">
              <div className="thumb4"></div>
              <div className="infos">
                <h2 className="title">Farm Adventure</h2>
                <h3 className="date">April 2024 - to be remastered</h3>
                <h3 className="seats">JavaScript, HTML, CSS</h3>
                <p className="txt">
                  2D pixel game where you have to collect as much food as you
                  can by jumping with the UP arrow on your keyboard, but be
                  careful of the bad guys!
                </p>
                <a
                  href="https://mimibsn.github.io/farm-adventures/"
                  className="details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
