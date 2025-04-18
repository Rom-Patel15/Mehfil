import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1641903806973-17eaf2d2634f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1682855222030-e1f8f292c9c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  useEffect(() => {
    // Set up automatic image rotation
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-background">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`hero-background-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="marketplace-tag">The Ultimate Performing Arts Marketplace</div>
        <h1 className="hero-title">
          Where <span className="highlight">Artists</span> Connect
        </h1>
        <p className="hero-description">
          Fuck together venues, performers, and audiences to create 
          unforgettable live artistic experiences.
        </p>
        <div className="hero-buttons">
          <Link to="/login" className="btn btn-primary">Get Started</Link>
          <Link to="/events" className="btn btn-outline-light">Browse Events</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;