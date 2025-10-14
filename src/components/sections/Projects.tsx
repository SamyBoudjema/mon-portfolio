import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  gitlabUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  gitlabUrl, 
  liveUrl 
}) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h4>{title}</h4>
        <div className="project-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" title="GitHub"></i>
            </a>
          )}
          {gitlabUrl && (
            <a href={gitlabUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-gitlab" title="GitLab"></i>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt" title="Site live"></i>
            </a>
          )}
        </div>
      </div>
      
      <p className="project-description">{description}</p>
      
      <div className="project-tech">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsData: ProjectCardProps[] = [
    {
      title: "Portfolio",
      description: "Portfolio personnel développé avec React.js pour présenter mon parcours, mes compétences et mes projets.",
      technologies: ["React.js", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/SamyBoudjema/mon-portfolio",
      liveUrl: "https://samyboudjema.github.io/mon-portfolio/"
    },
    {
      title: "Site E-commerce",
      description: "Application web React JS d'un site de vente de sneakers.",
      technologies: ["React.js", "JSON", "HTML/CSS"],
      githubUrl: "https://github.com/SamyBoudjema/E-commerce"
    },
    {
      title: "LocaBus",
      description: "Application de gestion de location de Bus avec signature électronique DocuSign.",
      technologies: ["Python", "Tkinter", "API"],
      githubUrl: "https://github.com/SamyBoudjema/LocaBus"
    },
    {
      title: "IMG Translate",
      description: "IMG Description",
      technologies: ["HTML/CSS", "API OCR", "DEVOPS"],
      gitlabUrl: "https://gitlab.com/master-1-cyber/anglais/anglais-site",
      liveUrl: "https://anglais-trad-46dgn.ondigitalocean.app/"
    }
  ];

  return (
    <section id="projets" className="projects">
      <div className="section-container">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
