// Contact.js

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // Validate fields, send data, etc.
    // You can customize this based on your requirements

    if (!name || !email || !message) {
      setErrorMessage('All fields are required.');
    } else {
      // Reset form fields and display success message
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage('Message sent successfully!');
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label className="contact-label" htmlFor="name">Name:</label>
            <input
              className="contact-input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contact-form-group">
            <label className="contact-label" htmlFor="email">Email:</label>
            <input
              className="contact-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact-form-group">
            <label className="contact-label" htmlFor="message">Message:</label>
            <textarea
              className="contact-input contact-textarea"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="contact-button" type="submit">Send</button>
          {errorMessage && <p className="contact-error">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
