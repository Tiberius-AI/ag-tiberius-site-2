import React, { useEffect, useRef, useState } from 'react';
import './ProposalRace.css';

const ProposalRace = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    // Single trigger
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="proposal-race-section" ref={sectionRef}>
            <div className="container proposal-race-inner">
                {/* LEFT COLUMN: Animation */}
                <div className={`race-animation-col ${inView ? 'is-animating' : ''}`}>
                    <div className="race-container">

                        {/* TOP TRACK: Competitor */}
                        <div className="track competitor-track">
                            <h3 className="track-title">YOUR COMPETITOR</h3>
                            <div className="timeline-line"></div>

                            <div className="timeline-events">
                                <div className="event c-event-1">
                                    <div className="node"></div>
                                    <div className="event-content">
                                        <span className="time">Day 1</span>
                                        <div className="event-desc">
                                            <svg className="event-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            Gets the call
                                        </div>
                                    </div>
                                </div>
                                <div className="event c-event-2">
                                    <div className="node"></div>
                                    <div className="event-content">
                                        <span className="time">Day 1 (11 PM)</span>
                                        <div className="event-desc">
                                            <svg className="event-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                            Starts working on proposal
                                        </div>
                                    </div>
                                </div>
                                <div className="event c-event-3">
                                    <div className="node"></div>
                                    <div className="event-content">
                                        <span className="time">Day 2</span>
                                        <div className="event-desc">Still writing... copy-pasting from the last bid</div>
                                    </div>
                                </div>
                                <div className="event c-event-4">
                                    <div className="node"></div>
                                    <div className="event-content">
                                        <span className="time">Day 3</span>
                                        <div className="event-desc">Finally sends proposal</div>
                                    </div>
                                </div>
                                <div className="event c-event-5 lost-badge">
                                    Too late. Job's already gone.
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM TRACK: You */}
                        <div className="track you-track">
                            <h3 className="track-title you-title">YOU + BID ASSASSIN</h3>
                            <div className="timeline-line you-line">
                                <div className="timeline-progress"></div>
                            </div>

                            <div className="timeline-events">
                                <div className="event y-event-1">
                                    <div className="node you-node"></div>
                                    <div className="event-content">
                                        <span className="time">0:00</span>
                                        <div className="event-desc">Call comes in</div>
                                    </div>
                                </div>
                                <div className="event y-event-2">
                                    <div className="node you-node"></div>
                                    <div className="event-content">
                                        <span className="time">0:30</span>
                                        <div className="event-desc">Open app, enter job details</div>
                                    </div>
                                </div>
                                <div className="event y-event-3">
                                    <div className="node you-node"></div>
                                    <div className="event-content">
                                        <span className="time">1:00</span>
                                        <div className="event-desc">AI generates your proposal</div>
                                        <div className="mini-document">
                                            <div className="doc-logo"></div>
                                            <div className="doc-header"></div>
                                            <div className="doc-line doc-line-1"></div>
                                            <div className="doc-line doc-line-2"></div>
                                            <div className="doc-total"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event y-event-4">
                                    <div className="node you-node"></div>
                                    <div className="event-content">
                                        <span className="time">1:30</span>
                                        <div className="event-desc">Review & send</div>
                                    </div>
                                </div>
                                <div className="event y-event-5">
                                    <div className="node you-node"></div>
                                    <div className="event-content">
                                        <span className="time">2:00</span>
                                        <div className="event-desc success">
                                            <svg className="event-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            Proposal delivered.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notifications */}
                            <div className="notifications-container">
                                <div className="notification n1">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    Viewed by client ✓
                                </div>
                                <div className="notification n2">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    Opened 3 times ✓
                                </div>
                                <div className="notification n3 win-badge">
                                    Proposal Accepted — $4,200/mo
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="race-summary">
                            Your competitor: <strong>3 days</strong>. You: <strong>2 minutes</strong>.
                        </div>

                    </div>
                </div>

                {/* RIGHT COLUMN: Copy */}
                <div className="race-copy-col">
                    <span className="section-label">WIN MORE BIDS</span>
                    <h2 className="section-headline">Send Proposals in Minutes. Not Days.</h2>
                    <p className="section-body">
                        While your competitor is still copy-pasting from last month's bid at 11 PM, your proposal is already in the client's inbox — polished, priced right, and professionally branded. Bid Assassin uses AI to generate winning proposals in minutes from a few job details. Then it tracks opens, automates follow-ups, and shows you exactly when the client is ready to say yes.
                    </p>

                    <ul className="feature-checklist">
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            AI-generated proposals from basic job details
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Your branding, your logo, your pricing
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Know the instant a client opens your bid
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Automated follow-ups that close deals
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Competitive pricing intelligence for your market
                        </li>
                    </ul>

                    <a className="cta-button primary-cta race-cta" href="https://form.jotform.com/251756446512156" target="_blank" rel="noopener noreferrer">See Bid Assassin in Action</a>
                    <p className="demo-note"><i>Watch a 3-minute demo</i></p>
                </div>
            </div>
        </section>
    );
};

export default ProposalRace;
