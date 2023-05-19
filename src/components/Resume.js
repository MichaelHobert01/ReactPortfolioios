// Resume.js

import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        <div className="resume-proficiencies">
          <h3 className="resume-proficiencies-title">Proficiencies</h3>
          <ul className="resume-proficiencies-list">
            <li className="resume-proficiencies-item">HTML5</li>
            <li className="resume-proficiencies-item">CSS3</li>
            <li className="resume-proficiencies-item">JavaScript</li>
            <li className="resume-proficiencies-item">React</li>
            <li className="resume-proficiencies-item">Node.js</li>
            <li className="resume-proficiencies-item">Git</li>
            <li className="resume-proficiencies-item">MYSQL and MongoDB</li>
          </ul>
        </div>
        <div className="resume-download">
          <a className="resume-download-link" href="/path/to/resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
