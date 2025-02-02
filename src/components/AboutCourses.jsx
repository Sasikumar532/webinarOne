import React from 'react';
import './AboutCourses.css';

const AboutCourses = () => {
  return (
    <section className="about-courses-section" id='about-courses'>
      <div className="about-courses-container">
        {/* Left: Image */}
        <div className="about-courses-image">
          <img 
            src="https://static.wixstatic.com/media/df6cc5_077ebc3064ff4486ae34e9eed376d549~mv2.jpg" 
            alt="Basic Medical Courses" 
          />
        </div>

        {/* Right: Text */}
        <div className="about-courses-text">
          <h2 className="about-courses-header">
            Что такое <span>ПРЕКУРС
             "ОСНОВЫ ОНКОЛОГИИ и ОНКОПАТОЛОГИИ"?</span>
          </h2>
          <p className="about-courses-dates">Февраль - Апрель 2025</p>
          <ul className="about-courses-description">
            <li>
              Прекурс "Основы онкологии и онкопатологии" - это серия из 12 вебинаров, которые охватывают ключевые вопросы общей онкологии и онкопатологии: от биологии рака до современных методов лечения и организации онкологической службы.
              После завершения Прекурса у Вас будет возможность пройти итоговое тестирование и получить сертификат участия.
            </li>
            <li>
              Участники, набравшие наибольшее количество баллов за тестирование, могут претендовать на конкурсное участие в XI EAFO Базовых медицинских курсах.
            </li>
            <li>
              Конкурсное участие в XI EAFO Базовых медицинских курсах позволяет претендовать на главный приз - БЕСПЛАТНАЯ ординатура со стипендией 40.000 до 120.000 руб./мес.
            </li>
          </ul>

          <div className="about-courses-buttons">
            <button className="program-button">ПРОГРАММА ПРЕКУРСА</button>
            <button className="registration-button" onClick={() => window.open("https://ui.eafo.info", "_blank")} >РЕГИСТАРАЦИЯ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourses;
