import React from 'react';
import './Hero.css';
import Rohith from './assets/Rohith.jpeg';
import Resume from './assets/RohithS.pdf';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">S.Rohith</span></h1>
          <p>
            I am a passionate Front-End Developer, specializing in building dynamic and user-friendly web applications. 
            I love crafting seamless and interactive user experiences.
          </p>
          <a href="#projects" className="btn">View My Work</a>
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn">My Resume</a>
        </div>
        <div className="hero-image">
          <img src={Rohith} alt="S. Rohith" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
