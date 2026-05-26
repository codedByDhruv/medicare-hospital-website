import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import './DoctorsPage.css';

// Local Image Imports
import johnsonImg from '../assets/images/johnson.jpg';
import chenImg from '../assets/images/chen.jpg';
import patelImg from '../assets/images/patel.jpg';
import wilsonImg from '../assets/images/wilson.jpg';

interface Doctor {
  image: string;
  name: string;
  specialty: string;
  department: 'Cardiology' | 'Neurology' | 'Pediatrics' | 'Orthopedics';
  experience: string;
  education: string;
  bio: string;
}

const DoctorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics'];

  const doctors: Doctor[] = [
    {
      image: johnsonImg,
      name: 'Dr. Sarah Johnson',
      specialty: 'Senior Cardiologist',
      department: 'Cardiology',
      experience: '12+ Years Experience',
      education: 'Harvard Medical School, MD',
      bio: 'Specializes in complex interventional cardiology, heart valve therapies, and chronic coronary artery disease treatments.'
    },
    {
      image: chenImg,
      name: 'Dr. Michael Chen',
      specialty: 'Chief Neurologist',
      department: 'Neurology',
      experience: '15+ Years Experience',
      education: 'Johns Hopkins University, MD',
      bio: 'Expert in cerebrovascular conditions, migraine therapies, neuro-rehabilitation, and treatment of spinal cord disorders.'
    },
    {
      image: patelImg,
      name: 'Dr. Emily Patel',
      specialty: 'Clinical Pediatrician',
      department: 'Pediatrics',
      experience: '10+ Years Experience',
      education: 'Stanford Medical School, Residency',
      bio: 'Passionate about comprehensive childhood healthcare, neonatal therapeutics, vaccination planning, and early development.'
    },
    {
      image: wilsonImg,
      name: 'Dr. James Wilson',
      specialty: 'Lead Orthopedic Surgeon',
      department: 'Orthopedics',
      experience: '14+ Years Experience',
      education: 'University of Pennsylvania, Fellowship',
      bio: 'Expert in minimally invasive joint replacements, sports injuries rehabilitation, complex fracture treatment, and arthritis care.'
    }
  ];

  // Live filter logic
  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || doc.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="page-wrapper">
      {/* Page Header Banner */}
      <div className="page-banner doctors-banner">
        <div className="container">
          <h1>Meet Our Medical Staff</h1>
          <p>Highly qualified, board-certified clinical specialists and surgeons dedicated to delivering premium, personalized treatments.</p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <section className="section page-section doctors-filter-section">
        <div className="container">
          <div className="filters-wrapper">
            {/* Search Input */}
            <div className="search-bar-container">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button className="search-clear-btn" onClick={() => setSearchTerm('')}>
                  &times;
                </button>
              )}
            </div>

            {/* Department Filters */}
            <div className="dept-filters">
              {departments.map((dept) => (
                <button
                  key={dept}
                  className={`dept-btn ${selectedDept === dept ? 'active-dept' : ''}`}
                  onClick={() => setSelectedDept(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="results-info">
            <p>Showing {filteredDoctors.length} clinical specialist{filteredDoctors.length !== 1 ? 's' : ''}</p>
          </div>

          {/* Detailed Doctors List */}
          {filteredDoctors.length > 0 ? (
            <div className="doctors-grid-detailed">
              {filteredDoctors.map((doc, idx) => (
                <div className="doctor-card-detailed" key={idx}>
                  <div className="doc-detail-visual">
                    <img src={doc.image} alt={doc.name} className="doc-detail-img" />
                    <div className="doc-detail-dept-badge">{doc.department}</div>
                  </div>
                  
                  <div className="doc-detail-info">
                    <div className="doc-detail-header">
                      <div>
                        <h2>{doc.name}</h2>
                        <span className="spec-title">{doc.specialty}</span>
                      </div>
                      <div className="doc-exp-badge">{doc.experience}</div>
                    </div>
                    
                    <p className="doc-edu">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="edu-icon">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                      </svg>
                      {doc.education}
                    </p>
                    
                    <p className="doc-bio">{doc.bio}</p>
                    
                    <div className="doc-detail-actions">
                      <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="doctors-no-results">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="no-results-icon">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              <h3>No Specialists Found</h3>
              <p>We couldn't find any doctor matching your search term. Try adjusting your filter tags or search keyword.</p>
              <button className="btn btn-primary" onClick={() => { setSearchTerm(''); setSelectedDept('All'); }}>Reset Filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;
