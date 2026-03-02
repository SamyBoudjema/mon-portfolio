import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import photoProfile from '../../assets/photo.jpeg';
import datadocsLogo from '../../assets/Datadocs_logo.png';
import sitelLogo from '../../assets/logo_sitel.png';
import chrLogo from '../../assets/logo_chr.png';
import univLogo from '../../assets/logo_univ.png';
import juniaLogo from '../../assets/logo_junia.png';
import jeanRostandLogo from '../../assets/Logo_Jean-Rostand-Roubaix.png';
import eicLogo from '../../assets/logo_EIC.jpeg';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const headerObserver = useIntersectionObserver();
  const contentObserver = useIntersectionObserver({ threshold: 0.2 });
  const timelineObserver = useIntersectionObserver({ threshold: 0.1 });

  const calculateAge = () => {
    // Calcul dynamique de l'âge (année de naissance ~2001)
    const birthDate = new Date('2001-08-16');
    const today = new Date();
    let currentAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      currentAge--;
    }
    return currentAge;
  };

  return (
    <section id="a-propos" className="about">
      <div className="section-container">
        <h2
          ref={headerObserver.domRef}
          className={`section-title fade-in-section ${headerObserver.isVisible ? 'is-visible' : ''}`}
        >
          À Propos de Moi
        </h2>

        <div
          ref={contentObserver.domRef}
          className={`about-content slide-up-section ${contentObserver.isVisible ? 'is-visible' : ''}`}
        >
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
                <span className="id-card-title">Apprenti Ingénieur Cybersécurité</span>
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
                  <span className="id-card-value">{calculateAge()} ans</span>
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

        <div
          ref={timelineObserver.domRef}
          className={`timeline-section slide-up-section delay-200 ${timelineObserver.isVisible ? 'is-visible' : ''}`}
        >
          <div className="journey-tabs" role="tablist" aria-label="Parcours académique et professionnel">
            <button
              className={`journey-tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
              role="tab"
              aria-selected={activeTab === 'education'}
              aria-controls="education-panel"
              id="education-tab"
              tabIndex={activeTab === 'education' ? 0 : -1}
            >
              <i className="fas fa-graduation-cap" aria-hidden="true"></i>
              <span>Formation</span>
            </button>
            <button
              className={`journey-tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
              role="tab"
              aria-selected={activeTab === 'experience'}
              aria-controls="experience-panel"
              id="experience-tab"
              tabIndex={activeTab === 'experience' ? 0 : -1}
            >
              <i className="fas fa-briefcase" aria-hidden="true"></i>
              <span>Expérience</span>
            </button>
          </div>

          <div className="journey-content">
            {/* Formations */}
            <div
              className={`journey-panel ${activeTab === 'education' ? 'active' : ''}`}
              id="education-panel"
              role="tabpanel"
              aria-labelledby="education-tab"
              hidden={activeTab !== 'education'}
            >
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
            <div
              className={`journey-panel ${activeTab === 'experience' ? 'active' : ''}`}
              id="experience-panel"
              role="tabpanel"
              aria-labelledby="experience-tab"
              hidden={activeTab !== 'experience'}
            >
              <div className="modern-timeline">
                {/* Expérience 1 - Alternance actuelle */}
                <div className="timeline-card">
                  <div className="timeline-card-content">
                    <div className="timeline-date">2023 - Aujourd'hui</div>
                    <div className="company-header">
                      <img src={datadocsLogo} alt="DataDocs" className="company-logo" />
                      <div>
                        <h4>Alternance Consultant / Développeur Fullstack</h4>
                        <h5><i className="fas fa-building"></i> DataDocs, Lezennes</h5>
                      </div>
                    </div>
                    <p>Gestion de projets IT de bout en bout : développement Fullstack, déploiement automatisé sur architectures hybrides (Cloud/On-premise) et intégration de la cybersécurité dès la conception (DevSecOps, analyse EBIOS RM).</p>
                    <div className="timeline-tags">
                      <span>Script et Web Service - Python & APIs</span>
                      <span>Portail Web : Frontend : React.js & Vue.js | Backend : Node.js</span>
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
};

export default About;
