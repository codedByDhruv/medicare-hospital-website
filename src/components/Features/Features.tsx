import React from 'react';
import './Features.css';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  ctaText: string;
  href: string;
}

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#grad-fac)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="grad-fac" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
      ),
      title: 'Modern Facilities',
      description: 'State-of-the-art medical equipment and highly comfortable patient suites.',
      colorClass: 'fac',
      ctaText: 'Explore Facility',
      href: '#about'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#grad-emerg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="grad-emerg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
          </defs>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      title: '24/7 Emergency',
      description: 'Round-the-clock rapid emergency assistance whenever and wherever you need.',
      colorClass: 'emerg',
      ctaText: 'Get Urgent Care',
      href: '#contact'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#grad-doc)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="grad-doc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
      ),
      title: 'Expert Doctors',
      description: 'Board-certified healthcare specialists across diverse medical disciplines.',
      colorClass: 'doc',
      ctaText: 'Meet Specialists',
      href: '#doctors'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="url(#grad-pharm)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="grad-pharm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#5b21b6" />
            </linearGradient>
          </defs>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m8.5 8.5 7 7"></path>
          <path d="M12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
          <path d="M12 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
        </svg>
      ),
      title: 'On-site Pharmacy',
      description: 'Fully stocked hospital pharmacy providing affordable medications quickly.',
      colorClass: 'pharm',
      ctaText: 'Order Medication',
      href: '#contact'
    }
  ];

  return (
    <section className="section features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div className={`feature-card ${feature.colorClass}`} key={idx}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              
              {/* Premium Inline CTA Link inside Card */}
              <a href={feature.href} className="feature-card-link">
                {feature.ctaText}
                <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              
              <div className="feature-card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
