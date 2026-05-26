import React from 'react';
import Contact from '../components/Contact/Contact';
import './Pages.css';

const ContactPage: React.FC = () => {
  const hotlines = [
    { department: 'General Admissions', phone: '+1 (555) 123-4500', email: 'admissions@medicare.com' },
    { department: 'Cardiology Care Department', phone: '+1 (555) 123-4511', email: 'cardio@medicare.com' },
    { department: 'Pediatric Ward & Support', phone: '+1 (555) 123-4522', email: 'kids@medicare.com' },
    { department: 'Diagnostic Laboratory Services', phone: '+1 (555) 123-4533', email: 'lab@medicare.com' }
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header Banner */}
      <div className="page-banner contact-banner">
        <div className="container">
          <h1>Get In Touch With Us</h1>
          <p>Reach out to Medicare Hospital 24/7 for appointments, clinical support, pathology reports, or emergency coordination.</p>
        </div>
      </div>

      {/* Main contact form section */}
      <Contact />

      {/* Departmental Hotlines */}
      <section className="section page-section departmental-section">
        <div className="container">
          <div className="section-head">
            <span>Direct Support</span>
            <h2>Departmental Contacts</h2>
            <p>Connect directly with our specialized hospital wings for immediate support, inquiries, or billing records.</p>
          </div>
          <div className="hotlines-grid">
            {hotlines.map((hotline, idx) => (
              <div className="hotline-card" key={idx}>
                <h3>{hotline.department}</h3>
                <div className="hotline-detail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hotline-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href={`tel:${hotline.phone}`}>{hotline.phone}</a>
                </div>
                <div className="hotline-detail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hotline-icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href={`mailto:${hotline.email}`}>{hotline.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map visualization section */}
      <section className="section page-section map-section">
        <div className="container">
          <div className="section-head">
            <span>Location Map</span>
            <h2>Find Our Facility</h2>
            <p>123 Health Avenue, Medical District, NY 10001 — Conveniently accessible via public transport with complete underground valet parking.</p>
          </div>
          
          {/* Beautiful vector Map Mockup */}
          <div className="map-mockup-wrapper">
            <div className="map-glow"></div>
            <div className="map-mockup-svg">
              <svg viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="vector-grid-map">
                {/* Background dots grid */}
                <defs>
                  <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#e2e8f0" />
                  </pattern>
                </defs>
                <rect width="1000" height="400" fill="url(#dot-grid)" rx="24" />
                
                {/* Streets paths */}
                <path d="M 0,200 L 1000,200" stroke="#cbd5e1" strokeWidth="12" strokeLinecap="round" />
                <path d="M 400,0 L 400,400" stroke="#cbd5e1" strokeWidth="12" strokeLinecap="round" />
                <path d="M 700,0 L 700,400" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
                <path d="M 150,0 L 150,400" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />

                {/* Styled park */}
                <rect x="450" y="50" width="200" height="100" fill="#d1fae5" rx="12" stroke="#a7f3d0" strokeWidth="2" />
                <text x="550" y="105" fill="#047857" fontSize="14" fontWeight="700" textAnchor="middle">Madison Clinical Park</text>

                {/* Styled hospital block */}
                <rect x="220" y="240" width="300" height="120" fill="rgba(14, 165, 164, 0.15)" rx="16" stroke="var(--primary)" strokeWidth="3" />
                <text x="370" y="295" fill="var(--primary)" fontSize="18" fontWeight="800" textAnchor="middle">MediCare Hospital</text>
                <text x="370" y="320" fill="var(--text-muted)" fontSize="12" fontWeight="600" textAnchor="middle">Main Admissions & ER Entrance</text>

                {/* Pulse Glow Location pin */}
                <g transform="translate(370, 235)">
                  <circle cx="0" cy="0" r="16" fill="rgba(244, 63, 94, 0.25)" className="pin-pulse" />
                  <circle cx="0" cy="0" r="8" fill="#f43f5e" />
                  <path d="M 0,-8 L -4,-18 A 8,8 0 0,1 4,-18 Z" fill="#f43f5e" />
                  <circle cx="0" cy="-14" r="2.5" fill="#fff" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
