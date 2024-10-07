import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
     <div className="hero-section">
    <div className="hero-background"></div> 
    <div className="hero-content">
      <h1 className="title">Bienvenue sur RepasEnRoute</h1>
      <p className="hero-description">
        Chez RepasEnRoute, nous facilitons la livraison de repas sains, équilibrés et adaptés à vos besoins. Nos offres d'abonnement vous permettent de profiter de repas frais chaque semaine, que vous soyez à la maison ou au travail.
      </p>
    </div>
  </div>
      <div className="subscription-list">
        <h2 className="subtitle">Nos Abonnements</h2>
        <ul className="subscription-items">
          <li className="subscription-item">
            <h3 className="subscription-title"><Link to="/subscription/basic" className="subscription-link">Abonnement Basic</Link></h3>
            <p className="subscription-description">5 repas par semaine, livraison gratuite.</p>
          </li>
          <li className="subscription-item">
            <h3 className="subscription-title"><Link to="/subscription/premium" className="subscription-link">Abonnement Premium</Link></h3>
            <p className="subscription-description">10 repas par semaine, menu variable.</p>
          </li>
          <li className="subscription-item">
            <h3 className="subscription-title"><Link to="/subscription/gourmet" className="subscription-link">Abonnement Gourmet</Link></h3>
            <p className="subscription-description">15 repas par semaine, plats gastronomiques.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
