import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import About from '../components/About/About';
import '../components/Doctors/Doctors.css';
import './Pages.css';
import './Home.css';

// Local Image Imports
import cardiologyImg from '../assets/images/cardiology.jpg';
import neurologyImg from '../assets/images/neurology.jpg';
import pediatricsImg from '../assets/images/pediatrics.jpg';
import johnsonImg from '../assets/images/johnson.jpg';
import chenImg from '../assets/images/chen.jpg';
import patelImg from '../assets/images/patel.jpg';

const Home: React.FC = () => {
  // Teaser Services data (3 most popular specialties)
  const serviceTeasers = [
    {
      image: cardiologyImg,
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnostic screenings, treatments, and advanced preventive therapies.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    {
      image: neurologyImg,
      title: 'Neurology',
      description: 'Expert care for complicated clinical conditions of the brain, spinal cord, and central nervous system.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z"></path>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"></path>
        </svg>
      )
    },
    {
      image: pediatricsImg,
      title: 'Pediatrics',
      description: 'Specialized healthcare and supportive pediatric services for infants, growing children, and teenagers.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
          <path d="M12 2v10"></path>
          <path d="m18 17-6-5-6 5"></path>
          <path d="M12 12v9"></path>
        </svg>
      )
    }
  ];

  // Teaser Doctors data (3 top specialists)
  const doctorTeasers = [
    {
      image: johnsonImg,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '12+ Years Experience'
    },
    {
      image: chenImg,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: '15+ Years Experience'
    },
    {
      image: patelImg,
      name: 'Dr. Emily Patel',
      specialty: 'Pediatrician',
      experience: '10+ Years Experience'
    }
  ];

  // Whys data
  const chooseReasons = [
    {
      title: 'Global Clinical Accreditations',
      desc: 'Recognized internationally for maintaining outstanding medical safety, hygiene, and ethical protocols.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#goldGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="premium-why-icon">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" />
        </svg>
      ),
      typeClass: 'why-card-gold'
    },
    {
      title: 'Next-Gen Robotic Surgery',
      desc: 'Utilizing automated computer-guided machinery to execute minimally invasive surgical diagnostics.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#tealGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="premium-why-icon">
          <defs>
            <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      ),
      typeClass: 'why-card-teal'
    },
    {
      title: 'Comfortable VIP Recovery Suites',
      desc: 'Private rooms equipped with complete medical monitoring, smart climate systems, and inpatient comforts.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#purpleGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="premium-why-icon">
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path d="M2 4v16" />
          <path d="M22 9v11" />
          <path d="M2 17h20" />
          <path d="M2 13h18V9" />
          <path d="M5 10h4a1 1 0 0 1 1 1v2H4v-2a1 1 0 0 1 1-1z" />
          <path d="M15 3.5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" stroke="none" />
          <path d="M9 2.5l0.7 1.5 1.5 0.7-1.5 0.7-0.7 1.5-0.7-1.5-1.5-0.7 1.5-0.7z" fill="currentColor" stroke="none" />
        </svg>
      ),
      typeClass: 'why-card-purple'
    }
  ];

  return (
    <div className="home-page-wrapper">
      {/* 1. Hero Block */}
      <Hero />

      {/* 2. Overlapping Features Cards */}
      <Features />

      {/* 3. Detailed About Us Overview */}
      <About />

      {/* 4. Specialties Showcase Teaser */}
      <section className="section home-section bg-secondary-color">
        <div className="container">
          <div className="section-head">
            <span>Specialties Preview</span>
            <h2>Our Primary Care Services</h2>
            <p>Providing outstanding surgical and medical attention across a wide variety of medical categories.</p>
          </div>

          <div className="services-grid home-services-grid">
            {serviceTeasers.map((service, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-img-wrapper">
                  <img src={service.image} alt={service.title} className="service-img" />
                </div>
                <div className="service-body">
                  <div className="service-icon-floating">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="service-link">
                    Explore Details
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="home-teaser-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px'}}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Infographic: Why Choose Medicare */}
      <section className="section home-section why-choose-section">
        {/* Visual blurred particles for high-end look */}
        <div className="section-glow-left"></div>
        <div className="section-glow-right"></div>
        
        <div className="container">
          <div className="section-head">
            <span>Why Choose Us</span>
            <h2>Advancing Clinical Frontiers</h2>
            <p>What sets Medicare Hospital apart as the leading smart healthcare center in the region.</p>
          </div>
          
          <div className="why-grid">
            {chooseReasons.map((reason, idx) => (
              <div className={`why-card ${reason.typeClass}`} key={idx}>
                <div className="why-icon-badge">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Medical Staff Teaser */}
      <section className="section home-section bg-secondary-color">
        <div className="container">
          <div className="section-head">
            <span>Specialists Preview</span>
            <h2>Meet Our Lead Physicians</h2>
            <p>Board-certified medical practitioners and surgeons dedicated to custom clinical treatments.</p>
          </div>

          <div className="doctors-grid home-doctors-grid">
            {doctorTeasers.map((doctor, idx) => (
              <div className="doctor-card" key={idx}>
                <div className="doctor-img-wrapper">
                  <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                  <div className="doctor-social-overlay">
                    <div className="doctor-socials">
                      <Link to="/contact" className="doctor-social-icon" aria-label="Book appointment">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="specialty">{doctor.specialty}</p>
                  <p className="experience">{doctor.experience}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="home-teaser-cta">
            <Link to="/doctors" className="btn btn-primary">
              Meet Our Specialist Team
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px'}}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Bottom Booking CTA Banner */}
      <section className="section booking-banner-section">
        <div className="container">
          <div className="booking-banner-card">
            <div className="booking-banner-glow"></div>
            <div className="booking-banner-content">
              <h2>Experience World-Class Clinical Care</h2>
              <p>
                Schedule an appointment with our specialist physicians online today, or reach out directly to our 24/7 clinical hotline.
              </p>
              <div className="booking-banner-buttons">
                <Link to="/contact" className="btn btn-white-btn">
                  Book Online Appointment
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px'}}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <a href="tel:+15551234567" className="btn btn-outline-banner">
                  Emergency Line: +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
