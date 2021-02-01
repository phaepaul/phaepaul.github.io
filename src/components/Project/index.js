import React from "react";
import "./styles.scss";

const Project = (props) => {
  return (
    <a href={props.project.html_url}>
      <div className="project">{props.project.name}</div>
    </a>
  );
};

export default Project;
