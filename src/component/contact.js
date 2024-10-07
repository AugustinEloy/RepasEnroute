import React from 'react';
import '../App.css'; // Importation du fichier CSS

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contactez-Nous</h1>
      <p className="contact-info">Pour toute question ou demande, veuillez nous contacter à l'adresse suivante :</p>
      <p className="contact-email">Email : contact@repasenroute.com</p>
      <p className="contact-address">Adresse : 123 Rue de la Gastronomie, 75000 Paris, France</p>
    </div>
  );
};

export default ContactPage;
