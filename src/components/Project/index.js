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
          {props.project.name}
          <a href={props.project.url}>
            <img src={link} className="pl-1 link" />
          </a>
        </div>
        <div className="languages">
          {props.project.languages.map((el, i) => {
            return (
              <span className="lang" key={i}>
                {el}
              </span>
            );
          })}
        </div>
      </div>
      <div className={`desc ${show ? "expanded" : ""}`}>
        {props.project.notes}
      </div>
    </div>
  );
};

export default Project;
