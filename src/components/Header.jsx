import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-inner">
                <div className="logo-container">
                    <Link to="/" className="logo-link" onClick={closeMenu}>
                        <img
                            src="https://tiberiusvision.com/wp-content/uploads/2025/05/logo4.png"
                            alt="Tiberius AI"
                            className="header-logo"
                        />
                    </Link>
                </div>

                <nav className="main-nav desktop-only">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#solutions" className="nav-link">Solutions <span className="caret">▼</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#industries" className="nav-link">Industries <span className="caret">▼</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#features" className="nav-link">Features</a>
                        </li>
                        <li className="nav-item">
                            <a href="#pricing" className="nav-link">Pricing</a>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions desktop-only">
                    <button className="cta-button primary-cta">Book a Demo</button>
                </div>

                <div className="mobile-toggle-btn" onClick={toggleMenu}>
                    <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Accordion */}
            <div className={`mobile-menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li className="mobile-nav-item">
                            <a href="#solutions" className="mobile-nav-link" onClick={closeMenu}>Solutions</a>
                        </li>
                        <li className="mobile-nav-item">
                            <a href="#industries" className="mobile-nav-link" onClick={closeMenu}>Industries</a>
                        </li>
                        <li className="mobile-nav-item">
                            <a href="#features" className="mobile-nav-link" onClick={closeMenu}>Features</a>
                        </li>
                        <li className="mobile-nav-item">
                            <a href="#pricing" className="mobile-nav-link" onClick={closeMenu}>Pricing</a>
                        </li>
                    </ul>
                    <div className="mobile-actions">
                        <button className="cta-button primary-cta" onClick={closeMenu}>Book a Demo</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
