import React, { useState } from 'react';
import '../components/Testimonials/Testimonials.css';
import './Pages.css';
import './ReviewsPage.css';

interface ReviewItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  stars: number;
}

const ReviewsPage: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>([
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
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    quote: '',
    stars: 5
  });

  const [showForm, setShowForm] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleStarClick = (rating: number) => {
    setNewReview((prev) => ({ ...prev, stars: rating }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.quote.trim()) return;

    const submittedReview: ReviewItem = {
      quote: `"${newReview.quote.trim()}"`,
      name: newReview.name.trim(),
      role: newReview.role.trim() || 'General Patient',
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(newReview.name)}`,
      stars: newReview.stars
    };

    setReviewsList((prev) => [submittedReview, ...prev]);
    setFormSuccess(true);
    setNewReview({ name: '', role: '', quote: '', stars: 5 });

    setTimeout(() => {
      setFormSuccess(false);
      setShowForm(false);
    }, 2500);
  };

  return (
    <div className="page-wrapper">
      {/* Page Header Banner */}
      <div className="page-banner reviews-banner">
        <div className="container">
          <h1>Patient Testimonials</h1>
          <p>Read real stories of healing, recovery, and exceptional medical care from patients who trusted Medicare Hospital.</p>
        </div>
      </div>

      {/* Main Reviews Listing Grid */}
      <section className="section page-section reviews-list-section">
        <div className="container">
          <div className="section-head">
            <span>Patient Feedback</span>
            <h2>Words of Recovery</h2>
            <p>Our commitment to clinical excellence is validated by the smiles and recovery journeys of our patients.</p>
          </div>

          <div className="reviews-cta-container">
            <h3>Have you recently visited Medicare Hospital?</h3>
            <p>We value your clinical feedback. Share your recovery journey to support other families in our community.</p>
            <button className="btn" onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Cancel Review' : 'Write Patient Review'}
            </button>
          </div>

          {/* Form Modal / Panel */}
          {showForm && (
            <div className="review-form-wrapper">
              {formSuccess ? (
                <div className="review-success-panel">
                  <div className="success-icon-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3>Thank you for your feedback!</h3>
                  <p>Your patient review has been submitted successfully and listed below.</p>
                </div>
              ) : (
                <form className="review-form" onSubmit={handleSubmitReview}>
                  <h3>Write A Patient Review</h3>

                  <div className="form-group-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={newReview.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="role"
                        placeholder="Patient Category (e.g. Cardiology Care)"
                        value={newReview.role}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Dynamic Stars Selector */}
                  <div className="stars-selector-group">
                    <label>Your Rating:</label>
                    <div className="stars-selector">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`selector-star ${newReview.stars >= star ? 'star-active' : ''}`}
                          onClick={() => handleStarClick(star)}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="quote"
                      placeholder="Write your recovery story or feedback here..."
                      value={newReview.quote}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit Review</button>
                </form>
              )}
            </div>
          )}

          {/* Testimonial grid linked to live state */}
          <div className="testimonials-grid reviews-page-grid">
            {reviewsList.map((review, idx) => (
              <div className="testimonial-card" key={idx}>
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
                    <path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
