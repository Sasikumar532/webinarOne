import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi'; // Import the FiX close icon
import './FacultySection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FacultySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const facultyMembers = [
    {
      name: "ДРУЙ Александр Евгеньевич",
      description: "к.м.н., Врач клинической лабораторной диагностики, Москва, Российская Федерация",
      image: "https://static.wixstatic.com/media/df6cc5_081e86a01b2f4700a6555555d179bfc9~mv2.jpg"
    },
    {
      name: "СУБРАМАНИАН Сомасундарам",
      description: "хирург, онколог, онкопластический хирург, Москва, Российская Федерация",
      image: "https://static.wixstatic.com/media/992e52_a78fd51fffd041b7b6a9b7179cb8b5f0~mv2.jpg"
    },
    {
      name: "НОВИКОВ Сергей Николаевич",
      description: "Д.м.н., профессор, радиотерапевт, онколог, Санкт-Петербург, Российская Федерация",
      image: "https://static.wixstatic.com/media/992e52_30bf5ba06f664d6592d9757e16c38c5d~mv2.png"
    },
    {
      name: "ВАЛЬКОВ Михаил Юрьевич",
      description: "Д.м.н., профессор, радиотерапевт, онколог, Архангельск, Российская Федерация",
      image: "https://static.wixstatic.com/media/df6cc5_67e63f5548c84cd4b6ad8eebcd4d4314~mv2.jpeg"
    },
   {
      name: "КРИШНАМУРТИ Арвинд",
      description: "Профессор, врач-хирург, онколог, Ченнаи, Индия",
      image: "https://static.wixstatic.com/media/df6cc5_3c628cc4c1024204abd8b6ea9a471934~mv2.jpg"
    },
   {
      name: "ТИМАШКОВ Иван Александрович",
      description: "Рентгенолог, Москва, Российская Федерация",
      image: "https://static.wixstatic.com/media/df6cc5_a3280132f4ad41139c450be6035e57ce~mv2.jpg"
    },
   {
     name: "ГИМРАНОВ Альберт Минусагитович",
     description: "Врач-хирург, онколог, Казань, Российская Федерация",
     image: "https://static.wixstatic.com/media/992e52_d136d05b5d47424e91efb4165e123eb1~mv2.jpg"
    }, 
   {
     name: "ГУПТА Рича",
     description: "Профессор, врач-патолог, Дели, Индия",
     image: "https://static.wixstatic.com/media/e6f22e_46fbbee456f3407e93e33304188639fc~mv2.jpg"
    },
   {
     name: "ГУЗЬ Александр Олегович",
     description: "Врач-хирург, онколог, Челябинск, Российская Федерация",
     image: "https://static.wixstatic.com/media/df6cc5_d6b122f2bd844d4495faf5a602795215~mv2.jpg"
    },
   {
     name: "РАНГАРАДЖАН Венкатеш",
     description: "Профессор, радиолог, Мумбаи, Индия",
     image: "https://static.wixstatic.com/media/df6cc5_a2aba71835a742dca61d7a9dae8bf238~mv2.png"
    },
    {
     name: "НЕСТЕРОВА Альфия Ирековна",
     description: "К.м.н., онколог-химиотерапевт, Казань, Российская Федерация",
     image: "https://static.wixstatic.com/media/df6cc5_d22d72c3575748369b9fb7b7290dfb67~mv2.avif"
    }
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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 450, settings: { slidesToShow: 1 } },
    ],
  };

  const openModal = (faculty) => {
    setSelectedFaculty(faculty);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedFaculty(null);
  };

  return (
    <section className="faculty-section" id="faculty">
      <div className="faculty-container">
        <div className="faculty-text">
          <h2 className="faculty-header">ЭКСПЕРТЫ</h2>
        </div>

        <div className="faculty-carousel">
          <Slider {...settings}>
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="faculty-slide">
                <div 
                  className="faculty-card" 
                  onClick={() => openModal(faculty)}
                >
                  <div className="faculty-image-container">
                    <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                  </div>
                  <div className="faculty-info">
                    <h3 className="faculty-name">{faculty.name}</h3>
                    <p className="faculty-description">{faculty.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Modal Popup */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
          ariaHideApp={false}
        >
          {selectedFaculty && (
            <div className="modal-body">
              <button className="modal-close" onClick={closeModal}>
                <FiX size={24} />
              </button>
              <div className="modal-image-container">
                <img 
                  src={selectedFaculty.image} 
                  alt={selectedFaculty.name} 
                  className="modal-image" 
                />
              </div>
              <div className="modal-details">
                <h2 className="modal-name">{selectedFaculty.name}</h2>
                <p className="modal-description">{selectedFaculty.description}</p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default FacultySection;
