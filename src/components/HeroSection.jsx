import React, { useState } from "react";
import "./HeroSection.css";
import {FaVk} from 'react-icons/fa'; // Importing social media icons from React Icons
import PreRegisterForm from "./PreRegisterForm";
const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="hero-section">
      
      <div className="hero-bg">
        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content Container */}
        <div className="hero-content">
          {/* Title */}
          <div className="hero-title">
            <h1>XI EAFO Базовые медицинские курсы</h1>
          </div>

          {/* Subtitle */}
          <div className="hero-subtitle">
            <p>Прекурс</p>
            <h2>Основы oнкологии и oнкопатологии</h2>
          </div>
          <div className="hero-date">
            <p>4 Февраля - 29 Апреля 2025 года</p>
          </div>

          {/* Information Boxes */}
          <div className="hero-boxes">
            <div className="hero-box">
              <h3>Погрузись в основы онкологии</h3>
              <p>
                Биология рака, скрининг, диагностика, лечение, паллиативная помощь и
                многое другое
              </p>
            </div>
            <div className="hero-box">
              <h3>Эксперты международного уровня</h3>
              <p>
                Из ведущих учреждений России и зарубежья
              </p>
            </div>
            <div className="hero-box">
              <h3>Поборись за главный приз</h3>
              <p>
                БЕСПЛАТНАЯ ординатура со стипендией от 40.000 до 120.000 руб./мес
              </p>
            </div>
          </div>

          {/* Date */}
                
          <div className="hero-section-buttons">
    {/* Registration Button */}
    <button
        className="registration-button same-width-button"
        onClick={() => setShowForm(true)}

    >
        Регистрация
    </button>

    {/* VK Button */}
    <button
        className="vk-btn same-width-button"
        onClick={() => window.open("https://ui.eafo.info", "_blank")}
    >
        Личный кабинет
        
    </button>
</div>

        </div>
      </div>


      {showForm && <PreRegisterForm courseId="67fb8bc722a71bd3d19d580d" onClose={() => setShowForm(false)} />}
      
    </section>
  );
};

export default HeroSection;
