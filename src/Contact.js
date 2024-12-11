import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 style={{color:'lightorange'}}>Contact Me</h2>
      <p style={{color:'white'}}>Feel free to reach out via email or connect with me on social media.</p>
      <div className="contact-links">
        <a href="mailto:rohith0647.s@gmail.com" className="btn">Email Me</a>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/rohith-s-bb08b0336/" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
