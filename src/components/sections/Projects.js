import React from 'react';

function Projects() {
  return (
    <section id="projets" className="projects">
      <div className="section-container">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="projects-grid">
          {/* Projet 1 - GitHub */}
          <div className="project-card">
            <div className="project-header">
              <h4>Portfolio</h4>
              <div className="project-links">
                <a href="https://github.com/SamyBoudjema/mon-portfolio" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" title="GitHub"></i>
                </a>
                <a href="https://samyboudjema.github.io/mon-portfolio/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt" title="Site live"></i>
                </a>
              </div>
            </div>
            
            <p className="project-description">Portfolio personnel développé avec React.js pour présenter mon parcours, mes compétences et mes projets.</p>
            
            <div className="project-tech">
              <span>React.js</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
          </div>
          
        {/* Projet 2 - GitHub */}
          <div className="project-card">
            <div className="project-header">
              <h4>Site E-commerce</h4>
              <div className="project-links">
                <a href="https://github.com/SamyBoudjema/E-commerce" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" title="GitHub"></i>
                </a>
              </div>
            </div>
            
            <p className="project-description">Application web React JS d'un site de vente de sneakers.</p>
            
            <div className="project-tech">
              <span>React.js</span>
              <span>JSON</span>
              <span>HTML/CSS</span>
            </div>
          </div>
          
        {/* Projet 3 - GitHub */}
          <div className="project-card">
            <div className="project-header">
              <h4>LocaBus</h4>
              <div className="project-links">
                <a href="https://github.com/SamyBoudjema/LocaBus" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" title="GitHub"></i>
                </a>
              </div>
            </div>
            
            <p className="project-description">Application de gestion de location de Bus avec signature électronique DocuSign.</p>
            
            <div className="project-tech">
              <span>Python</span>
              <span>Tkinter</span>
              <span>API</span>
            </div>
          </div>
          
          {/* Projet 4 - GitLab */}
          <div className="project-card">
            <div className="project-header">
              <h4>IMG Translate</h4>
              <div className="project-links">
                <a href="https://gitlab.com/master-1-cyber/anglais/anglais-site" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-gitlab" title="GitLab"></i>
                </a>
                <a href="https://anglais-trad-46dgn.ondigitalocean.app/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt" title="Site live"></i>
                </a>
              </div>
            </div>
            
            <p className="project-description">IMG Description</p>
            
            <div className="project-tech">
              <span>HTML/CSS</span>
              <span>API OCR</span>
              <span>DEVOPS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
