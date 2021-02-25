import React from "react";
import "./styles.css";
import gl from "../../images/gitlab.png";
import lin from "../../images/linkedin.png";
import gh from "../../images/github.png";
import folder from "../../images/folder.png";
import Clock from "../Clock";

const Header = () => {
  return (
    <div className="header flex">
      <div className="flex" id="toolbar">
        <a href="https://www.linkedin.com/in/phaedra-paul">
          <button className="btn-header">
            <img src={lin} alt="linkedin" />
            linkedin
          </button>
        </a>

        <a href="https://github.com/phaepaul/">
          <button className="btn-header">
            <img src={gh} alt="github" />
            github
          </button>
        </a>

        <a href="https://gitlab.com/_phaedra">
          <button className="btn-header">
            <img src={gl} alt="gitlab" />
            gitlab
          </button>
        </a>
      </div>

      <Clock />
    </div>
  );
};

export default Header;
