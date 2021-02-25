import React from "react";
import heart from "../../images/heart.png";
import "./styles.css";

const Footer = () => {
  return (
    <div id="foot">
      <span className="subtitle">
        Thanks for reading!
      </span>
      <img src={heart} alt="heart" />
      <p>I'm currently looking for new opportunities.</p>
      <a href="mailto:phaedra@phaedra.net">
        <button>Contact me</button>
      </a>

      <small>
        Created with React in 2021. Inspired by
        <a href="https://brittanychiang.com/"> Brittany Chiang. </a>
      </small>
    </div>
  );
};

export default Footer;
