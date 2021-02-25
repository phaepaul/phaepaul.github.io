import React from "react";
import "./styles.css";
import Project from "../Project";

const ProjectRow = (props) => {
  return (
    <div className="row">
      <Project project={props.project} key={props.project.id} />
    </div>
  );
};

export default ProjectRow;
