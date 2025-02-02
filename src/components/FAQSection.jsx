import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQSection.css';

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    { question: "Как принять участие в Курсах?", answer: "Для того чтобы принять участие в конференции необходимо заполнить регистрационную форму и выбрать подходящую Вам категорию участия. Ссылка на оплату придет на указанную почту. После оплаты мы отправим Вам письмо с подтверждением." },
    { question: "Что означает категория 'Конкурсное участие'?", answer: "'Конкурсное участие' дает право на получение призов по результатам ежедневных и итогового тестирования. Главный приз - прохождение первой, второй или третьей ординатуры БЕСПЛАТНО и со стипендией 60.000 руб./мес. Участники с категорией 'Внеконкурсное участие' получают полный доступ ко всей программе Курсов, но не могут претендовать на получение призов." },
    { question: "Претендовать на бесплатную ординатуру могут только выпускники медицинских ВУЗов текущего года?", answer: "На главный приз в виде прохождения бесплатной ординатуры со стипендией 60.000 руб./мес могут претендовать студенты всех курсов, а также ординаторы, аспиранты и врачи любых специальностей." },
    { question: "Бесплатная ординатура со стипендией может быть только по специаности 'онкология' и 'патологическая анатомия'?", answer: "Победитель Курсов имеет право на выбор любой специальности для прохождения ординатуры." },
    { question: "Сколько лет необходимо отработать после окончания бесплатной ординатуры?", answer: "Ничего отрабатывать не нужно. Победитель получает право прохождения бесплатной ординатуры со стипендией 60.000 руб./мес на безвозмездной основе. Подброднее о призах и условиях их получения можете ознакомиться здесь." },
    { question: "Сколько человек могут претендовать на главный приз? И есть ли другие призы?", answer: "Главный приз по результат тестирований и других индивидуальных достижений будет вручен одному участнику Курсов по онкологии (клиническая) и одному участнику Курса по онкопатологии (диагностическая). На получение призов могут претендовать лишь участники с категорией 'Конкурсное участие'. Подробнее о других призах можете прочитать здесь." },
    { question: "Будет ли доступ к записям Курсов?", answer: "Да, доступ будет предоставлен на 6 месяцев как для участников Онлайн, так и для очных участников." },
    { question: "Предоставляется ли место для проживания иногородним участникам?", answer: "Для участников, которым необходимо проживание во время проведения Курсов, за дополнительную плату предоставляется жилье на весь срок проведения Курсов или только на определенные дни по желанию участника. Подробнее с условиями проживания можете ознакомиться здесь." }
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-heading">Часто задаваемые вопросы</h2>
      <div className="faq-container">
        {/* Column 1 */}
        <div className="faq-column">
          {faqData.slice(0, 4).map((item, index) => {
            const springProps = useSpring({
              opacity: activeQuestion === index ? 1 : 0,
              height: activeQuestion === index ? 'auto' : '0',
              overflow: 'hidden',
              paddingTop: activeQuestion === index ? '10px' : '0',
              paddingBottom: activeQuestion === index ? '10px' : '0',
              config: { tension: 250, friction: 25 }
            });

            return (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleQuestion(index)}>
                  <span>{item.question}</span>
                  <div className={`faq-icon ${activeQuestion === index ? 'active' : ''}`}>
                    {activeQuestion === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                <animated.div style={springProps}>
                  {activeQuestion === index && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </animated.div>
              </div>
            );
          })}
        </div>

        {/* Column 2 */}
        <div className="faq-column">
          {faqData.slice(4, 8).map((item, index) => {
            const springProps = useSpring({
              opacity: activeQuestion === index + 4 ? 1 : 0,
              height: activeQuestion === index + 4 ? 'auto' : '0',
              overflow: 'hidden',
              paddingTop: activeQuestion === index + 4 ? '10px' : '0',
              paddingBottom: activeQuestion === index + 4 ? '10px' : '0',
              config: { tension: 250, friction: 25 }
            });

            return (
              <div key={index + 4} className="faq-item">
                <div className="faq-question" onClick={() => toggleQuestion(index + 4)}>
                  <span>{item.question}</span>
                  <div className={`faq-icon ${activeQuestion === index + 4 ? 'active' : ''}`}>
                    {activeQuestion === index + 4 ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                <animated.div style={springProps}>
                  {activeQuestion === index + 4 && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </animated.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
