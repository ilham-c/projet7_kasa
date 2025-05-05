import React, { useState } from "react";
import "./ImageSlider.css";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image_slider">
      <button className="prev" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i> {/* Icône flèche gauche */}
      </button>
      <img
        src={images[currentIndex].url}
        alt={`Image ${currentIndex}`}
        className="slider-image"
      />
      <button className="next" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i> {/* Icône flèche droite */}
      </button>
    </div>
  );
}

export default ImageSlider;
