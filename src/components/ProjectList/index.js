import React, { useEffect, useState } from "react";
import "./styles.css";
import Project from "../Project";
const axios = require("axios");

const ProjectList = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/phaepaul/repos"
      );
      setProjects(response.data);
      console.log(response.data);
    } catch (ex) {
      console.log(ex);
      console.log("Could not get current github projects!");
    }
  };
  return (
    <div className="projectList">
      {projects.length > 0
        ? projects.map((project, i) => {
            return(<Project project={project} key={i}/>)
          })
        : ""}
    </div>
  );
};

export default ProjectList;
