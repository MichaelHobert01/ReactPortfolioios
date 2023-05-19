import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Michael Hobert</h1>
        <nav className="header-navigation">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="#about">About Me</a>
            </li>
            <li className="header-nav-item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="header-nav-item">
              <a href="#contact">Contact</a>
            </li>
            <li className="header-nav-item">
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;