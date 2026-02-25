import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <span>Get Tiberius AI for your business with a FREE assessment.</span>
          <a href="#" className="call-now">CALL NOW</a>
        </div>
        <div className="top-bar-right">
          <a href="#" className="customer-login">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="login-icon">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            CUSTOMER LOGIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
