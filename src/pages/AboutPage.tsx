import React from 'react';
import About from '../components/About/About';
import './Pages.css';

// Local Image Imports
import sterlingImg from '../assets/images/sterling.jpg';
import vanceImg from '../assets/images/vance.jpg';
import jenkinsImg from '../assets/images/jenkins.jpg';

const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: 'Compassion First',
      desc: 'We treat every patient with the deepest respect, warmth, and individualized care, creating a supportive clinical environment.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    {
      title: 'Clinical Excellence',
      desc: 'We adhere to the highest international medical benchmarks, executing precise clinical practices and treatment guidelines.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      title: 'Medical Innovation',
      desc: 'We integrate modern research, high-tech tools, and medical discoveries to offer the best care methodologies.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: 'Absolute Integrity',
      desc: 'We maintain complete clinical transparency, medical ethical standards, and patient records confidentiality.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  const milestones = [
    { year: '1998', title: 'Founding Year', desc: 'Medicare was established with a small outpatient facility and a team of 10 dedicated clinicians.' },
    { year: '2005', title: 'Cardiology Center Expansion', desc: 'Opened our specialized high-tech Heart Care center, offering comprehensive coronary services.' },
    { year: '2015', title: 'Research & Biotech Unit', desc: 'Launched our modern clinical research center to collaborate on advanced diagnostic developments.' },
    { year: '2026', title: 'State-of-the-Art Smart Hospital', desc: 'Upgraded to a fully digital clinical infrastructure with next-gen automated diagnostic laboratories.' }
  ];

  const boardMembers = [
    {
      name: 'Dr. Evelyn Sterling',
      role: 'Chief Executive Officer',
      image: sterlingImg,
      desc: 'Healthcare administration authority with 20+ years of institutional leadership and hospital management experience.',
      linkedin: '#'
    },
    {
      name: 'Dr. Arthur Vance',
      role: 'Chief Medical Director',
      image: vanceImg,
      desc: 'Board-certified clinical leader guiding our surgical practices, pathology research programs, and ethical boards.',
      linkedin: '#'
    },
    {
      name: 'Sarah Jenkins, CNO',
      role: 'Chief Nursing Officer',
      image: jenkinsImg,
      desc: 'Dedicated to nursing excellence standards, comprehensive patient safety protocols, and clinical education.',
      linkedin: '#'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header Banner */}
      <div className="page-banner about-banner">
        <div className="container">
          <h1>About Our Hospital</h1>
          <p>World-class medical professionals, cutting-edge clinical technology, and an unwavering commitment to your health.</p>
        </div>
      </div>

      {/* Main clinical details */}
      <About />

      {/* Core Values Section */}
      <section className="section page-section values-section">
        <div className="container">
          <div className="section-head">
            <span>Our Foundation</span>
            <h2>Core Clinical Values</h2>
            <p>The ethical guidelines and medical principles that direct every patient interaction, diagnosis, and surgical operation.</p>
          </div>
          <div className="values-grid">
            {coreValues.map((value, idx) => (
              <div className="value-card" key={idx}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Timeline Section */}
      <section className="section page-section timeline-section">
        <div className="container">
          <div className="section-head">
            <span>Our Journey</span>
            <h2>Milestones of Excellence</h2>
            <p>Tracing our path from a community medical facility to a world-renowned multi-specialty smart hospital.</p>
          </div>
          <div className="timeline-grid">
            {milestones.map((milestone, idx) => (
              <div className="timeline-card" key={idx}>
                <strong className="timeline-year">{milestone.year}</strong>
                <h3>{milestone.title}</h3>
                <p>{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="section page-section board-section">
        <div className="container">
          <div className="section-head">
            <span>Leadership</span>
            <h2>Executive Hospital Board</h2>
            <p>Dedicated clinical administrators guiding Medicare towards medical leadership, research, and excellent patient care.</p>
          </div>
          <div className="board-grid">
            {boardMembers.map((member, idx) => (
              <div className="board-card" key={idx}>
                <div className="board-img-wrapper">
                  <img src={member.image} alt={member.name} className="board-img" />
                  <div className="board-card-overlay">
                    <p className="board-desc">{member.desc}</p>
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <div className="board-socials-wrapper">
                  <a href={member.linkedin} className="board-social-link" aria-label="LinkedIn Profile">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="board-linkedin-icon">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span>Connect Profile</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
