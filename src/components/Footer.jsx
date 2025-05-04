import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaVk } from 'react-icons/fa'; // Importing social media icons from React Icons
import './Footer.css'; // Add custom styles here for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Section */}
        <div className="footer-row">
          {/* First Column: Logo and About the Company */}
          <div className="footer-column logo-column">
            <img src="https://static.wixstatic.com/media/e6f22e_a90a0fab7b764c24805e7e43d165d416~mv2.png" alt="EAFO Logo" className="footer-logo" />
            <p className="footer-about">EAFO - ведущая образовательная организация, которая предлагает обучающие программы и курсы мирового уровня. Мы стремимся обеспечить качественное образование для студентов по всему миру.
            </p>
          </div>

          {/* Second Column: Footer Links */}
          <div className="footer-column links-column">
            <h4 className="footer-heading">Полезные ресурсы.</h4>
            <ul className="footer-links">
             <div>
              <li><a href="#about-courses">О КУРСАХ</a></li>
              <li><a href="#schedule">РАСПИСАНИЕ</a></li>
              <li><a href="#program">ПРОГРАММА</a></li>
               <li><a href="#faculty">ЭКСПЕРТЫ</a></li>
              </div><div>
               <li><a href="#gallery">ГАЛЕРЕЯ</a></li>
              <li><a href="#for-whom">ДЛЯ КОГО?</a></li>
              <li><a href="#partners">ПАРТНЕРЫ</a></li>
              <li><a href="#contact">СВЯЗАТЬСЯ С НАМИ</a></li>
              </div>
            </ul>
          </div>

          {/* Third Column: Social Media Links */}
          <div className="footer-column social-column">
            <h4 className="footer-heading">Подписывайтесь на нас</h4>
            <div className="footer-social">
               <a href="https://vk.com/eafo_info" target="_blank" rel="noopener noreferrer">
                <FaVk size={24} />
              </a>


            </div>
          </div>
        </div>

        {/* Footer Bottom Section: Copyright */}
        <div className="footer-bottom">
          <hr className="footer-line" />
          <p>&copy; 2025 EAFO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
