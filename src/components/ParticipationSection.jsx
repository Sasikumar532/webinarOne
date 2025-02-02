import React, { useState } from 'react';
import { FaPlus, FaMinus, FaCircle } from 'react-icons/fa';
import './ParticipationSection.css';

const ParticipationSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "Внеконкурсное участие",
      details: [
        "15-дневная программа",
        "Проектная работа в команде с другими участниками Курсов",
        "11 дней Базового курса по онкологии (клиническая программа) - 56 часов",
        "2 дня практики в отделениях или на амбулаторном приеме (16 часов)",
        "VI EAFO Семинар по биологии рака - 8 часов",
        "II ECRC–EAFO Семинар по академическим клиническим исследованиям в онкологии и гематологии - 8 часов SACROH–2025",
        "IV EAFO Семинар по Гематологии – для негематологов - 8 часов",
        "VI RASSC–EAFO Семинар по поддерживающей терапии у онкологических больных - 8 часов",
        "Именной бейдж, тубус, брошюра программы, сертификат участия, сувенирная продукция EAFO",
        "Завтрак, обед, ужин во все дни программы (кроме дней практики)",
        "Торжественный ужин в 14-ый день Курсов",
      ],
    },
    {
      title: "Конкурсное участие",
      details: [
        "все, что включено во Внеконкурсное участие",
        "Субсидированное участие со скидкой",
        "Возможность побороться за главный приз - Бесплатная ординатура со стипендией 60.000 руб./мес",
      ],
      additionalDetails: {
        title: "Условия отбора:",
        points: [
          "Результат отборочного тестирования",
          "Резюме (CV)",
          "Мотивационное письмо",
          "Средний балл (для обучающихся медицинских ВУЗов)",
          "Сертификаты о знании языков (если есть)",
        ],
      },
    },
    {
      title: "Онлайн участие",
      details: [
        "15-дневная программа Онлайн",
        "Доступ к записям на 6 месяцев",
        "11 дней Базового курса по онкологии (клиническая программа) - 56 часов",
        "VI EAFO Семинар по биологии рака - 8 часов",
        "II ECRC–EAFO Семинар по академическим клиническим исследованиям в онкологии и гематологии - 8 часов",
        "IV EAFO Семинар по Гематологии – для негематологов - 8 часов",
        "VI RASSC–EAFO Семинар по поддерживающей терапии у онкологических больных - 8 часов",
        "Сертификат участия",
      ],
    },
  ];

  return (
    <div className='partcipation-full-section'>
    <div className="participation-section">
      <h2 className="section-heading">КАТЕГОРИИ УЧАСТИЯ</h2>
      <div className="participation-container">
        {sections.map((section, index) => (
          <div key={index} className="participation-box">
            <div
              className="participation-header"
              onClick={() => toggleSection(index)}
            >
              <span>{section.title}</span>
              {activeSection === index ? <FaMinus /> : <FaPlus />}
            </div>
            {activeSection === index && (
              <div className="participation-details">
                <ul>
                  {section.details.map((detail, idx) => (
                    <li key={idx} className="detail-item">
                      <FaCircle className="detail-icon" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {section.additionalDetails && (
                  <div className="additional-section">
                    <h4>{section.additionalDetails.title}</h4>
                    <ul>
                      {section.additionalDetails.points.map((point, idx) => (
                        <li key={idx} className="plain-item">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ParticipationSection;
