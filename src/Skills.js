import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5', color: '#e34f26' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572b6' },
  { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
  { name: 'React.js', icon: 'fab fa-react', color: '#61dafb' },
  { name: 'SQL', icon: 'fas fa-database', color: '#ff5722' },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} style={{ borderColor: skill.color }}>
            <i className={skill.icon} style={{ color: skill.color }}></i>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
