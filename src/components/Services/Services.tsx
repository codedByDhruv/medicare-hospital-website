import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

// Local Image Imports
import cardiologyImg from '../../assets/images/cardiology.jpg';
import neurologyImg from '../../assets/images/neurology.jpg';
import pediatricsImg from '../../assets/images/pediatrics.jpg';
import dentalImg from '../../assets/images/dental.jpg';
import orthopedicsImg from '../../assets/images/orthopedics.jpg';
import labImg from '../../assets/images/lab.jpg';

interface ServiceItem {
  image: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      image: cardiologyImg,
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnostic screenings, treatment, and preventive therapies.',
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
    },
    {
      image: dentalImg,
      title: 'Dental Care',
      description: 'Advanced family dentistry, orthodontics, oral hygiene maintenance, and cosmetic clinical operations.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.58 1.9 6.7 4.75 8.45L8 21h8l1.25-.55C20.1 18.7 22 15.58 22 12c0-5.5-4.5-10-10-10z"></path>
          <path d="M12 6a3 3 0 0 0-3 3c0 2 1.5 3 3 5s3-3 3-5a3 3 0 0 0-3-3z"></path>
        </svg>
      )
    },
    {
      image: orthopedicsImg,
      title: 'Orthopedics',
      description: 'Treatment for complex joint and bone disorders, modern surgeries, physical rehabilitation, and sports medicine.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M12 6v14"></path>
          <path d="M8 10h8"></path>
          <path d="M6 16h12"></path>
        </svg>
      )
    },
    {
      image: labImg,
      title: 'Diagnostic Lab',
      description: 'Precise and automated laboratory screenings, accurate diagnostic reports, and quick turnaround times.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31L4.75 19.3a1 1 0 0 0 .22 1.09 1 1 0 0 0 .68.3h12.7a1 1 0 0 0 .68-.3 1 1 0 0 0 .22-1.09L14 9.31V2h-4z"></path>
          <line x1="8.5" y1="2" x2="15.5" y2="2"></line>
          <line x1="10" y1="9" x2="14" y2="9"></line>
        </svg>
      )
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <span>Our Services</span>
          <h2>Comprehensive Medical Care</h2>
          <p>
            From routine pediatric checkups and family dentistry to advanced diagnostic laboratory testings and cardiology operations.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
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
                <Link to="/contact" className="service-link">
                  Learn More
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
