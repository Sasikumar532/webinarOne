import React, { useState, Suspense } from "react";
import { FaTimes } from "react-icons/fa"; // Import close icon
import "./MasonryGallery.css";

// Lazy load the image component
const LazyImage = React.lazy(() => import("./LazyImage"));

const MasonryGallery = () => {
  // Replace this with the array of image URLs you've provided
  const imageLinks = [
"https://static.wixstatic.com/media/df6cc5_e3cc30a94e744a21870ac3a0aed3cb3e~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_1f17db724b8f4df3be68a259e95c1a5d~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_616c2c80ea53458b812e62095e78d981~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_dad0f2319bd54aa08854c62c19fa4fee~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_fa687055737645a8b48dc3402ab831a0~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_4aebaf6ba2e14b16a7d60700e59a4105~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_fa54fa49beb3401a8d02f2dda10a8b04~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_594b7bd37d5e45a9823c468348d63eb5~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_ac8163b3b9c14727820f286a4cca6dd0~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_741046586cfb4096991a2fd6f261a8ab~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_ba73719ed5674c848854efb19ce04fba~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_ec8bd1bd9c9844489161be8314e1ac50~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_447d5d51521a4352b552ec596ba1339e~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_00698ab23d224ae0a4c71c0d65da1a72~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_1e43f96a66464b97a1318759c9f0347d~mv2.jpeg",
"https://static.wixstatic.com/media/df6cc5_755f2f7f3c2a44a7b66b19a3ccf73461~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_2a927f43bee54048aaf42e8291d81522~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_fcedfd243b464b3cad96ae934ddb1fba~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_dc61e86141bf4b2a8f0d9c110703f9fc~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_0afeab70ffc64070a5856d339fa66c9d~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_ddd82775551d4700a89e0426a4029136~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_ca7133cb3a3c405698a5e836c9607e5f~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_1f1d1850c0ec406190546f11ce5165c6~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_357b81f9a7f3456a891f011c273c1272~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_a6fdf94af65e4e72bec14f747acd477e~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_775fb392ff6a450287c1af7c7788d2b1~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_d3105ba981c54381b3c787bd583a3133~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_3bda3587b92b4553b73be73ef56239e9~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_1c3a5514dfc1485383263cc26dc4af87~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_0b7fb952835f4a9ebff24be3481381bb~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_35eef04dd88d4c528a77c4428db57746~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_7e167442be924f83b5416b0c3775028e~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_33ce0387142746e7977937983e77f75b~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_69f66dafb07244209dbe0b5262e911ee~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_746e8aa40d6b4441870e76d1605ae9f9~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_322c55738d3344fca002402d56ec30af~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_16ec5c39fe3341a2bd8acf04b410f3d8~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_7b443f0b4119421987be113bc92fbce9~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_587d41e6eef74dbb8e36b470a9eb4b38~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_c2fb24336f764dd6bd81ea83f18386e2~mv2.jpg",
"https://static.wixstatic.com/media/df6cc5_04e188d0cd7142b5838771d1fb8ebdb4~mv2.jpg"
     ];

  const [currentImage, setCurrentImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pausedRow, setPausedRow] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to split the image array into chunks (for rows)
  const getRowImages = (rowIndex) => {
    const imagesPerRow = 12; // Adjust this number based on how many images you want per row
    const startIndex = rowIndex * imagesPerRow;
    return imageLinks.slice(startIndex, startIndex + imagesPerRow);
  };

  return (
    <section className="gallery-section" id="gallery">
      {[0, 1, 2].map((rowIndex) => (
        <div
          key={rowIndex}
          className="scroll-container"
          onMouseEnter={() => setPausedRow(rowIndex)}
          onMouseLeave={() => setPausedRow(null)}
        >
          <div
            className="image-row"
            style={{ animationPlayState: pausedRow === rowIndex ? "paused" : "running" }}
          >
            {getRowImages(rowIndex).map((image, index) => (
              <div
                key={index}
                className="image-item"
                onClick={() => openModal(image)}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage src={image} alt={`Image ${index}`} />
                </Suspense>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Image Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <FaTimes className="close-icon" onClick={closeModal} /> {/* React Icon */}
            <img src={currentImage} alt="Large view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default MasonryGallery;
