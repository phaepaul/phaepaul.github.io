import React, { useState } from "react";
import link from "../../images/link.png";
import "./styles.css";

const Project = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div
      key={props.id}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div className="project flex space-between">
        <div className="align-center flex">
          <a href={props.project.url}>
            <p className={`project-name ${show ? "highlight" : ""}`}>
              - {props.project.name}
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
          <span>PROJECT TYPE:</span>
          {props.project.tags.join(", ")}
        </div>
        <div className="desc-content">
          <small>FRAMEWORK:</small>
          <span className="tag">{props.project.framework}</span>
        </div>
        <div className="desc-content">
          <small>LANGUAGES:</small>
          {props.project.languages.map((el, i) => {
            return (
              <span key={i} className="tag lang-tag">
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
