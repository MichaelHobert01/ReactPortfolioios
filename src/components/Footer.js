// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://github.com/MichaelHobert01" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            GitHub
          </a>
          <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
          <a href="https://stackoverflow.com/users/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-stack-overflow"></i>
            Stack Overflow
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
