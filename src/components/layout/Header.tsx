import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'a-propos', 'projets', 'competences', 'contact'];
      let currentSection = 'accueil';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si le haut de la section est dans la moitié supérieure de l'écran
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#a-propos" className={activeSection === 'a-propos' ? 'active' : ''}>À propos de moi</a></li>
          <li><a href="#projets" className={activeSection === 'projets' ? 'active' : ''}>Mes projets</a></li>
          <li><a href="#competences" className={activeSection === 'competences' ? 'active' : ''}>Compétences</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
