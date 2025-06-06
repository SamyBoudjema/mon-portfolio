import React, { useEffect } from 'react';
import photoProfile from '../../assets/photo.jpeg';
import datadocsLogo from '../../assets/Datadocs_logo.png';
import sitelLogo from '../../assets/logo_sitel.png';
import chrLogo from '../../assets/logo_chr.png';
import univLogo from '../../assets/logo_univ.png';
import juniaLogo from '../../assets/logo_junia.png';
import jeanRostandLogo from '../../assets/Logo_Jean-Rostand-Roubaix.png';
import eicLogo from '../../assets/logo_EIC.jpeg';

function About() {
  useEffect(() => {
    const tabs = document.querySelectorAll('.journey-tab');
    const panels = document.querySelectorAll('.journey-panel');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        
        tab.classList.add('active');
        
        const panelId = `${tab.getAttribute('data-tab')}-panel`;
        document.getElementById(panelId).classList.add('active');
      });
    });

    const spans = document.querySelectorAll('.timeline-card-date span');
    spans.forEach(span => {
      if (span.textContent === "Aujourd'hui") {
        span.style.width = '120px';
      }
    });
  }, []);

  return (
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
        
        <div className="timeline-section">              
          <div className="journey-tabs">
            <div className="journey-tab active" data-tab="education">
              <i className="fas fa-graduation-cap"></i>
              <span>Formation</span>
            </div>
            <div className="journey-tab" data-tab="experience">
              <i className="fas fa-briefcase"></i>
              <span>Expérience</span>
            </div>
          </div>
          
          <div className="journey-content">
            {/* Formations */}
            <div className="journey-panel active" id="education-panel">
              <div className="modern-timeline">
                {/* Formation 1 - Master */}
                <div className="timeline-card">
                  <div className="timeline-card-content">
                    <div className="timeline-date">2023 - Aujourd'hui</div>
                    <div className="company-header">
                      <img src={univLogo} alt="Université Catholique de Lille" className="company-logo" />
                      <div>
                        <h4>Master Informatique CYBER</h4>
                        <h5><i className="fas fa-university"></i> Université Catholique de Lille</h5>
                      </div>
                    </div>
                    <p>Spécialisation en développement web et cybersécurité. Projets académiques en groupe et recherche personnelle.</p>
                    <div className="timeline-tags">
                      <span>Web</span>
                      <span>Cybersécurité</span>
                      <span>Projet</span>
                    </div>
                  </div>
                </div>
                
                {/* Formation 2 - Licence */}
                <div className="timeline-card">
                  <div className="timeline-card-content">
                    <div className="timeline-date">2023 - 2024</div>
                    <div className="company-header">
                      <img src={juniaLogo} alt="Junia" className="company-logo" />
                      <div>
                        <h4>Licence Informatique Transition Digitale - Data & Cybersécurité</h4>
                        <h5><i className="fas fa-university"></i> Junia, Lille</h5>
                      </div>
                    </div>
                    <p>Formation générale en informatique avec spécialisation dans la réglementation en matière de sécurité informatique</p>
                    <div className="timeline-tags">
                      <span>Droit et données</span>
                      <span>Base de données</span>
                      <span>Cybersécurité</span>
                    </div>
                  </div>
                </div>
                
                {/* Formation 3 - BTS */}
                <div className="timeline-card">
                  <div className="timeline-card-content">
                    <div className="timeline-date">2019 - 2021</div>
                    <div className="company-header">
                      <img src={jeanRostandLogo} alt="Lycée Jean Rostand" className="company-logo" />
                      <div>
                        <h4>BTS Système Numérique Informatique & Réseaux</h4>
                        <h5><i className="fas fa-university"></i> Lycée Jean Rostand, Roubaix </h5>
                      </div>
                    </div>
                    <p>Formation technique avec projets pratiques en développement logiciel et web. Apprentissage des fondamentaux de l'informatique.</p>
                    <div className="timeline-tags">
                      <span>Programmation</span>
                      <span>Réseaux</span>
                      <span>SQL</span>
                    </div>
                  </div>
                </div>
                
                {/* Formation 4 - Bac */}
                <div className="timeline-card">
                  <div className="timeline-card-content">
                    <div className="timeline-date">2019</div>
                    <div className="company-header">
                      <img src={eicLogo} alt="Lycée EIC" className="company-logo" />
                      <div>
                        <h4>Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable</h4>
                        <h5><i className="fas fa-school"></i> Lycée EIC - Tourcoing</h5>
                      </div>
                    </div>
                    <p>Option Informatique et Sciences du Numérique.</p>
                    <div className="timeline-tags">
                      <span>Python</span>
                      <span>Logique</span>
                      <span>Mathématiques</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expériences */}
            <div className="journey-panel" id="experience-panel">
              <div className="modern-timeline">
                {/* Expérience 1 - Alternance actuelle */}
                <div className="timeline-card">
                  <div className="timeline-card-content">
                    <div className="timeline-date">2023 - Aujourd'hui</div>
                    <div className="company-header">
                      <img src={datadocsLogo} alt="DataDocs" className="company-logo" />
                      <div>
                        <h4>Alternance Consultant / Développeur</h4>
                        <h5><i className="fas fa-building"></i> DataDocs, Lezennes</h5>
                      </div>
                    </div>
                    <p>Chefferie de projet et Mise en place de solution GED & Automatisation de WorkFlow</p>
                    <div className="timeline-tags">
                      <span>Script et Web Service - Python & APIs</span>
                      <span>Portail Web : React.js & Vue.js</span>
                      <span>Déploiement sur serveur - DEVOPS (Gitlab CI/CD, IIS)</span>
                    </div>
                  </div>
                </div>
                
                {/* Expérience 2 - Stage */}
                <div className="timeline-card">
                  <div className="timeline-card-content">
                    <div className="timeline-date">2022</div>
                    <div className="company-header">
                      <img src={sitelLogo} alt="Sitel" className="company-logo" />
                      <div>
                        <h4>Technicien informatique</h4>
                        <h5><i className="fas fa-building"></i> Sitel, Wasquehal</h5>
                      </div>
                    </div>
                    <p>Relation client et maintenance informatique au sein du service EDF Entreprise</p>
                    <div className="timeline-tags">
                      <span>Relation client</span>
                      <span>Support</span>
                      <span>VM</span>
                    </div>
                  </div>
                </div>
                
                {/* Expérience 3 - Stage */}
                <div className="timeline-card">
                  <div className="timeline-card-content">
                    <div className="timeline-date">2021</div>
                    <div className="company-header">
                      <img src={chrLogo} alt="Centre Hospitalier Victor Provo" className="company-logo" />
                      <div>
                        <h4>Stage DSI</h4>
                        <h5><i className="fas fa-laptop-code"></i> Centre Hospitalier Victor Provo, Roubaix</h5>
                      </div>
                    </div>
                    <p>Support technique aux utilisateurs (médecins, infirmiers, personnel administratif), Gestion et maintenance du parc informatique (postes, imprimantes, périphériques médicaux)</p>
                    <div className="timeline-tags">
                      <span>GLPI</span>
                      <span>Windows</span>
                      <span>Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
