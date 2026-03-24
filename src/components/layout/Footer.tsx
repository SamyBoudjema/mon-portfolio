import React from 'react';

/**
 * Pied de page de l'application.
 */
const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Samy Boudjema</p>
    </footer>
  );
};

export default Footer;
