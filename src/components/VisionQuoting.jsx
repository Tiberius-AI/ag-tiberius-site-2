import React, { useEffect, useRef, useState } from 'react';
import './VisionQuoting.css';

const VisionQuoting = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="vision-quoting-section" ref={sectionRef}>
            <div className="container vision-quoting-inner">

                {/* LEFT COLUMN: Copy */}
                <div className="vq-copy-col">
                    <span className="section-label">AI VISION QUOTING</span>
                    <h2 className="section-headline">A Photo. An Estimate. A Booked Job.</h2>
                    <p className="section-body">
                        Your customer takes a picture of their roof from the yard. Your AI analyzes it instantly, detecting damage, wear, and maintenance needs. Seconds later, they've got a ballpark estimate and a way to book an inspection. No site visit needed for first contact. No phone tag. No waiting. The job is already moving before your competitor even calls back.
                    </p>

                    <ul className="feature-checklist">
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Customer snaps a photo from their phone
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            AI detects damage, wear, and problem areas
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Instant ballpark estimate with line-item breakdown
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            One-tap scheduling for a full inspection
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="red-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Lead captured and logged to your dashboard automatically
                        </li>
                    </ul>

                    <button className="cta-button primary-cta vq-cta">See How Vision Quoting Works</button>
                </div>

                {/* RIGHT COLUMN: Phone Animation */}
                <div className={`vq-animation-col ${inView ? 'is-animating' : ''}`}>
                    <div className="vq-phone-wrapper">
                        {/* Background glow behind phone */}
                        <div className="vq-bg-glow"></div>

                        {/* Phone Mockup Frame */}
                        <div className="vq-phone-frame">
                            <div className="vq-phone-notch"></div>

                            {/* Inner Screen */}
                            <div className="vq-phone-screen">
                                {/* Base Image */}
                                <img
                                    src="https://tiberiusvision.com/wp-content/uploads/2026/02/roof-missing-shingles.jpg"
                                    alt="Roof Viewfinder"
                                    className="vq-roof-img"
                                />

                                {/* UI Overlay: Viewfinder edges */}
                                <div className="vq-viewfinder-ui">
                                    <div className="vq-corner top-left"></div>
                                    <div className="vq-corner top-right"></div>
                                    <div className="vq-corner bottom-left"></div>
                                    <div className="vq-corner bottom-right"></div>
                                </div>

                                {/* Step 1: Capture Button */}
                                <div className="vq-capture-container">
                                    <div className="vq-capture-btn">
                                        <div className="vq-capture-btn-inner"></div>
                                    </div>
                                </div>

                                {/* Shutter Flash overlay */}
                                <div className="vq-shutter-flash"></div>

                                {/* Step 2: AI Analysis / Scan Line */}
                                <div className="vq-scan-container">
                                    <div className="vq-scan-line"></div>
                                    <div className="vq-analyzing-toast">
                                        <div className="vq-spinner"></div>
                                        Analyzing roof condition...
                                    </div>
                                </div>

                                {/* Step 3: Callouts pinned to roof */}
                                <div className="vq-callouts">
                                    <div className="vq-callout c-red" style={{ top: '22%', left: '15%' }}>
                                        <div className="vq-dot"></div>
                                        <div className="vq-bubble">Missing shingles</div>
                                    </div>
                                    <div className="vq-callout c-yellow" style={{ top: '42%', right: '18%' }}>
                                        <div className="vq-dot"></div>
                                        <div className="vq-bubble">Weathered flashing</div>
                                    </div>
                                    <div className="vq-callout c-yellow" style={{ bottom: '38%', left: '25%' }}>
                                        <div className="vq-dot"></div>
                                        <div className="vq-bubble">Gutter debris buildup</div>
                                    </div>
                                    <div className="vq-callout c-green" style={{ top: '65%', left: '45%' }}>
                                        <div className="vq-dot"></div>
                                        <div className="vq-bubble">Structure: Good condition</div>
                                    </div>
                                </div>

                                {/* Step 4 & 5: Results Card */}
                                <div className="vq-results-card">
                                    {/* Phase 1: Summary Sheet */}
                                    <div className="vq-card-phase-1">
                                        <div className="vq-card-handle"></div>
                                        <h4 className="vq-card-title">
                                            Roof Condition: <span className="vq-grade">Fair</span>
                                        </h4>
                                        <div className="vq-line-items">
                                            <div className="vq-line-item"><span>Shingle repair</span><span>$800–$1,200</span></div>
                                            <div className="vq-line-item"><span>Flashing reseal</span><span>$300–$500</span></div>
                                            <div className="vq-line-item"><span>Gutter cleaning</span><span>$150–$250</span></div>
                                        </div>
                                        <div className="vq-total-row">
                                            <span>Estimated Total</span>
                                            <span className="vq-total-price">$1,250–$1,950</span>
                                        </div>
                                        <div className="vq-schedule-btn">Schedule Free Inspection</div>
                                    </div>

                                    {/* Phase 2: Confirmation Sheet */}
                                    <div className="vq-card-phase-2">
                                        <div className="vq-success-circle">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <h4 className="vq-confirm-title">Inspection Booked</h4>
                                        <p className="vq-confirm-date">Thursday, 10:00 AM</p>
                                        <p className="vq-confirm-sub">Confirmation sent to your phone</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionQuoting;
