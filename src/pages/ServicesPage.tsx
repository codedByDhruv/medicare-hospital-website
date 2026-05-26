import React, { useState } from 'react';
import Services from '../components/Services/Services';
import './Pages.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface PackageItem {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
}

const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How do I book an appointment with a specialist?',
      answer: 'You can book an appointment by filling out the booking form on our Contact Page, calling our 24/7 registration hotline at +1 (555) 123-4567, or walking in for outpatient services.'
    },
    {
      question: 'What insurance providers does Medicare accept?',
      answer: 'We accept a wide range of national and international private insurance policies. Our accounts department handles direct billing agreements with Aetna, Blue Cross, Cigna, UnitedHealthcare, and many others.'
    },
    {
      question: 'Are diagnostic laboratory test results available online?',
      answer: 'Yes! All laboratory and radiology reports are uploaded directly to our secure Patient Portal. You will receive an SMS and email notification with access credentials once your results are signed off by the chief pathologist.'
    },
    {
      question: 'Do you offer round-the-clock emergency support?',
      answer: 'Absolutely. Medicare Hospital runs a state-of-the-art Level 1 Trauma Emergency Center 24 hours a day, 7 days a week, complete with on-call surgical specialists and rapid response ambulance services.'
    }
  ];

  const packages: PackageItem[] = [
    {
      name: 'Essential Wellness Checkup',
      price: '$199',
      features: [
        'Complete Blood Count (CBC)',
        'Lipid Profile & Glucose tests',
        'Basic ECG Screening',
        'Physician Consultation',
        'Written health summary'
      ],
      recommended: false
    },
    {
      name: 'Executive Cardiac Wellness',
      price: '$399',
      features: [
        'Cardiovascular Stress Test',
        'Pathology Diagnostic profile',
        'Echocardiogram Screening',
        'Expert Cardiologist review',
        'Custom lifestyle counseling'
      ],
      recommended: true
    },
    {
      name: 'Comprehensive Smart Screening',
      price: '$599',
      features: [
        'Advanced Genetic biomarkers',
        'Whole-body MRI assessment',
        'Multi-discipline specialist reviews',
        'Pathology & Hormone profiling',
        'Private VIP recovery room'
      ],
      recommended: false
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="page-wrapper">
      {/* Page Header Banner */}
      <div className="page-banner services-banner">
        <div className="container">
          <h1>Clinical Specialties & Services</h1>
          <p>Delivering state-of-the-art diagnostic, surgical, and therapeutic medical treatments across 20+ specialized clinical fields.</p>
        </div>
      </div>

      {/* Main services component */}
      <Services />

      {/* Wellness Packages comparison */}
      <section className="section page-section packages-section">
        <div className="container">
          <div className="section-head">
            <span>Wellness Screening</span>
            <h2>Medicare Health Packages</h2>
            <p>Comprehensive, proactive health evaluations tailored to your age, lifestyle, and clinical indicators.</p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, idx) => (
              <div className={`package-card ${pkg.recommended ? 'recommended-pkg' : ''}`} key={idx}>
                {pkg.recommended && <div className="pkg-badge">Most Popular</div>}
                <h3>{pkg.name}</h3>
                <div className="pkg-price">{pkg.price}<span>/ Full Panel</span></div>
                <ul className="pkg-features">
                  {pkg.features.map((feat, featIdx) => (
                    <li key={featIdx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="pkg-check">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`btn ${pkg.recommended ? 'btn-primary' : 'btn-secondary'} pkg-btn`}>Book Package</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="section page-section faq-section">
        <div className="container">
          <div className="section-head">
            <span>Common Queries</span>
            <h2>Frequently Asked Questions</h2>
            <p>Get instant answers regarding specialist bookings, clinical tests, insurance coverage, and inpatient guidance.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div className={`faq-card ${openFaq === idx ? 'faq-open' : ''}`} key={idx} onClick={() => toggleFaq(idx)}>
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-toggle-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
