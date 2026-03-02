import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* 1. Page Header */}
            <section className="about-header-section">
                <div className="about-container">
                    <span className="about-label">ABOUT US</span>
                    <h1 className="about-title">AI That Works as Hard as You Do</h1>
                    <p className="about-subtitle">
                        We build AI-powered tools for contractors and service professionals — so you can focus on the work, not the phone.
                    </p>
                </div>
            </section>

            {/* 2. The Mission */}
            <section className="about-mission-section">
                <div className="about-container">
                    <div className="mission-grid">
                        <div className="mission-text">
                            <h2>Why We Exist</h2>
                            <p>
                                Most contractors didn't get into business to sit by the phone. They got into it because they're great at what they do — roofing, remodeling, hauling, plumbing, whatever the trade. But somewhere along the way, running the business became harder than doing the work.
                            </p>
                            <p>
                                Missed calls turn into missed jobs. Leads go cold because nobody followed up fast enough. The website sits there like a digital business card that doesn't actually do anything.
                            </p>
                            <p>
                                Tiberius AI was built to fix that. We create AI-powered systems — voice agents, talking websites, instant quoting tools, and custom automations — that handle the business side so you can stay on the job site.
                            </p>
                        </div>
                        <div className="mission-photo">
                            <div className="photo-placeholder">
                                <img src="https://tiberiusvision.com/wp-content/uploads/2026/03/michaeldawne1a.jpg" alt="Michael Currie - Founder, Tiberius AI LLC" />
                            </div>
                            <div className="photo-caption">Michael Currie - Founder, Tiberius AI LLC</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Origin / Background */}
            <section className="about-origin-section">
                <div className="origin-container">
                    <h2>How We Got Here</h2>
                    <p>
                        Tiberius AI started with a simple observation: the businesses that needed AI the most were the ones least likely to ever get it. Enterprise companies had entire teams building custom tools. Small contractors and service businesses? They were stuck with overpriced software that did half the job, or nothing at all.
                    </p>
                    <p>
                        We set out to change that. Instead of building another generic SaaS platform, we took a different approach — sit down with each business, understand how they actually work, and build AI solutions tailored to them. Not templates. Not one-size-fits-all. Real tools that solve real problems.
                    </p>
                    <p>
                        What started as AI voice agents for contractors has grown into a full suite of solutions: talking websites that capture leads 24/7, photo-based instant quoting, smart follow-up systems, and custom AI tools we haven't even thought of yet — because our clients keep coming to us with new challenges, and we keep building.
                    </p>
                </div>
            </section>

            {/* 4. What Makes Us Different */}
            <section className="about-diff-section">
                <div className="diff-container">
                    <h2>What Sets Us Apart</h2>
                    <div className="diff-grid">
                        <div className="diff-card">
                            <div className="diff-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#C8956C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Built for Your Trade</h3>
                            <p>We don't sell generic software. Every system is configured around your specific business — your services, your customers, your workflow.</p>
                        </div>
                        <div className="diff-card">
                            <div className="diff-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#C8956C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Your Accounts. Your Data.</h3>
                            <p>At the managed level, we handle everything — but key accounts like your voice agent platform are set up in your name. Your call data and recordings are always yours.</p>
                        </div>
                        <div className="diff-card">
                            <div className="diff-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2v20M12 2l8 8M12 2L4 10" stroke="#C8956C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>A Path to Full Ownership</h3>
                            <p>When you're ready to scale — your own servers, your own codebase, features built to your specs — we do that too. Our managed clients graduate into ownership when the time is right.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Closing Statement */}
            <section className="about-closing-section">
                <div className="closing-container">
                    <p className="closing-text">
                        "At the end of the day, we're in this business because we believe every contractor and service professional deserves access to the same AI tools the big companies use — without the big company price tag or complexity."
                    </p>
                    <div className="closing-link-container">
                        Ready to see what we can build for you? <Link to="/contact" className="closing-link">Get in touch</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
