import React from 'react';
import './Doctors.css';

interface DoctorItem {
  image: string;
  name: string;
  specialty: string;
  experience: string;
}

const Doctors: React.FC = () => {
  const doctors: DoctorItem[] = [
    {
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '12+ Years Experience'
    },
    {
      image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=600&q=80',
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: '15+ Years Experience'
    },
    {
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
      name: 'Dr. Emily Patel',
      specialty: 'Pediatrician',
      experience: '10+ Years Experience'
    },
    {
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgeon',
      experience: '14+ Years Experience'
    }
  ];

  return (
    <section className="section doctors" id="doctors">
      <div className="container">
        <div className="section-head">
          <span>Our Team</span>
          <h2>Meet Our Specialists</h2>
          <p>
            Highly skilled, experienced, and compassionate medical doctors dedicated to providing you with the highest standard of personalized healthcare.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, idx) => (
            <div className="doctor-card" key={idx}>
              <div className="doctor-img-wrapper">
                <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                
                {/* Visual Social Hover Overlay */}
                <div className="doctor-social-overlay">
                  <div className="doctor-socials">
                    <a href="#contact" className="doctor-social-icon" aria-label="Book appointment">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </a>
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
      </div>
    </section>
  );
};

export default Doctors;
