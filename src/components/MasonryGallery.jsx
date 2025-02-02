import React, { useState, Suspense } from "react";
import { FaTimes } from "react-icons/fa"; // Import close icon
import "./MasonryGallery.css";

// Lazy load the image component
const LazyImage = React.lazy(() => import("./LazyImage"));

const MasonryGallery = () => {
  const imagePaths = [];
  for (let i = 1; i <= 35; i++) {
    imagePaths.push(`src/assets/eafo_gallery/eafo_gallery_${i}.jpg`);
  }

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
    return imagePaths.slice(startIndex, startIndex + imagesPerRow);
  };

  return (
    <section className="gallery-section">
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
