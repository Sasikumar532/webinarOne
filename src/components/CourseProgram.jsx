import React, { useState } from "react";
import { AiOutlineUp } from "react-icons/ai"; // Using React Icons for arrow
import "./CourseProgram.css";
import { FaAngleUp } from "react-icons/fa";

const CourseProgram = () => {
  // Data for the main dropdowns
  const mainDropdownData = [
    {
      title: "  Февраль",
      content: "Details for main dropdown 1",
      image: "https://via.placeholder.com/300",
      subDropdowns: [
        {
            name:"ДРУЙ Александр Евгеньевич",
          subHeading: "Введение в молекулярную онкологию",
          details: "к.м.н., врач клинической лабораторной диагностики, Заведующий лабораторией молекулярной онкологии, Национальный медицинский исследовательский центр детской гематологии, онкологии и иммунологии им. Дмитрия Рогачева, Москва, Россия",
          date: "04.02.2025",
          image: "https://static.wixstatic.com/media/df6cc5_081e86a01b2f4700a6555555d179bfc9~mv2.jpg",
        },
        {
          name:"ДРУЙ Александр Евгеньевич",
          subHeading: "Молекулярно-диагностические маркеры в онкологии",
          details: "к.м.н., врач клинической лабораторной диагностики, Заведующий лабораторией молекулярной онкологии, Национальный медицинский исследовательский центр детской гематологии, онкологии и иммунологии им. Дмитрия Рогачева, Москва, Россия",
          date: "11.02.2025",
          image: "https://static.wixstatic.com/media/df6cc5_081e86a01b2f4700a6555555d179bfc9~mv2.jpg",
        },
        {
          name:"ЧАТУРВЕДИ Панкадж,",
          subHeading: "Скрининг и ранняя диагностика онкологических заболеваний",
          details: "Врач-хирург, профессор, отделение хирургии головы головы и шеи; Директор  Передового центра по изучению и лечению рака, образования в онкологии, Мемориальный центр Тата, Мумбаи, Махараштра, Индия",
          date: "18.02.2025",
          image: "https://static.wixstatic.com/media/df6cc5_3b2678bf2c8049da8f375596e3e83f5c~mv2.jpg",
        },
        {
          name:"КРИШНАМУРТИ Арвинд,",
          subHeading: "Клиническая оценка онкологического пациента",
          details: "Врач-хирург, онколог, профессор, заведующий отделением хирургической онкологии Адьярского онкологического института Ченнаи, Тамил Наду, Индия",
          date: "25.02.2025",
          image: "https://static.wixstatic.com/media/df6cc5_ade31269b52540de9349fc63dd2a460e~mv2.jpg",
        },
      ],
    },
    {
        title: "Март",
        content: "Details for main dropdown 1",
        image: "https://via.placeholder.com/300",
        subDropdowns: [
          
        ],
      },
      {
        title: "Апрель",
        content: "Details for main dropdown 1",
        image: "https://via.placeholder.com/300",
        subDropdowns: [
          
        ],
      }
    // Add more main dropdowns as needed
  ];

  const [dropdown, setDropdown] = useState(null); // Track which dropdown is open
  const [expand, setExpand] = useState([false, false, false, false]); // For internal expand sections
  const [subDropdown, setSubDropdown] = useState([false, false, false, false]); // For 4 internal dropdowns

  // Function to toggle the main dropdown
  const toggleDropdown = (index) => {
    if (dropdown === index) {
      setDropdown(null);
      setSubDropdown([false, false, false, false]); // Close all inner dropdowns
    } else {
      setDropdown(index);
    }
  };

  // Function to toggle the internal expand section
  const toggleExpand = (index) => {
    setExpand(expand.map((item, idx) => (idx === index ? !item : item)));
  };

  // Function to toggle sub-dropdown sections
  const toggleSubDropdown = (index) => {
    setSubDropdown(subDropdown.map((item, idx) => (idx === index ? !item : item)));
  };

  return (
    <section className="course-program" id="program">
      <h2 className="course-heading">ПРОГРАММА ПРЕКУРСА</h2>
      <div className="course-sub-header-content">
        <div className="course-conunter"><h1>12</h1><h4>ВЕБИНАРОВ</h4></div>
        <div className="course-conunter"><h1>10</h1><h4>ЭКСПЕРТОВ</h4></div>
        <div className="course-conunter"><h1>3</h1><h4>МЕСЯЦА</h4></div>
      </div>

      <div className="box-container">
        {mainDropdownData.map((dropdownItem, idx) => (
          <div className="div-box" key={idx} onClick={() => toggleDropdown(idx)}>
            <div className="div-header">
              <div className="left-side">
                <h3>{dropdownItem.title}</h3>
              </div>
              <div className="right-side">
                <FaAngleUp
                  className={`arrow-icon ${dropdown === idx ? "rotate" : ""}`}
                />
              </div>
            </div>

            {dropdown === idx && (
              <div className="dropdown-content">
                {dropdownItem.subDropdowns.map((subDropdownItem, subIdx) => (
                  <div
                    className="sub-dropdown"
                    key={subIdx}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent closing the parent dropdown
                      toggleSubDropdown(subIdx);
                    }}
                  >
                    <div className="sub-header">
                      <div className="sub-left">
                        <h4>{subDropdownItem.subHeading}</h4>
                      </div>
                      <div className="sub-right">
                        <p>{subDropdownItem.date}</p>
                        <FaAngleUp
                          className={`arrow-icon ${subDropdown[subIdx] ? "rotate" : ""}`}
                        />
                      </div>
                    </div>

                    {subDropdown[subIdx] && (
                      <div className="sub-dropdown-content">
                        <div className="sub-content">
                          <div className="sub-content-left">
                            <img
                              src={subDropdownItem.image}
                              alt={subDropdownItem.subHeading}
                            />
                          </div>
                          <div className="sub-content-right">
                            <h1>{subDropdownItem.name}</h1>
                            <p>{subDropdownItem.details}</p>
                          </div>
                        </div>

                        {expand[subIdx] && (
                          <div className="expand-content">
                            <h5>Expanded Content</h5>
                            <p>Additional details for expanded item {subIdx + 1}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="regsiter-btn-container"><button className="registration-button" onClick={() => window.open("https://ui.eafo.info", "_blank")}>РЕГИСТАРАЦИЯ</button></div>
    </section>
  );
};

export default CourseProgram;
