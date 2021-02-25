import React, { useState } from "react";
import folder from "../../images/folder.png";
import "./styles.css";

const Project = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div key={props.id}>
      <div className="project flex space-between">
        <div
          className="align-center flex"
          onMouseEnter={() => {
            setShow(true);
          }}
          onMouseLeave={() => {
            setShow(false);
          }}
        >
          <a href={props.project.url}>
            <p className={`project-name ${show ? "highlight" : ""}`}>
              <img src={folder} alt="folder" />
              {props.project.name}
            </p>
          </a>
        </div>
      </div>
      <div className={`desc ${show ? "expanded" : ""}`}>
        <div className="desc-content">
          <small>CONTEXT:</small>
          {props.project.notes}
        </div>
        <div className="desc-content">
          <small>PROJECT TYPE:</small>
          {props.project.tags.join(", ")}
        </div>
        <div className="desc-content">
          <small>FRAMEWORK:</small>
          {props.project.framework}
        </div>
        <div className="desc-content">
          <small>LANGUAGES:</small>
          {props.project.languages.map((el, i) => {
            return (
              <span key={i} className="tag">
                {el}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
