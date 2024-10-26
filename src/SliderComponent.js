// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.css';

// Array of image URLs for the slider
const images = [
  '/images/wedding1.jpg',
  '/images/wedding2.jpg',
  '/images/wedding3.jpg',
  // Add more images as needed
];

const SliderComponent = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Wedding Slide ${index + 1}`} className="slider-image" />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
