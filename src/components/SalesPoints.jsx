import React from 'react';
import './SalesPoints.css';

const SalesPoints = () => {
    const points = [
        {
            title: "AI Voice Agents",
            description: "Every call answered, every lead captured, every appointment booked — even at 2 am. Your AI receptionist never clocks out.",
            icon: (
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            )
        },
        {
            title: "Talking Websites",
            description: "Your website doesn't just sit there. It talks to visitors, answers questions, and turns browsers into booked jobs.",
            icon: (
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            )
        },
        {
            title: "AI Vision Quoting",
            description: "Customers snap a photo, your AI analyzes it and delivers a ballpark estimate instantly. First contact without a site visit.",
            icon: (
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </svg>
            )
        },
        {
            title: "AI-Powered Proposals",
            description: "Generate professional, winning proposals in minutes — not hours. Built to help you close bigger deals and land more contracts.",
            icon: (
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        }
    ];

    return (
        <section className="sales-points">
            <div className="sales-points-inner">
                {points.map((point, index) => (
                    <div
                        key={index}
                        className="sales-point-card"
                        style={{ '--animation-order': index }}
                    >
                        <div className="card-accent-line"></div>
                        <div className="icon-badge">
                            <div className="icon-wrapper">
                                {point.icon}
                            </div>
                        </div>
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>

                        <div className="card-link">
                            Explore Capability
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SalesPoints;
