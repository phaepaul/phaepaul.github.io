import React, { useEffect, useState } from "react";
import "./styles.css";

const Intro = (props) => {
  return (
    <div className="intro">
      <div>
        <div className="subtitle">Hello, my name is</div>
        <h3 className="intro-header">Phaedra Paul.</h3>
        <p>I build things for the web.</p>
      </div>

      <a href="mailto:phaedra@phaedra.net">
        <button>Get in touch</button>
      </a>
    </div>
  );
};

export default Intro;
