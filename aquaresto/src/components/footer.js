import React from 'react';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">Aquaresto</h2>
          <p>
            Notre restaurant vous offre une cuisine raffinée, préparée avec des ingrédients frais et de saison. Venez découvrir notre carte et notre ambiance chaleureuse.
          </p>
          <div className="contact">
            <span><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Rue des Champs, 75001 Paris, France</span>
            <span><FontAwesomeIcon icon={faPhone} /> 01 23 45 67 89</span>
            <span><FontAwesomeIcon icon={faEnvelope} /> contact@aquaresto.com</span>
          </div>
        </div>
       
        <div className="footer-section social">
          <h2>Nous suivre</h2>
          <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Aquaresto. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
