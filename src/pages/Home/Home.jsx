import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Mukul Kolpe</h2>
        <div className="prompt">
          <p>
            A full stack software developer and a passionate open source
            contributor
          </p>
          <a
            href="https://www.linkedin.com/in/mukulkolpe/"
            style={{ "text-decoration-lines": "none" }}
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:mukulkolpe45@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/MukulKolpe">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills🎓</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, GatsbyJS, NextJS, HTML, CSS, SAAS, Flutter, NPM,
              BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End & Databases</h2>
            <span>
              NodeJS, Java, ExpressJS, MySQL, MongoDB, DigitalOcean, AWS,
              Firebase, Appwrite, Heroku, Netlify, Vercel, Postman, GraphQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python, TypeScript, Dart, C, C++, Kotlin
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
