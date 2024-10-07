import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'; 

const SubscriptionPage = () => {
  const { type } = useParams();
  
  const getSubscriptionDetails = (type) => {
    switch (type) {
      case 'basic':
        return {
          title: 'Abonnement Basic',
          description: 'Idéal pour les repas quotidiens, cet abonnement inclut 5 repas par semaine avec des options variées pour le déjeuner et le dîner.',
          features: [
            'Livraison gratuite',
            'Accès à un menu fixe',
            'Possibilité de choisir parmi plusieurs plats',
            'Service de support par email',
          ],
        };
      case 'premium':
        return {
          title: 'Abonnement Premium',
          description: 'Pour ceux qui souhaitent un peu plus de flexibilité, cet abonnement comprend 10 repas par semaine avec une sélection élargie et des options plus diversifiées.',
          features: [
            'Livraison gratuite',
            'Accès à un menu variable avec options saisonnières',
            'Choix de plats spéciaux du jour',
            'Service de support prioritaire',
            'Accès à des réductions sur des restaurants partenaires',
          ],
        };
      case 'gourmet':
        return {
          title: 'Abonnement Gourmet',
          description: 'Pour les amateurs de cuisine raffinée, cet abonnement offre 15 repas par semaine avec des options gastronomiques et des plats préparés par des chefs renommés.',
          features: [
            'Livraison gratuite',
            'Accès à un menu haut de gamme avec des plats exclusifs',
            'Consultation avec un nutritionniste',
            'Service de support personnalisé',
            'Accès à des événements culinaires privés',
          ],
        };
      default:
        return {
          title: 'Abonnement Non Trouvé',
          description: 'Désolé, cet abonnement n\'existe pas.',
          features: [],
        };
    }
  };

  const { title, description, features } = getSubscriptionDetails(type);

  return (
    <div className="subscription-page">
      <h1 className="subscription-title">{title}</h1>
      <p className="subscription-description">{description}</p>
      <ul className="subscription-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionPage;
