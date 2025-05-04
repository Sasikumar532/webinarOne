import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import QuizIcon from '@mui/icons-material/Quiz';
import PsychologyIcon from '@mui/icons-material/Psychology'; // Brain inside head
import FaceIcon from '@mui/icons-material/Face'; // Simple human head
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './ProgramSection.css';


const ProgramSection = () => {
  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "50px 0" }} id="schedule">
      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
          РАСПИСАНИЕ
        </h2>

        <VerticalTimeline layout={"1-column-left"} lineColor="#033773" className="timeline-container">
          {/* Timeline Element 1 */}
          <VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="4 февраля"
  dateClassName="custom-date"
  contentStyle={{ background: "#033773", color: "#fff" }}
  contentArrowStyle={{ borderRight: "7px solid #033773" }}
  iconStyle={{ background: "#033773", color: "#fff" }}
  icon={<SchoolIcon />}
>
  <h3 style={{ textAlign: "center" }}>Старт Прекурса</h3>
  <h4 style={{ textAlign: "center" }}>Основы ОНКОЛОГИИ и ОНКОПАТОЛОГИИ</h4>
</VerticalTimelineElement>


          {/* Timeline Element 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="С 29 апреля (вторник) по 29 мая"
            contentStyle={{ background: "#033773", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #033773" }}
            iconStyle={{ background: "#033773", color: "#fff" }}
            icon={<AssignmentIcon />}
          >
            <h3>Итоговое тестирование</h3>
          </VerticalTimelineElement>

          {/* Timeline Element 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Май - Июнь"
            contentStyle={{ background: "#033773", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #033773" }}
            iconStyle={{ background: "#033773", color: "#fff" }}
            icon={<PsychologyIcon />}
          >
            <h3>Отбор участников на конкурсное участие</h3>
            
          </VerticalTimelineElement>

          {/* Timeline Element 4 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="23 июля - 6 августа"
            contentStyle={{ background: "#033773", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #033773" }}
            iconStyle={{ background: "#10CC52", color: "#fff" }}
            icon={<StarIcon />}
          >
            <h3>XI EAFO Базовые медицинские курсы по онкологии и онкопатологии</h3>
            <h4>Онкология и Онкопатология</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ProgramSection;
