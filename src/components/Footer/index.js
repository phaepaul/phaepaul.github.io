import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <div id="foot">
      <span className="subtitle">
        <a href="#">Thanks for reading!</a>
      </span>
      <div>I'm currently looking for new opportunities.</div>
      <a href="mailto:phaedra@phaedra.net">
        <button>
          Contact
        </button>
      </a>
    </div>
  )
}


export default Footer;