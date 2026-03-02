import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SkillItemProps {
  icon: string;
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name }) => {
  return (
    <div className="skill-item">
      <div className="skill-icon">
        <i className={icon}></i>
      </div>
      <span className="skill-name">{name}</span>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: string;
  skills: SkillItemProps[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="skills-category">
      <h3><i className={icon}></i> {title}</h3>
      <div className="skills-items">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { isVisible, domRef } = useIntersectionObserver({ threshold: 0.1 });

  const skillsCategories: SkillCategoryProps[] = [
    {
      title: "Administration Système",
      icon: "fas fa-server",
      skills: [
        { icon: "fab fa-windows", name: "Windows" },
        { icon: "fab fa-linux", name: "Linux" }
      ]
    },
    {
      title: "Développement web & logiciel",
      icon: "fas fa-code",
      skills: [
        { icon: "fab fa-js-square", name: "JavaScript" },
        { icon: "fas fa-code", name: "TypeScript" },
        { icon: "fab fa-react", name: "React" },
        { icon: "fab fa-vuejs", name: "Vue.js" },
        { icon: "fab fa-html5", name: "HTML/CSS" },
        { icon: "fab fa-microsoft", name: ".NET / C#" },
        { icon: "fab fa-python", name: "Python" },
        { icon: "fas fa-terminal", name: "Bash" }
      ]
    },
    {
      title: "Mobile & XR",
      icon: "fas fa-mobile-alt",
      skills: [
        { icon: "fab fa-swift", name: "SwiftUI (iOS)" },
        { icon: "fab fa-android", name: "Java/Kotlin" },
        { icon: "fab fa-unity", name: "Unity XR" }
      ]
    },
    {
      title: "DevOps",
      icon: "fas fa-sync-alt",
      skills: [
        { icon: "fab fa-github", name: "GitHub Actions" },
        { icon: "fab fa-gitlab", name: "GitLab CI/CD" },
        { icon: "fab fa-docker", name: "Docker" }
      ]
    },
    {
      title: "Virtualisation",
      icon: "fas fa-hdd",
      skills: [
        { icon: "fas fa-network-wired", name: "VMWare" },
        { icon: "fas fa-box-open", name: "VirtualBox" },
        { icon: "fab fa-microsoft", name: "Hyper-V" }
      ]
    },
    {
      title: "Data",
      icon: "fas fa-database",
      skills: [
        { icon: "fas fa-map-marked-alt", name: "Cartographie" },
        { icon: "fas fa-chart-bar", name: "Analyse" },
        { icon: "fas fa-database", name: "BDD" }
      ]
    }
  ];

  return (
    <section id="competences" className="skills">
      <div
        ref={domRef}
        className={`section-container slide-up-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">Mes Compétences</h2>

        <div className="skills-categories">
          {skillsCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
