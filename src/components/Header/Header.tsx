import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/', id: 'home' },
    { name: 'About', to: '/about', id: 'about' },
    { name: 'Services', to: '/services', id: 'services' },
    { name: 'Doctors', to: '/doctors', id: 'doctors' },
    { name: 'Reviews', to: '/testimonials', id: 'testimonials' },
    { name: 'Contact', to: '/contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Add background shadow after scroll
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          {/* Custom Medical Cross + Logo */}
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 10.5H13.5V5C13.5 4.17157 12.8284 3.5 12 3.5C11.1716 3.5 10.5 4.17157 10.5 5V10.5H5C4.17157 10.5 3.5 11.1716 3.5 12C3.5 12.8284 4.17157 13.5 5 13.5H10.5V19C10.5 19.8284 11.1716 20.5 12 20.5C12.8284 20.5 13.5 19.8284 13.5 19V13.5H19C19.8284 13.5 20.5 12.8284 20.5 12C20.5 11.1716 19.8284 10.5 19 10.5Z" fill="currentColor"/>
          </svg>
          Medi<span>Care</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className={`nav-links-wrapper ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-cta-mobile">
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Book Now</Link>
          </div>
        </nav>

        {/* Header Right Elements */}
        <div className="header-right">
          <Link to="/contact" className="btn btn-primary btn-book-desktop">Book Appointment</Link>
          
          {/* Hamburger Icon */}
          <button 
            className={`menu-toggle ${isOpen ? 'menu-active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
