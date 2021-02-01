import React from "react";
import "./styles.scss";
import { Dropdown } from "react-bootstrap";
import heart from '../../images/heart.png'
import Clock from '../Clock'

const Header = (props) => {
  return (
    <div className="header">
      <div className="flex">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <img src={heart} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>About this computer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          File
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>LinkedIn</Dropdown.Item>
          <Dropdown.Item></Dropdown.Item>
          <Dropdown.Item>Dog</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>

      <Clock />
    </div>
  );
};

export default Header;
