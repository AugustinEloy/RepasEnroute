import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importation du fichier CSS

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/RepasEnroute" className="nav-link">Accueil</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
