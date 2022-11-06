import React from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { ProjectList } from "../../Data/ProjectList";

import "../Projects/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
