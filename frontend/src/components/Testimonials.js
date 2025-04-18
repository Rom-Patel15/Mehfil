import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <p className="testimonials-description">
        Join the growing community of talented artists and art enthusiasts.
      </p>
      
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="quote-icon">❝</div>
          <p className="testimonial-text">
            Mehfil revolutionized how I find gigs and connect with venue owners for my performances.
          </p>
          <div className="testimonial-author">
            <h4>Sarah Johnson</h4>
            <p>Performing Artist</p>
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="quote-icon">❝</div>
          <p className="testimonial-text">
            We've increased our cultural show attendance by 40% since joining the platform.
          </p>
          <div className="testimonial-author">
            <h4>Michael Rodriguez</h4>
            <p>Venue Manager</p>
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="quote-icon">❝</div>
          <p className="testimonial-text">
            I never miss a performance now that I can easily find and book tickets through Mehfil.
          </p>
          <div className="testimonial-author">
            <h4>David Chen</h4>
            <p>Art Enthusiast</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;