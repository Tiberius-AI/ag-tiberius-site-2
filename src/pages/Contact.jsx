import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="contact-page-container">
            <div className="contact-page-content">

                {/* Page Header */}
                <div className="contact-header">
                    <span className="contact-label">GET IN TOUCH</span>
                    <h1 className="contact-title">Let's Talk About Your Business</h1>
                    <p className="contact-subtitle">
                        Whether you have a question, want to see a demo, or you're ready to get started — we'd love to hear from you.
                    </p>
                </div>

                {/* Two-Column Layout */}
                <div className="contact-grid">

                    {/* LEFT COLUMN: Form */}
                    <div className="contact-left-col">
                        <div className="contact-form-card">
                            {isSubmitted ? (
                                <div className="contact-success-state fade-in">
                                    <div className="success-icon">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="#C8956C" strokeWidth="2" fill="rgba(200, 149, 108, 0.1)" />
                                            <path d="M8 12.5L11 15.5L16 9.5" stroke="#C8956C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3>Thanks! We'll be in touch within 24 hours.</h3>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input type="text" id="fullName" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="businessName">Business Name (optional)</label>
                                        <input type="text" id="businessName" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">How Can We Help?</label>
                                        <textarea id="message" required></textarea>
                                    </div>

                                    <div className="form-checkbox-group">
                                        <label className="checkbox-container">
                                            <input type="checkbox" required />
                                            <span className="checkmark"></span>
                                        </label>
                                        <p className="checkbox-label-text">
                                            By providing your phone number, you consent to receive SMS messages from Tiberius AI. Message frequency varies. Message & data rates may apply. Reply STOP to opt-out. Reply HELP for help. See our <Link to="/privacy" className="privacy-link">Privacy Policy</Link>.
                                        </p>
                                    </div>

                                    <button type="submit" className="contact-submit-btn">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Contact Info & Demo */}
                    <div className="contact-right-col">

                        {/* Section A: Direct Contact Card */}
                        <div className="contact-info-card">
                            <h2 className="info-heading">Prefer to reach out directly?</h2>

                            <div className="info-row">
                                <svg className="info-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <a href="tel:+18302154371" className="info-link">(830) 215-4371</a>
                            </div>

                            <div className="info-row email-row">
                                <svg className="info-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <a href="mailto:support@tiberius.ai" className="info-link">support@tiberius.ai</a>
                            </div>

                            <p className="info-note">
                                We typically respond within a few hours during business hours.
                            </p>
                        </div>

                        {/* Section B: AI Agent Demo Card */}
                        <div className="ai-demo-card">
                            <span className="demo-label">LIVE DEMO</span>
                            <h3 className="demo-heading">Try Our AI Agent</h3>
                            <p className="demo-desc">
                                See what an AI assistant can do for your business. Ask it anything — it's the same technology we'll set up for you.
                            </p>

                            <div className="demo-embed-container">
                                <span className="demo-placeholder-text">AI Agent Widget Embed</span>
                                {/* Replace this placeholder div with your actual AI chat widget embed code */}
                            </div>

                            <p className="demo-note">
                                This is a live AI agent — not a chatbot script.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
