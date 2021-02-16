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
      className=""
    >
      <div className="project flex space-between">
        <div className="align-center flex">
          <h5>{props.project.name}</h5>
          {props.project.url !== "" && (
            <a href={props.project.url}>
              <img src={link} className="pl-1 link" />
            </a>
          )}
        </div>
        <div className="languages">
          <span className="tag">{props.project.framework}</span>
        </div>
      </div>
      <div className={`desc ${show ? "expanded" : ""}`}>
        <div className="desc-content">CONTEXT: {props.project.notes}</div>
        <div className="desc-content"> LANGUAGES:
        {props.project.languages.map((el, i) => {
          return (
            <span key={i} className="tag lang-tag">
              {el}
            </span>
          );
        })}
        </div>
        <div className="desc-content">PROJECT TYPE: {props.project.tags.join(", ")}</div>
      </div>
    </div>
  );
};

export default Project;
