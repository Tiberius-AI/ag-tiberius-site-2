import React, { useEffect, useRef } from 'react';
import './GrandFinale.css';

const GrandFinale = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.observe(el));

        return () => {
            animatedElements.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <section className="grand-finale-section" ref={sectionRef}>
            <div className="grand-finale-background"></div>

            <div className="grand-finale-container">
                {/* Header */}
                <div className="gf-header animate-on-scroll fade-up">
                    <span className="gf-label">THE TIBERIUS ADVANTAGE</span>
                    <h2 className="gf-headline">
                        <span className="gf-line-1">Everything Your Business Needs.</span>
                        <br />
                        <span className="gf-line-2">Nothing You Don't.</span>
                    </h2>
                </div>

                {/* 3-Column Grid */}
                <div className="gf-grid">
                    {/* Left Column */}
                    <div className="gf-column gf-left">
                        <div className="gf-bullet animate-on-scroll slide-left staggered-1">
                            <div className="gf-bullet-content">
                                <h3 className="gf-bullet-title">AI Voice Agents</h3>
                                <p className="gf-bullet-desc">Never miss a call again</p>
                            </div>
                            <div className="gf-bullet-icon">🎙️</div>
                        </div>
                        <div className="gf-bullet animate-on-scroll slide-left staggered-2">
                            <div className="gf-bullet-content">
                                <h3 className="gf-bullet-title">Talking Websites</h3>
                                <p className="gf-bullet-desc">Websites that sell for you 24/7</p>
                            </div>
                            <div className="gf-bullet-icon">🌐</div>
                        </div>
                        <div className="gf-bullet animate-on-scroll slide-left staggered-3">
                            <div className="gf-bullet-content">
                                <h3 className="gf-bullet-title">Instant Photo Quotes</h3>
                                <p className="gf-bullet-desc">Snap a pic, get a price</p>
                            </div>
                            <div className="gf-bullet-icon">📸</div>
                        </div>
                    </div>

                    {/* Center Column: Helmet */}
                    <div className="gf-column gf-center">
                        <div className="helmet-container animate-on-scroll fade-in delay-200">
                            <img
                                src="https://tiberiusvision.com/wp-content/uploads/2026/02/roman-helmet-1a.png"
                                alt="Tiberius Helmet"
                                className="helmet-rotate"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="gf-column gf-right">
                        <div className="gf-bullet animate-on-scroll slide-right staggered-1">
                            <div className="gf-bullet-icon">🤖</div>
                            <div className="gf-bullet-content">
                                <h3 className="gf-bullet-title">Custom AI Tools</h3>
                                <p className="gf-bullet-desc">Built around your business</p>
                            </div>
                        </div>
                        <div className="gf-bullet animate-on-scroll slide-right staggered-2">
                            <div className="gf-bullet-icon">🔒</div>
                            <div className="gf-bullet-content">
                                <h3 className="gf-bullet-title">Your Accounts, Your Data</h3>
                                <p className="gf-bullet-desc">We manage it — you own it</p>
                            </div>
                        </div>
                        <div className="gf-bullet animate-on-scroll slide-right staggered-3">
                            <div className="gf-bullet-icon">🚀</div>
                            <div className="gf-bullet-content">
                                <h3 className="gf-bullet-title">Graduate to Full Ownership</h3>
                                <p className="gf-bullet-desc">When you're ready to scale</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="gf-divider-container animate-on-scroll divider-grow">
                    <div className="gf-divider"></div>
                </div>

                {/* Closing Copy */}
                <div className="gf-closing animate-on-scroll fade-up delay-200">
                    <p className="gf-paragraph-1">
                        We host and manage everything for you — but key accounts like your voice agent platform are <strong>always set up in your name.</strong> Your call data and recordings are yours.
                    </p>
                    <p className="gf-paragraph-2">
                        When you're ready for full ownership — your own servers, your own codebase, custom features built to your specs — we do that too. It's a custom engagement our managed clients graduate into once they've seen the results.
                    </p>
                </div>

                {/* Pricing Badge */}
                <div className="gf-pricing-badge-container animate-on-scroll fade-up delay-300">
                    <div className="gf-pricing-badge">
                        <span className="pricing-label">One-time setup</span>
                        <span className="pricing-amount">$300</span>
                        <span className="pricing-plus">+</span>
                        <span className="pricing-amount">$197</span>
                        <span className="pricing-label">/month</span>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="gf-cta-container animate-on-scroll fade-up delay-400">
                    <button className="gf-cta-button">Get Started Now</button>
                    <p className="gf-cta-subtext">No contracts · Cancel anytime · Up and running in 48 hours</p>
                </div>
            </div>
        </section>
    );
};

export default GrandFinale;
