import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      {/* Dynamic particles or shape accents */}
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="pulse"></span>
            24/7 Compassionate Medical Services
          </span>
          <h1>Your Health is Our Top Priority</h1>
          <p>
            Compassionate care backed by world-class medical expertise. We are committed to providing exceptional healthcare services for you and your family, 24 hours a day, 7 days a week.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-lg">
              Book Appointment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#services" className="btn btn-outline btn-lg">
              Our Services
            </a>
          </div>
          
          {/* Quick stats inline in Hero for high visual impact */}
          <div className="hero-stats">
            <div className="hero-stat-item">
              <strong>99%</strong>
              <span>Recovery Rate</span>
            </div>
            <div className="hero-stat-item">
              <strong>24/7</strong>
              <span>Emergency Services</span>
            </div>
            <div className="hero-stat-item">
              <strong>100%</strong>
              <span>Expert Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
