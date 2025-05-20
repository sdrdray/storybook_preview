import React, { useState } from 'react';
import ViewToggle from './ViewToggle';
import './ViewToggle.css';

interface DummyWebsiteProps {
  initialMode?: 'light' | 'dark';
}

const DummyWebsite: React.FC<DummyWebsiteProps> = ({ initialMode = 'light' }) => {
  const [isDark, setIsDark] = useState(initialMode === 'dark');

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`dummy-website ${isDark ? 'dark-mode' : 'light-mode'}`}>
      <header className="website-header">
        <h1>Dummy Test Website</h1>
        <ViewToggle isDark={isDark} onToggle={handleToggle} />
      </header>

      <nav className="website-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="website-content">
        <section className="hero-section">
          <h2>Welcome to Our Platform</h2>
          <p>This is a dummy website showcasing the ViewToggle component in action.</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Amazing feature description goes here.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Another great feature description.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>One more fantastic feature.</p>
          </div>
        </section>
      </main>

      <footer className="website-footer">
        <p>&copy; 2024 My Awesome Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DummyWebsite; 