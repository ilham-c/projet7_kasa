import React, { useState } from "react";
import "./ImageSlider.css";
import arrowRight from '../../assets/arrow_right.png';
import arrowLeft from '../../assets/arrow_left.png';

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
        <img src={arrowLeft} alt="previous" />
      </button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        className="slider-image"
      />
      <button className="next" onClick={handleNext}>
        <img src={arrowRight} alt="next" />
      </button>
    </div>
  );
}

export default ImageSlider;
