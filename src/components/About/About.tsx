import React from 'react';
import './About.css';

// Local Image Imports
import facilityImg from '../../assets/images/facility.jpg';

const About: React.FC = () => {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        {/* Left Side: Visual representation with floating shapes */}
        <div className="about-visual">
          <div className="about-img-container">
            <img 
              src={facilityImg} 
              alt="MediCare Modern Clinical Facility" 
              className="about-main-img" 
            />
            
            {/* Visual badge */}
            <div className="about-badge">
              <strong className="badge-year">25+</strong>
              <span className="badge-text">Years of Medical Excellence</span>
            </div>
          </div>
          
          <div className="visual-shape visual-shape-teal"></div>
          <div className="visual-shape visual-shape-coral"></div>
        </div>

        {/* Right Side: Textual details and statistics */}
        <div className="about-content">
          <div className="content-badge">About MediCare</div>
          <h2>Trusted Healthcare for Over 25 Years</h2>
          <p className="lead-text">
            MediCare Hospital has been at the forefront of clinical excellence, serving our community with professional dedication, advanced medical technology, and a strictly patient-first approach.
          </p>
          <p className="body-text">
            Our multidisciplinary medical team collaborates seamlessly to deliver highly personalized treatment plans. We address every aspect of your wellbeing with compassion, diligence, and precision.
          </p>
          
          {/* List of features */}
          <ul className="about-checklist">
            <li>
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              World-class diagnostic & surgical facilities
            </li>
            <li>
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Board-certified specialists across 20+ disciplines
            </li>
            <li>
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              24/7 dedicated emergency & critical care units
            </li>
          </ul>

          {/* Stats Grid */}
          <div className="about-stats">
            <div className="stat-card">
              <h3>150+</h3>
              <p>Expert Doctors</p>
            </div>
            <div className="stat-card">
              <h3>50k+</h3>
              <p>Happy Patients</p>
            </div>
            <div className="stat-card">
              <h3>25+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
