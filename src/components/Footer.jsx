import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Top Area */}
                <div className="footer-top">
                    {/* Left Column: Logo & Tagline */}
                    <div className="footer-col-left">
                        <img
                            src="https://tiberiusvision.com/wp-content/uploads/2025/05/logo4.png"
                            alt="Tiberius AI Logo"
                            className="footer-logo"
                        />
                        <p className="footer-tagline">
                            AI-powered solutions for contractors and service businesses.
                        </p>
                    </div>

                    {/* Center Column: Company Links */}
                    <div className="footer-col-center">
                        <h4 className="footer-heading">Company</h4>
                        <nav className="footer-nav">
                            <a href="/">Home</a>
                            <a href="/services">Services</a>
                            <a href="/pricing">Pricing</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                        </nav>
                    </div>

                    {/* Right Column: Legal Links */}
                    <div className="footer-col-right">
                        <h4 className="footer-heading">Legal</h4>
                        <nav className="footer-nav">
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms of Service</a>
                        </nav>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-scripture">
                        <span className="scripture-text">"Whatever you do, work at it with all your heart, as working for the Lord."</span>
                        <span className="scripture-attribution">— Colossians 3:23</span>
                    </div>
                    <div className="footer-copyright">
                        © 2026 Tiberius AI LLC. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
