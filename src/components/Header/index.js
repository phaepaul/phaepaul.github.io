import React from "react";
import "./styles.css";
import { Dropdown } from "react-bootstrap";
import heart from "../../images/heart.png";
import globe from "../../images/globe.png";
import Clock from "../Clock";

const Header = () => {
  return (
    <div className="header">
      <div className="flex">
        <Dropdown>
          <Dropdown.Toggle className="header-drop">
            <img src={heart} style={{ paddingTop: "5px" }} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>About this computer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle className="header-drop flex align-center">
            <img src={globe} />
            world wide web
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="https://www.linkedin.com/in/phaedra-paul/">
              LinkedIn
            </Dropdown.Item>
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Clock />
    </div>
  );
};

export default Header;
