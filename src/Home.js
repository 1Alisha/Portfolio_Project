import React from "react";
import './App.css';
import { Image } from "react-bootstrap";

const Home=()=>{

    const handleButtonClick = () => {
        const projectSection = document.getElementById('projects');
        if (projectSection) {
          projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return(
        <div id="home">
            <Image src="profile.png" className="profile-image"/>
            <div>
                <h1>Akshat</h1>
                <p>Developer, Programmer</p>
            </div>
            <div className="arrow-button" onClick={handleButtonClick}>
                <div className="arrow-icon">v</div>
            </div>
        </div>
    );
}

export default Home;