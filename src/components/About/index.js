import React from "react";
import "./styles.css";

const About = () => {
  return (
    <div id="about">
      <h4>About</h4>
      <p>
        Hi, I'm Phaedra. I'm a Columbus, Ohio based software engineer and a
        proud graduate of <a href="https://twitter.com/OhioState">#OSU</a>. I
        enjoy creating responsive front-end technologies and optimized APIs.
      </p>
      <p>
        I'm currently employed at{" "}
        <a href="https://www.ticketfire.com">TicketFire</a> where I work with a
        wide array of projects and technology sets.
      </p>
      <div>
        Lately I've been working with:
        <ul>
          <li>SQL</li>
          <li>Ruby on Rails</li>
          <li>React</li>
          <li>Javascript (ES6)</li>
          <li>HTML and (S)CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
