// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = () => {
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      {'>'}
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      {'<'}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const images = [
    "https://images.unsplash.com/photo-1539922980492-38f6673af8dd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kdWxhciUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D",
    "https://wallpapers.com/images/hd/purple-modular-kitchen-with-floral-design-picture-0retqs2uatdrelvi.jpg",
   "https://i.pinimg.com/736x/a1/6c/6f/a16c6f1a3eea1f6d95b96d2b9add9cac.jpg",
   
   "https://watermark.lovepik.com/photo/20211119/large/lovepik-modern-style-kitchen-effect-map-picture_500295963.jpg",
   "https://images.unsplash.com/photo-1559554704-0f74b35a8718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDR8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
    // Add more image URLs as needed
  ];
 
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
