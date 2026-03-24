import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import backgroundImage from '../../assets/back_screen.avif';
import cvFile from '../../assets/CV_SamyBoudjema.pdf';

/**
 * Composant de la section d'accueil (Hero).
 */
const Hero: React.FC = () => {
  const { isVisible, domRef } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="accueil" className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div
        ref={domRef}
        className={`hero-content fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h1 className="hero-name" data-text="Samy Boudjema">Samy Boudjema</h1>
        <h2 className="hero-title">Apprenti Ingénieur DevSecOps</h2>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/samy-boudjema-814076218/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Profil LinkedIn">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/SamyBoudjema" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Profil GitHub">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://gitlab.com/samy.bdm16" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Profil GitLab">
            <i className="fab fa-gitlab" aria-hidden="true"></i>
          </a>
        </div>

        <div className="hero-buttons">
          <a href={cvFile} download="CV_SamyBoudjema.pdf" className="btn btn-primary">CV</a>
          <a href="#contact" className="btn btn-secondary">Me Contacter</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
