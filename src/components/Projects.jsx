import React from "react";
import "../projects.css";

const Projects = () => {
  return (
    <div>
      <p>
        Below, you'll find a selection of projects that I've worked on. These
        projects showcase my skills in various technologies, from responsive web
        design to server-side programming. Each projects reflects my commitment
        to clean code, as I've improved the version submitted during my
        training.
        <br />I hope you enjoy exploring my work as I enjoyed creating it !
      </p>
      <div>
        <h1>#1 Project :</h1>
        <div className="project1">
          <article className="card1">
            <div className="thumb1"></div>
            <div className="infos1">
              <h2 className="title1">PokerExp</h2>
              <h3 className="date1">Mai 2024 - ongoing</h3>
              <h3 className="seats1">Laravel, HeidiSQL</h3>
              <p className="txt1">
                An online poker academy, where instructors have the opportunity
                to upload their own courses and share with a wide community of
                poker enthusiasts.
              </p>
              <a
                href="https://pokerexp.com/"
                className="details1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
            </div>
          </article>
        </div>
        <div className="project2">
          <h1>#2 Project :</h1>
          <div>
            <article className="card2">
              <div className="thumb2"></div>
              <div className="infos2">
                <h2 className="title2">WanderHer</h2>
                <h3 className="date2">April 2024 - ongoing</h3>
                <h3 className="seats2">React JS, MERN stack, bcrypt</h3>
                <p className="txt2">
                  Created by and for women with itchy feet and fierce hearts,
                  WanderHer is here to revolutionize the way women travel—solo,
                  but never alone.
                </p>
                <a
                  href="https://wanderher.netlify.app/about-us"
                  className="details2"
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
          <h1>#3 Project :</h1>
          <div>
            <article className="card3">
              <div className="thumb3"></div>
              <div className="infos3">
                <h2 className="title3">Furry Friend Finder</h2>
                <h3 className="date3">April 2024 - In remastering</h3>
                <h3 className="seats3">React JS, Axios, Mock API</h3>
                <p className="txt3">
                  Furry Friends Finder is a website to adopt/put to adoption
                  homeless pets near you and provide them homes.
                </p>
                <a
                  href="https://furryfriendsfinder-remastered.netlify.app/about"
                  className="details3"
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
          <h1>#4 Project :</h1>
          <div>
            <article className="card4">
              <div className="thumb4"></div>
              <div className="infos4">
                <h2 className="title4">Farm Adventure</h2>
                <h3 className="date4">April 2024 - to be remastered</h3>
                <h3 className="seats4">JavaScript, HTML, CSS</h3>
                <p className="txt4">
                  2D pixel game where you have to collect as much food as you
                  can by jumping with the UP arrow on your keyboard, but be
                  careful of the bad guys!
                </p>
                <a
                  href="https://mimibsn.github.io/farm-adventures/"
                  className="details4"
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
