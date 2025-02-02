import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons from React Icons
import './Footer.css'; // Add custom styles here for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Section */}
        <div className="footer-row">
          {/* First Column: Logo and About the Company */}
          <div className="footer-column logo-column">
            <img src="src/assets/eafo_logo.png" alt="EAFO Logo" className="footer-logo" />
            <p className="footer-about">EAFO - ведущая образовательная организация, которая предлагает обучающие программы и курсы мирового уровня. Мы стремимся обеспечить качественное образование для студентов по всему миру.
            </p>
          </div>

          {/* Second Column: Footer Links */}
          <div className="footer-column links-column">
            <h4 className="footer-heading">Полезные ресурсы.</h4>
            <ul className="footer-links">
              <li><a href="#about-courses">О КУРСАХ</a></li>
              <li><a href="#schedule">РАСПИСАНИЕ</a></li>
              <li><a href="#">ЭКСПЕРТЫ</a></li>
              <li><a href="#program">ПРОГРАММА</a></li>
              <li><a href="#for-whom">ДЛЯ КОГО?</a></li>
              <li><a href="#cost">НАГРАДЫ</a></li>
              <li><a href="#partners">ПАРТНЕРЫ</a></li>
              <li><a href="#contact">СВЯЗАТЬСЯ С НАМИ</a></li>
            </ul>
          </div>

          {/* Third Column: Social Media Links */}
          <div className="footer-column social-column">
            <h4 className="footer-heading">Подписывайтесь на нас</h4>
            <div className="footer-social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section: Copyright */}
        <div className="footer-bottom">
          <hr className="footer-line" />
          <p>&copy; 2024 EAFO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
