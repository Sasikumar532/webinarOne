import React from 'react';
import './DifferenceSection.css';

const DifferenceSection = () => {
  return (
    <section className="difference-section" id="#schedule">
      <div className="difference-container">
        {/* Left: Text */}
        <div className="difference-text">
          <h2 className="difference-header">
          В чем отличие Прекурса от
          <span> БАЗОВЫХ МЕДИЦИНСКИХ КУРСОВ?</span></h2>
          <p className="difference-dates"> Июль-Август 2025</p>

          <div className='difference-content-para'>
            <p><span>Базовые медицинские курсы</span> - это одни из самых масштабных образовательных курсов по онкологии и онкопатологии в мире!
            </p>
            <div>
            <span>Целевая аудитория Курсов:</span> начинающие онкологи (ординаторы, аспиранты, студенты) и врачи неонкологических специальностей.<br></br>
            <span>А также</span> врачи и ординаторы по патологической анатомии, которые хотят освоить <span>основы онкопатологии.</span>
            </div>
          </div>
          <ul className="difference-description">
            <li>
            <span>
            Более двух недель</span> полного погружения в онкологию и онкопатологию
            </li>
            <li>
            <span>Более 70 экспертов</span> международного уровня
            </li>
            <li>
            <span>Награды</span> в виде стажировок, помощи в карьерном развитии и трудоустройстве, а также <span>БЕСПЛАНТНАЯ ординатура*</span> мирового уровня <span>с сопровождением</span> ментора и <span>возможностью стажироваться</span> в ведущих учреждениях РФ и зарубежья со <span>стипендией от 40.000 руб./мес до 120.000 руб./мес</span>
            </li>
          </ul>

          <p className='info'>* Оплачиваемая первая, вторая или третья ординатура по любой специальности в РФ на выбор</p>

          <div className="difference-buttons">
            <button className="program-button">ПОДРОБНЕЕ</button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="difference-image">
          <img 
            src="https://static.wixstatic.com/media/e6f22e_4dffd05ad1264d33bc9f92d1db852781~mv2.jpg" 
            alt="Basic Medical Courses" 
          />
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
