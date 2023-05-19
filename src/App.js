// App.js

import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <AboutMe />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
