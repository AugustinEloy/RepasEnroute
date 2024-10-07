import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import HomePage from './component/homepage';
import SubscriptionPage from './component/subscriptionpage';
import ContactPage from './component/contact';
import './App.css'; // Importation du fichier CSS

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subscription/:type" element={<SubscriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
