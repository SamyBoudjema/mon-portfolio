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
      title: "Payplan 🚀",
      description: "Application iOS premium de suivi de finances personnelles construite avec SwiftUI et alimentée par Notion en tant que backend. Conçue pour la rapidité, l'esthétique et le suivi collaboratif des dépenses.",
      technologies: ["SwiftUI", "Notion API", "iOS"],
      githubUrl: "https://github.com/SamyBoudjema/Payplan"
    },
    {
      title: "PokéQuizz 🎮",
      description: "Application mobile hybride de quiz Pokémon interactive où les utilisateurs devinent les noms des Pokémon à partir d'images en noir et blanc.",
      technologies: ["Cordova", "JavaScript", "HTML/CSS", "API REST"],
      githubUrl: "https://github.com/SamyBoudjema/PokeQuizz_HybridMobile"
    },
    {
      title: "ExamM2 - Microsoft Technologies 💻",
      description: "Projet d'examen M2 Informatique CYBER — 3 exercices en .NET 9.0 : API E-Commerce, algorithme de labyrinthe (BFS) et EF Core InMemory, avec pipeline CI/CD.",
      technologies: [".NET 9.0", "ASP.NET Core", "xUnit", "GitHub Actions"],
      githubUrl: "https://github.com/SamyBoudjema/examen_Microsoft_Technologies"
    },
    {
      title: "Portfolio 👤",
      description: "Portfolio personnel développé avec React.js pour présenter mon parcours, mes compétences et mes projets.",
      technologies: ["React.js", "TypeScript", "CSS3"],
      githubUrl: "https://github.com/SamyBoudjema/mon-portfolio",
      liveUrl: "https://samyboudjema.github.io/mon-portfolio/"
    },
    {
      title: "Projet Unity XR - PICO 🥽",
      description: "Template de projet Unity XR préconfiguré pour le développement d'applications de réalité étendue sur casque PICO.",
      technologies: ["Unity", "C#", "XR SDK", "PICO"],
      githubUrl: "https://github.com/SamyBoudjema/EDN-XR-Project"
    },
    {
      title: "Site E-commerce 👟",
      description: "Application web React JS d'un site de vente de sneakers.",
      technologies: ["React.js", "JSON", "HTML/CSS"],
      githubUrl: "https://github.com/SamyBoudjema/E-commerce"
    },
    {
      title: "Tests d'intégration 🧪",
      description: "Exercice de tests d'intégration avec mocking d'API et validation de formulaire — cas passants et non passants.",
      technologies: ["JavaScript", "Testing Library", "MSW"],
      githubUrl: "https://github.com/SamyBoudjema/testing-library-evaluation"
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
