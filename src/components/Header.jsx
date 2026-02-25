import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-inner">
                <div className="logo-container">
                    <a href="/" className="logo-link">
                        <img
                            src="https://tiberiusvision.com/wp-content/uploads/2025/05/logo4.png"
                            alt="Tiberius AI"
                            className="header-logo"
                        />
                    </a>
                </div>

                <nav className="main-nav">
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

                <div className="header-actions">
                    <button className="cta-button primary-cta">Book a Demo</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
