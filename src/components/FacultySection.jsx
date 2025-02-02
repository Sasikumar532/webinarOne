import React from 'react';
import Slider from 'react-slick';
import './FacultySection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FacultySection = () => {
  const facultyMembers = [
    {
      name: "Dr. John Doe",
      description: "Oncology Specialist, University of Medicine",
      image: "https://static.wixstatic.com/media/e6f22e_24789653f9d64ea89781ee53db831a30~mv2.png"
    },
    {
      name: "Dr. Jane Smith",
      description: "Oncopathologist, Medical Institute",
      image: "https://static.wixstatic.com/media/e6f22e_24789653f9d64ea89781ee53db831a30~mv2.png"
    },
    {
      name: "Dr. Emily Johnson",
      description: "Cancer Researcher, Health University",
      image: "https://static.wixstatic.com/media/e6f22e_24789653f9d64ea89781ee53db831a30~mv2.png"
    },
    {
      name: "Dr. Michael Brown",
      description: "Clinical Oncology Expert",
      image: "https://static.wixstatic.com/media/e6f22e_24789653f9d64ea89781ee53db831a30~mv2.png"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <div className="slick-arrow slick-prev">←</div>,
    nextArrow: <div className="slick-arrow slick-next">→</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      }
    ]
  };

  return (
    <section className="faculty-section">
      <div className="faculty-container">
        <div className="faculty-text">
          <h2 className="faculty-header">
            Более 80 экспертов международного уровня
          </h2>
          <p className="faculty-description">
            Наша команда включает более 80 ведущих международных экспертов в области онкологии и онкопатологии, которые делятся своим опытом с участниками курса.
          </p>
        </div>

        {/* Faculty Carousel */}
        <div className="faculty-carousel">
          <Slider {...settings}>
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-image-container">
                  <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                </div>
                <div className="faculty-info">
                  <h3 className="faculty-name">{faculty.name}</h3>
                  <p className="faculty-description">{faculty.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
