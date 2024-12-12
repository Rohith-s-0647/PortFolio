import React from "react";
import "./Projects.css";

const projects = [
  { 
    id: 1, 
    title: 'E-commerce App', 
    description: 'An online store built with HTML, CSS, and JavaScript, featuring product listing and basic cart functionality.', 
    link: 'https://rohith-s-0647.github.io/Front_end_project/' 
  },
  { 
    id: 2, 
    title: 'Portfolio Website', 
    description: 'A responsive portfolio showcasing my skills, projects, and professional experience.', 
    link: 'https://rohith-s-0647.github.io/Portfolio/' 
  },
  { 
    id: 3, 
    title: 'Calculator App', 
    description: 'A simple yet interactive calculator app with multiple arithmetic and percentage operations.', 
    link: 'https://rohith-s-0647.github.io/Calculator/' 
  },
  { 
    id: 4, 
    title: 'Meal Hub', 
    description: 'An online food ordering platform with an easy-to-navigate menu and order system.', 
    link: 'https://rohith-s-0647.github.io/Meal-Hub/' 
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <p className="projects-intro">Take a look at some of the projects I've worked on. Click "View Live" to explore more details!</p>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn project-btn"
            >
              View Live
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
