import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Full-width Background */}
      <div className="hero-bg">
        {/* Overlay */}
        <div className="overlay"></div>

        {/* Content Container */}
        <div className="hero-content">
          {/* Title */}
          <div className="hero-title">
            <h1>XI EAFO Базовые курсы</h1>
          </div>

          {/* Subtitle */}
          <div className="hero-subtitle">
            <p>Прекурс</p>
            <h2>Основы Онкологии и Онкопатологии</h2>
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
          <div className="hero-date">
            <p>4 Февраля - 29 Апреля 2025 года</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
