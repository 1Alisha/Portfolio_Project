import React from "react";
import './Projects.css';
import { Image } from "react-bootstrap";

function Projects(){
    return(
        <div id="projects" className="catalog">
        <h1>My Projects</h1>
        <div className="container">
            <div className="one">
            <div className="catalog-cell">
              <Image src="p1.jpg" className="catalog-image" />
              <div className="text-overlay">TechShed</div>
              <p>Electronic Website</p>
            </div>
            <div className="catalog-cell">
                <Image src="p2.jpg" className="catalog-image" />
                <div className="text-overlay">All-in-one<br/>Grocers</div>
                <p>Grocery Website</p>
            </div>
            </div>
            
            <div className="two">
            <div className="catalog-cell">
              <Image src="p3.jpg" className="catalog-image" />
              <div className="text-overlay">LangHub</div>
              <p>Language Learning website</p>
            </div>
            <div className="catalog-cell">
                <Image src="p4.jpg" className="catalog-image" />
                <div className="text-overlay">Hotstar</div>
                <p>Disney Hotstar Clone</p>
            </div>
            </div>
            <hr/>
        </div>
        
        </div>
    );
}

export default Projects;