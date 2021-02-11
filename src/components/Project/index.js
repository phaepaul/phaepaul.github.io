import React, { useEffect, useState } from "react";
import "./styles.css";

const Project = (props) => {
  const [languages, setLanguages] = useState({});
  const [project, setProject] = useState('');

  useEffect(() => {
    setProject(Object.keys(props.project)[0]);
    setLanguages();
  }, []);

  return (
    <div className="project" key={props.id}>
      <a href={props.project.url} className="flex space-between">
        <div className="project">{props.project.name}</div>
        <div className="languages">
          {
            props.project.languages.map((el, i) => {
              return (<span className="lang" key={i}>{el}</span>);
            })
          }
        </div>
      </a>
    </div>
  );
};

export default Project;
