import React, { useEffect, useState } from "react";
import "./styles.css";
const axios = require("axios");

const Project = (props) => {
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    getLang();
  }, []);

  const getLang = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/phaepaul/${props.project.name}/languages`
      );
      setLanguages(response.data);
      console.log(response.data);
    } catch (ex) {
      console.log(ex);
      console.log(`Could not get languages for project ${props.project.name}`);
    }
  };
  return (
    <div className="project" key={props.id}>
      <a href={props.project.html_url} className="flex space-between">
        <div className="project">{props.project.name}</div>
        <div className="languages">
          {
            Object.keys(languages).map((el, i) => {
              return (<span className="lang" key={i}>{el}</span>);
            })
          }
        </div>
      </a>
    </div>
  );
};

export default Project;
