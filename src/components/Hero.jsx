import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-inner">
                <div className="hero-content">
                    <h1 className="hero-headline">
                        AI Solutions Built Around <span className="highlight-text">Your Business.</span>
                    </h1>
                    <p className="hero-subheadline">
                        From AI voice agents and talking websites to instant quoting and winning proposals. We build the tools that book more jobs, save you hours, and help your business grow.
                    </p>

                    <div className="hero-buttons">
                        <button className="cta-button primary-cta hero-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            Book a Demo
                        </button>
                        <button className="cta-button secondary-cta hero-btn">
                            See How It Works
                        </button>
                    </div>

                    <ul className="trust-markers">
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="check-icon">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Captures Every Lead
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="check-icon">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Integrates with Your Tools
                        </li>
                    </ul>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-shape-outer"></div>
                    <div className="hero-shape-inner"></div>
                    <img
                        src="https://tiberiusvision.com/wp-content/uploads/2026/02/Tiberius_AI_LLC.png"
                        alt="Tiberius AI Device"
                        className="hero-device-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
