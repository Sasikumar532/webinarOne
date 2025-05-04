import React from 'react';
import './DifferenceSection.css';

const DifferenceSection = () => {
  return (
    <section className="difference-section" id="course-difference">
      <div className="difference-container">
        {/* Left: Text */}
        <div className="difference-text">
          <h2 className="difference-header">
          Что такое
          <span> БАЗОВЫХ МЕДИЦИНСКИХ КУРСОВ?</span></h2>
          <p className="difference-dates"> Июль - Август 2025</p>

          <div className='difference-content-para'>
            <p><span style={{fontSize:"20px"}}>XI EAFO </span><span>Базовые медицинские курсы</span> - это очное двухнедельное образовательное мероприятие по онкологии и онкопатологии. Курсы являются одним из основных событий Евразийской федерации онкологии.
Что вас ждет?
            </p>
               <li><span>Полноценное погружение</span> в современное понимание онкологии под руководством ведущих экспертов.</li>
               <li><span>Практический опыт в</span> онкопатологии, даже если Вы никогда не работали с микроскопом.</li>            
               <li>Обучение в общении – возможность задать экспертами любые вопросы, общение в режиме реального времени на протяжении изучения темы.</li>
 <div>
            <span>Целевая аудитория Курсов:</span> начинающие онкологи (ординаторы, аспиранты, студенты) и врачи неонкологических специальностей. А также врачи и ординаторы по патологической анатомии, которые хотят освоить основы онкопатологии.
            </div>
            <div>
            <span>Конкурсное (льготное) участие:</span> Для принятия конкурсного участия в Курсах необходимо пройти вебинары Прекурса и успешно сдать итоговое тестирование (Доступ к тестированию будет открыт с 29 апреля 2025 года).
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
            Для конкурсных участников предусмотрены <span>Награды</span> в виде стажировок, помощи в карьерном развитии и трудоустройстве, а также <span>БЕСПЛАТНАЯ ординатура*</span> мирового уровня <span>с сопровождением ментора</span> и <span>возможностью стажироваться</span> в ведущих учреждениях РФ и зарубежья <span>со стипендией от 40.000  до 120.000 руб./мес</span>
            </li>
          </ul>

          <p className='info'>* Оплачиваемая первая, вторая или третья ординатура по любой специальности в РФ на выбор</p>

          <div className="difference-buttons">
                        <button className="registration-button" onClick={() => window.open("https://ui.eafo.info", "_blank")} >РЕГИСТРАЦИЯ</button>
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
