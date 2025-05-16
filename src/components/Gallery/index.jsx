import React, { useState } from "react";
import "./Gallery.css";
import arrowRight from '../../assets/arrow_right.png';
import arrowLeft from '../../assets/arrow_left.png';

function Gallery({ images, showArrows }) {
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
       {showArrows && (   
      <button className="prev" onClick={handlePrev}>
        <img src={arrowLeft} alt="previous" />
      </button>
        )}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        className="slider-image"
      />

       {showArrows && (
      <button className="next" onClick={handleNext}>
        <img src={arrowRight} alt="next" />
      </button>
        )}

         {showArrows && (
        <div className="image_counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default Gallery;
