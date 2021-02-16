import React, { useEffect, useState } from "react";
import database from "../../database.json"
import "./styles.css";
import Project from "../Project";
const axios = require("axios");

const ProjectList = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(database);
  }, []);

  return (
    <div className="projectList">
      {database.length > 0
        ? database.map((project, i) => {
            return(<Project project={project} key={i}/>)
          })
        : ""}
    </div>
  );
};

export default ProjectList;
