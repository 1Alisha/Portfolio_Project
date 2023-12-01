import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h5 className="h5">My Portfolio</h5> 
      </div>
      <div className="navbar-links">
        <a href="https://www.linkedin.com/in/akshatsalar"><i className="fab fa-linkedin"></i>&nbsp;&nbsp;Hire Me</a>
        <a><FontAwesomeIcon icon={faFile} />&nbsp;&nbsp;View/Download Resume</a>
      </div>
    </div>

  );
}

export default Navbar;