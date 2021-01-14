import React from 'react';
import './styles.scss';

const Project = (props) => {
  return (
    <div className="project">
      {props.name}
    </div>
  )
}


export default Project;