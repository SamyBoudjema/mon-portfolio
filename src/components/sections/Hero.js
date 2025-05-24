import React from 'react';
import backgroundImage from '../../assets/back_screen.avif';
import cvFile from '../../assets/CV_SamyBoudjema.pdf';

function Hero() {
  return (
    <section id="accueil" className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1 className="hero-name" data-text="Samy Boudjema">Samy Boudjema</h1>
        <h2 className="hero-title">Développeur Full Stack</h2>
        
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/samy-boudjema-814076218/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/SamyBoudjema" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://gitlab.com/samy.bdm16" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-gitlab"></i>
          </a>
        </div>
        
        <div className="hero-buttons">
          <a href={cvFile} download="CV_SamyBoudjema.pdf" className="btn btn-primary">CV</a>
          <a href="#contact" className="btn btn-secondary">Me Contacter</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
