import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const ProgramSection = () => {
  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "50px 0" }} id='schedule'>
      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
        РАСПИСАНИЕ
        </h2>
        

        <Timeline lineColor={'#ddd'}>
          {/* Timeline Element 1 */}
          <TimelineItem
            key="001"
            dateText="4 февраля"
            style={{ color: '#033773' }}
            dateInnerStyle={{ background: '#033773', color: '#fff' }}
            bodyContainerStyle={{
              borderRadius: '8px',background:'#033773',
              color:'white',width:'fit-content',
              padding:'10px 15px'
            }}
          >
            <h3>Старт Прекурса</h3>
            <h4>Основы ОНКОЛОГИИ и ОНКОПАТОЛОГИИ</h4>
          </TimelineItem>

          {/* Timeline Element 2 */}
          <TimelineItem
            key="002"
            dateText="29 апреля"
            style={{ color: '#033773' }}
            dateInnerStyle={{ background: '#033773', color: '#fff' }}
            bodyContainerStyle={{
              borderRadius: '8px',background:'#033773',
              color:'white',width:'fit-content',
              padding:'10px 15px'
            }}
          >
            <h3>Итоговое тестирование</h3>
            <h3 style={{color:"#fff"}}></h3>
          </TimelineItem>

          {/* Timeline Element 3 */}
          <TimelineItem
            key="003"
            style={{ color: '#033773' }}
            dateText="Май - Июнь"
            dateInnerStyle={{ background: '#033773', color: '#fff' }}
            bodyContainerStyle={{
              borderRadius: '8px',background:'#033773',
              color:'white',width:'fit-content',
              padding:'10px 15px'
            }}
          >
            <h3>Отбор участников на конкурсное участие</h3>
            <h4>Добавить внеконкурсное участие</h4>
          </TimelineItem>

          {/* Timeline Element 4 */}
          <TimelineItem
            key="004"
            style={{ color: '#033773' }}
            dateText="23 июля - 6 августа"
            dateInnerStyle={{ background: '#033773', color: '#fff' }}
            bodyContainerStyle={{
              borderRadius: '8px',background:'#033773',
              color:'white',width:'fit-content',
              padding:'10px 15px'
            }}
          >
            <h3>XI EAFO БАЗОВЫЕ МЕДИЦИНСКИЕ КУРСЫ</h3>
            <h4>Онкология и Онкопатология</h4>
          </TimelineItem>
          
        </Timeline>
      </div>
    </section>
  );
};

export default ProgramSection;
