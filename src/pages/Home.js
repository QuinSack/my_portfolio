import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const email = "sackiteydivine24@gmail.com";
  const sendEmail = () => {
    window.location.href = `mailto:${email}`;
  }
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Divine Sackitey</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link to='https://www.linkedin.com/in/divine-sackitey-624ab0194/'><LinkedInIcon /></Link>
          <span onClick={sendEmail}><EmailIcon /></span>
          <Link to='https://github.com/QuinSack'><GithubIcon /></Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              ASP.NET Core, GraphQL, PHP,
              Postgresql,AWS S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C#, C, C++, HTML, CSS, SQL</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
