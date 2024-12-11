import React from "react";
import "./Projects.css";

const projects = [
  { id: 1, title: 'E-commerce App', description: 'An online store built with React.js.', link: 'http://localhost:3000/' },
  { id: 2, title: 'Portfolio Website', description: 'A responsive portfolio showcasing my skills.', link: 'https://example.com/portfolio' },
  { id: 3, title: 'Calculator App', description: 'A task management tool with CRUD operations.', link: 'http://localhost:3000/' },
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
