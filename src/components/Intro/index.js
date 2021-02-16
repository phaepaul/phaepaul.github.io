import React, { useEffect, useState } from "react";
import "./styles.css";

const Intro = (props) => {

  return (
    <div className="intro">
      <span>Hello, my name is</span>
      <h4 className="m-0">Phaedra Paul.</h4>
      <small>I'm a full stack web developer.</small>
    </div>
  );
};

export default Intro;
