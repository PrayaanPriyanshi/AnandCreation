// Testimonial.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Testimonial = ({ testimonials }) => {
  const [visibleTestimonial, setVisibleTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <div className="testimonial">
      <div className="profile-image">
        <img
          src={testimonials[visibleTestimonial].image}
          alt={`face-${visibleTestimonial}`}
          style={{
            width: '80px', // Set the desired size
            height: '80px',
            borderRadius: '50%', // Make it circular
            objectFit: 'cover', // Preserve aspect ratio while cropping
          }}
        />
      </div>
      <RiDoubleQuotesL className="quote-icon" />
      <p>{testimonials[visibleTestimonial].content}</p>
      <RiDoubleQuotesR className="quote-icon" />
      <h3>{testimonials[visibleTestimonial].name}</h3>
    </div>
  );
};

Testimonial.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Testimonial;
