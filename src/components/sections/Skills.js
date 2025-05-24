import React from 'react';

function Skills() {
  return (
    <section id="competences" className="skills">
      <div className="section-container">
        <h2 className="section-title">Mes Compétences</h2>
        
        <div className="skills-categories">
          {/* Catégorie 1: Administration Système */}
          <div className="skills-category">
            <h3><i className="fas fa-server"></i> Administration Système</h3>
            <div className="skills-items">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-windows"></i>
                </div>
                <span className="skill-name">Windows</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-linux"></i>
                </div>
                <span className="skill-name">Linux</span>
              </div>
            </div>
          </div>
          
          {/* Catégorie 2: Développement informatique */}
          <div className="skills-category">
            <h3><i className="fas fa-code"></i> Développement</h3>
            <div className="skills-items">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-js-square"></i>
                </div>
                <span className="skill-name">JavaScript</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-react"></i>
                </div>
                <span className="skill-name">React</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-vuejs"></i>
                </div>
                <span className="skill-name">Vue.js</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-html5"></i>
                </div>
                <span className="skill-name">HTML5</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <span className="skill-name">CSS3</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-android"></i>
                </div>
                <span className="skill-name">Java/Kotlin</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-python"></i>
                </div>
                <span className="skill-name">Python</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-terminal"></i>
                </div>
                <span className="skill-name">Bash</span>
              </div>
            </div>
          </div>
          
          {/* Catégorie 3: DEVOPS */}
          <div className="skills-category">
            <h3><i className="fas fa-sync-alt"></i> DevOps</h3>
            <div className="skills-items">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-github"></i>
                </div>
                <span className="skill-name">GitHub Actions</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-gitlab"></i>
                </div>
                <span className="skill-name">GitLab CI/CD</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-docker"></i>
                </div>
                <span className="skill-name">Docker</span>
              </div>
            </div>
          </div>
          
          {/* Catégorie 4: Virtualisation */}
          <div className="skills-category">
            <h3><i className="fas fa-hdd"></i> Virtualisation</h3>
            <div className="skills-items">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-network-wired"></i>
                </div>
                <span className="skill-name">VMWare</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-box-open"></i>
                </div>
                <span className="skill-name">VirtualBox</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-microsoft"></i>
                </div>
                <span className="skill-name">Hyper-V</span>
              </div>
            </div>
          </div>
          
          {/* Catégorie 5: Data */}
          <div className="skills-category">
            <h3><i className="fas fa-database"></i> Data</h3>
            <div className="skills-items">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <span className="skill-name">Cartographie</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <span className="skill-name">Analyse</span>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <span className="skill-name">BDD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
