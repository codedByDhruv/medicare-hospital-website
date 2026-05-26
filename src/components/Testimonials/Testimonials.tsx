import React from 'react';
import './Testimonials.css';

interface ReviewItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  stars: number;
}

const Testimonials: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      quote: '"The medical specialists and clinical nursing staff were incredibly kind, prompt, and professional. I felt completely safe, comfortable, and well-cared for throughout my entire recovery process."',
      name: 'Anna Roberts',
      role: 'Cardiac Patient',
      avatar: 'https://i.pravatar.cc/100?img=47',
      stars: 5
    },
    {
      quote: '"Truly a world-class clinical facility with state-of-the-art diagnostic technologies. The treatments I received were excellent and the entire staff genuinely cared about my wellbeing."',
      name: 'David Martinez',
      role: 'Orthopedic Patient',
      avatar: 'https://i.pravatar.cc/100?img=12',
      stars: 5
    },
    {
      quote: '"From initial registration to the final post-op discharge, everything was seamless. The specialists took ample time to explain my treatment options in complete, transparent detail."',
      name: 'Linda Thompson',
      role: 'Outpatient Care',
      avatar: 'https://i.pravatar.cc/100?img=32',
      stars: 5
    }
  ];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <span>Testimonials</span>
          <h2>What Our Patients Say</h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <div className="testimonial-card" key={idx}>
              {/* Star Ratings */}
              <div className="stars-wrapper">
                {Array.from({ length: review.stars }).map((_, starIdx) => (
                  <svg key={starIdx} className="star-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>

              <p className="testimonial-quote">{review.quote}</p>
              
              <div className="testimonial-author">
                <img src={review.avatar} alt={review.name} className="author-avatar" />
                <div className="author-details">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
              
              <div className="quote-mark">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
