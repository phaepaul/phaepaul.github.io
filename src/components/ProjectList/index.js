import React from "react";
import database from "../../database.json";
import "./styles.css";
import ProjectRow from "../ProjectRow";

const ProjectList = () => {
  return (
    <div id="projects">
      <h4> # Recent projects </h4>
      <div className="container">
        {database.length > 0
          ? database.map((project) => {
               return <ProjectRow project={project} />;
            })
          : "Something went wrong."}
      </div>
    </div>
  );
};

export default ProjectList;
