import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#a-propos">À propos de moi</a></li>
          <li><a href="#projets">Mes projets</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
