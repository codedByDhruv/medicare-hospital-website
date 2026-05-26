import React, { useState } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      tempErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }

    if (formData.phone && !/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Phone number is invalid';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1800);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head">
          <span>Contact Us</span>
          <h2>Get In Touch</h2>
          <p>
            Reach out for appointments, inquiries, or emergencies. We are here to support you 24 hours a day, 7 days a week.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Information cards */}
          <div className="contact-info">
            <h3>We're Here to Help</h3>
            <p className="info-desc">
              Schedule an appointment with our specialists or get quick answers to all your healthcare concerns.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-text">
                  <h4>Our Location</h4>
                  <p>123 Health Avenue, Medical District, NY 10001</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info-text">
                  <h4>Phone Number</h4>
                  <p>+1 (555) 123-4567 — 24/7 Emergency Line</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-text">
                  <h4>Email Support</h4>
                  <p>care@medicare-hospital.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="info-text">
                  <h4>Operating Hours</h4>
                  <p>Mon - Sun: Open 24 Hours / 7 Days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form / Success Banner */}
          <div className="contact-form-wrapper">
            {submitStatus === 'success' ? (
              <div className="form-success-card">
                <div className="success-icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out to Medicare Hospital. Our healthcare coordinates will review your details and contact you via phone or email within the next 30 minutes.
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitStatus('idle')}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? 'input-error' : ''}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'input-error' : ''}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (e.g. +1...)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'input-error' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject (Optional)"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message / Booking Details..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? 'input-error' : ''}
                    disabled={isSubmitting}
                    required
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Booking Appointment...
                    </>
                  ) : (
                    'Book Appointment'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
