import React from 'react';
import './App.css';
import backgroundImage from './assets/back_screen.avif';
import cvFile from './assets/CV_SamyBoudjema.pdf';
import photoProfile from './assets/photo.jpeg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li><a href="#a-propos">À propos</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="accueil" className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="hero-content">
            <h1 className="hero-name" data-text="Samy Boudjema">Samy Boudjema</h1>
            <h2 className="hero-title">Développeur Full Stack</h2>
            <h3 className="hero-subtitle">Alternant en Informatique</h3>
            
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

        <section id="a-propos" className="about">
          <div className="section-container">
            <h2 className="section-title">À Propos de Moi</h2>
            
            <div className="about-content">
              <div className="about-text">
                <p>
                  Bonjour et bienvenue sur mon portfolio ! Je suis passionné par le développement web et la cybersécurité. 
                </p>
                <p>
                  Mon parcours en alternance me permet de combiner ma formation académique avec une expérience professionnelle concrète,
                  où j'applique et développe mes compétences techniques au quotidien.
                </p>
                <p>
                  J'aime relever de nouveaux défis et explorer les dernières technologies pour créer des solutions innovantes.
                </p>
              </div>
              
              <div className="id-card">
                <div className="id-card-header">
                  <img src={photoProfile} alt="Samy Boudjema" className="profile-photo" />
                  <div className="id-card-header-text">
                    <h3>Samy Boudjema</h3>
                    <span className="id-card-title">Développeur Full Stack</span>
                  </div>
                </div>
                
                <div className="id-card-body">
                  <div className="id-card-grid">
                    <div className="id-card-grid-item">
                      <span className="id-card-label">Formation</span>
                      <span className="id-card-value">Master Informatique</span>
                    </div>
                    
                    <div className="id-card-grid-item">
                      <span className="id-card-label">Statut</span>
                      <span className="id-card-value">Alternant</span>
                    </div>
                    
                    <div className="id-card-grid-item">
                      <span className="id-card-label">Entreprise</span>
                      <span className="id-card-value">DataDocs</span>
                    </div>
                    
                    <div className="id-card-grid-item">
                      <span className="id-card-label">Localisation</span>
                      <span className="id-card-value">Lille, France</span>
                    </div>
                    
                    <div className="id-card-grid-item">
                      <span className="id-card-label">Âge</span>
                      <span className="id-card-value">23 ans</span>
                    </div>
                    
                    <div className="id-card-grid-item">
                      <span className="id-card-label">Nationalité</span>
                      <span className="id-card-value">Française</span>
                    </div>
                  </div>

                  <div className="id-card-interests-container">
                    <span className="id-card-label">Intérêts</span>
                    <div className="id-card-interests">
                      <span className="interest-icon" title="Musique"><i className="fas fa-music"></i></span>
                      <span className="interest-icon" title="Jeux vidéos"><i className="fas fa-gamepad"></i></span>
                      <span className="interest-icon" title="Cinéma"><i className="fas fa-film"></i></span>
                      <span className="interest-icon" title="Livres"><i className="fas fa-book"></i></span>
                      <span className="interest-icon" title="Football"><i className="fas fa-futbol"></i></span>
                      <span className="interest-icon" title="Basketball"><i className="fas fa-basketball-ball"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Autres sections... */}
      </main>

      <footer>
        <p>&copy; 2025 Samy Boudjema</p>
      </footer>
    </div>
  );
}

export default App;