import React from 'react';
import './AboutCourses.css';

const AboutCourses = () => {
  return (
    <section className="about-courses-section" id='about-courses'>
      <div className="about-courses-container">
        {/* Left: Image */}
        <div className="about-courses-image">
          <img 
            src="https://static.wixstatic.com/media/df6cc5_fcedfd243b464b3cad96ae934ddb1fba~mv2.jpg" 
            alt="Basic Medical Courses" 
          />
        </div>

        {/* Right: Text */}
        <div className="about-courses-text">
          <h2 className="about-courses-header">
            Что такое <span>ПРЕКУРС
             "ОСНОВЫ ОНКОЛОГИИ и ОНКОПАТОЛОГИИ"?</span>
          </h2>
          <p className="about-courses-dates">Февраль - Май 2025</p>
          <ul className="about-courses-description">
            <li>
            <span>Прекурс "Основы онкологии и онкопатологии"</span> - это серия из 12 вебинаров (онлайн), которые охватывают ключевые вопросы общей онкологии и онкопатологии: от биологии рака до современных методов лечения и организации онкологической службы. Для проведения вебинаров мы приглашаем ведущих экспертов международного уровня, которые в доступном формате объясняют фундаментальные понятия
            </li>
            <h4 className="sub-heading">Что вас ждет?</h4>
            <li><span>Бесплатное участие:</span>  Все вебинары доступны для бесплатного просмотра.</li>
            <li><span>Удобный формат:</span>  Вы можете смотреть вебинары как в режиме реального времени, так и в записи через ваш личный кабинет на нашем сайте.</li>
            <li><span>Сертификат участника:</span> По завершении вебинаров пройдет тестирование, за прохождение которого можно получить сертификат участника. Результаты тестирования откроют Вам возможность получить льготное участие в наших очных XI EAFO Базовых медицинских курсах, запланированных на лето 2025 года.</li>
            <li>
              Конкурсное участие в XI EAFO Базовых медицинских курсах позволяет претендовать на главный приз - БЕСПЛАТНАЯ ординатура со стипендией от 40.000 до 120.000 руб./мес.
            </li>
          </ul>

          <div className="about-courses-buttons">
            <button
  className="program-button"
  onClick={() => {
    const section = document.getElementById("program");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  ПРОГРАММА ПРЕКУРСА
</button>
            <button className="registration-button" onClick={() => window.open("https://ui.eafo.info", "_blank")} >РЕГИСТРАЦИЯ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourses;
