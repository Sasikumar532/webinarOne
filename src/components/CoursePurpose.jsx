import React from "react";
import { FaRegGem } from "react-icons/fa"; // Diamond icon
import "./CoursePurpose.css";

const CoursePurpose = () => {
  const points = [
    "Врачи и ординаторы неонкологических специальностей",
    "Врачи-патологи",
    "Биологи и ученые, занимающиеся онкологическими исследованиями",
    "Ординаторы и аспиранты по онкологии, патологической анатомии",
    "Студенты медицинских ВУЗов и колледжей",
    "Представители медицинской промышленности (фармацевтической и др.)"
  ];

  return (
    <div className="course-purpose-page" id="for-whom">
    <section className="course-purpose">
      <div className="overlay"></div> {/* Overlay for background */}
      <h2 className="course-purpose-heading">ДЛЯ КОГО?</h2>

      <div className="points-container">
        <div className="column">
          {points.slice(0, 3).map((point, index) => (
            <div className="point" key={index}>
              <FaRegGem className="diamond-icon" />
              <p>{point}</p>
            </div>
          ))}
        </div>
        <div className="column">
          {points.slice(3).map((point, index) => (
            <div className="point" key={index}>
              <FaRegGem className="diamond-icon" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default CoursePurpose;
