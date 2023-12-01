import React from 'react';
import './Skills.css';
import { Image } from "react-bootstrap";

const Skills=()=> {

    const skillsData1 = [
        { name: 'Frontend - HTML, CSS, Javascript, ReactJS', percent: 82 },
        { name: 'Backend - NodeJS, ExpressJS', percent: 68 },
        { name: 'Database - MySql, MongoDB', percent: 40 },
        { name: 'Git', percent: 74 }
      ];

  return (
    <div id='skills'>
    <h1>My Skills</h1>
    <div className='hi'>
    <div className='skill-image'>
      <Image src='sk.png' className='simg'/>
    </div>
    <div className='skills-container'>
     {skillsData1.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-name">{skill.name}</div>
          <div className='percent'>
          <div className="skill-progress" style={{ width: `${skill.percent}%` }}></div>
          <div className='skill-percent'>&nbsp;&nbsp;{skill.percent}%</div>
          </div>
        </div>
      ))}
    </div>
    </div>
    <hr/>
    </div>
  );
}

export default Skills;