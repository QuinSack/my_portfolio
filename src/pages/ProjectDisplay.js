import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Stack:</b> {project.skills}
      </p>
      <p>
        <b>Demo: </b> <a href={project.demo} target="_blank" rel="noopener noreferrer">{project.demo}</a>
      </p>
      <a href={project.link} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
    </div>
  );
}

export default ProjectDisplay;
