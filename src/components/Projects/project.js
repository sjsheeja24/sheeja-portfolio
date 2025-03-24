import React from 'react';
import './project.css';

const Projects = () => {
    const projectData = [
        {
            title: "Portfolio Website",
            description: "A responsive personal portfolio website built using React.js and CSS.",
            image: `${process.env.PUBLIC_URL}/images/portfolio.png`
        },
        
    ];

    return (
        <section id="project">
            <h2 className="section-title">My <span className="protitle">Projects</span></h2>
            <p className="propara">Showcasing my journey as a frontend developer with a clean and <br/> responsive portfolio built using React.js.</p>
            <div className="projects-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project-box">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
