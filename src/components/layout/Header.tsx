import React, { useState, useEffect } from 'react';

const NAV_SECTIONS = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos de moi' },
  { id: 'projets', label: 'Mes projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

/**
 * En-tête de navigation de l'application.
 */
const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    let rafId: number | null = null;

    const computeActiveSection = () => {
      let currentSection = 'accueil';
      for (const { id } of NAV_SECTIONS) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(computeActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    computeActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className="header">
      <nav aria-label="Navigation principale">
        <ul>
          {NAV_SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
