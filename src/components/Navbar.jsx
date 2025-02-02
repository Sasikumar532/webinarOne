import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const userIconRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        userIconRef.current &&
        !userIconRef.current.contains(event.target)
      ) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Smooth scrolling function
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust 80px for navbar height
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close menu on mobile
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <img src="src/assets/eafo_logo.png" alt="EAFO Logo" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links-desktop">
          <ul className="navbar-links-desk">
            <li>
              <a  onClick={(e) => handleScrollToSection(e, "#about-courses")}>О курсах</a>
            </li>
            <li>
              <a  onClick={(e) => handleScrollToSection(e, "#schedule")}>РАСПИСАНИЕ</a>
            </li>
            <li>
              <a  onClick={(e) => handleScrollToSection(e, "#")}>ЭКСПЕРТЫ</a>
            </li>
            <li>
              <a  onClick={(e) => handleScrollToSection(e, "#program")}>ПРОГРАММА</a>
            </li>
            <li>
              <a  onClick={(e) => handleScrollToSection(e, "#for-whom")}> ДЛЯ КОГО?</a>
            </li>
            <li>
              <a  onClick={(e) => handleScrollToSection(e, "#cost")}>НАГРАДЫ</a>
            </li>
            <li>
              <a  onClick={(e) => handleScrollToSection(e, "#partners")}>ПАРТНЕРЫ</a>
            </li>
            <li>
              <a  onClick={(e) => handleScrollToSection(e, "#contact")}>СВЯЗАТЬСЯ С НАМИ</a>
            </li>
          </ul>
        </div>

        <div className="user-menu">
          {/* User Icon */}
          <div className="user-icon" onClick={toggleUserMenu} ref={userIconRef}>
            <FaUser className="icon" />
          </div>

          {/* User Dropdown Menu */}
          {userMenuOpen && (
            <div className="user-dropdown" ref={userMenuRef}>
              <div>
                <button className="user-account-btn" onClick={() => window.open("https://ui.eafo.info", "_blank")}>
                  Личный кабинет
                </button>
              </div>
              <div className="user-divider"></div>
              <div className="contact-section">
                <p>Свяжитесь с нами</p>
                <div className="contact-icons">
                  <FaWhatsapp className="icon whatsapp-icon" />
                  <FaTelegramPlane className="icon telegram-icon" />
                </div>
              </div>
            </div>
          )}

          {/* Menu Button */}
          <button className={`menu-button ${menuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <a href="#about-courses" onClick={(e) => handleScrollToSection(e, "#about-courses")}>О КУРСАХ</a>
          </li>
          <li>
            <a href="#schedule" onClick={(e) => handleScrollToSection(e, "#schedule")}>РАСПИСАНИЕ </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleScrollToSection(e, "#")}>ЭКСПЕРТЫ</a>
          </li>
          <li>
            <a href="#program" onClick={(e) => handleScrollToSection(e, "#program")}>ПРОГРАММА</a>
          </li>
          <li>
            <a href="#for-whom" onClick={(e) => handleScrollToSection(e, "#for-whom")}>ДЛЯ КОГО?</a>
          </li>
          <li>
            <a href="#cost" onClick={(e) => handleScrollToSection(e, "#cost")}>НАГРАДЫ</a>
          </li>
          <li>
            <a href="#partners" onClick={(e) => handleScrollToSection(e, "#partners")}>ПАРТНЕРЫ</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "#contact")}>СВЯЗАТЬСЯ С НАМИ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
