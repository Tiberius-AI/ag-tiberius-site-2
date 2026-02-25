import React, { useState, useEffect, useRef } from 'react';
import './RevenueImpact.css';

const industries = [
    {
        label: 'Auto Repair Shop',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="industry-icon">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
        ),
        targetRevenue: 135000,
        context: "From an average repair order of $600 and $10K in lifetime customer value — per caller you don't miss.",
    },
    {
        label: 'Roofing Contractor',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="industry-icon">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
        ),
        targetRevenue: 200000,
        context: "At $12,000+ per job, two missed leads a week adds up fast.",
    },
    {
        label: 'Junk Removal Company',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="industry-icon">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
        ),
        targetRevenue: 75000,
        context: "High volume, fast decisions. Every unanswered call is a $350 job going to the next guy on Google.",
    },
    {
        label: 'Facility Maintenance',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="industry-icon">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
            </svg>
        ),
        targetRevenue: 100000,
        context: "Property managers don't leave voicemails. They call the next contractor on their list.",
    },
    {
        label: 'Insurance Agent',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="industry-icon">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        ),
        targetRevenue: 100000,
        context: "One missed quote call = $10,000+ in lost lifetime premium revenue over a 7-year relationship.",
    }
];

const AnimatedCounter = ({ target, duration = 2000, isActive }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setCount(0);
            return;
        }

        let startTimestamp = null;
        let animationFrame = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // easeOutQuart easing function
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOut * target);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        animationFrame = requestAnimationFrame(step);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [target, duration, isActive]);

    return (
        <span className="revenue-number">
            +${count.toLocaleString()} <span className="revenue-suffix">/ year</span>
        </span>
    );
};

const RevenueImpact = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSummary, setIsSummary] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const sectionRef = useRef(null);

    // Intersection observer to start the sequence
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasStarted]);

    // Sequence timer
    useEffect(() => {
        if (!hasStarted || isSummary) return;

        const cycleDuration = 4500; // 4.5 seconds per slide

        const timer = setTimeout(() => {
            if (currentIndex < industries.length - 1) {
                setIsAnimatingOut(true);
                setTimeout(() => {
                    setCurrentIndex(prev => prev + 1);
                    setIsAnimatingOut(false);
                }, 500); // Wait for exit animation before updating content
            } else {
                setIsAnimatingOut(true);
                setTimeout(() => {
                    setIsSummary(true);
                    setIsAnimatingOut(false);
                }, 500);
            }
        }, cycleDuration);

        return () => clearTimeout(timer);
    }, [currentIndex, hasStarted, isSummary]);

    return (
        <section className="revenue-impact-section" ref={sectionRef}>
            <div className="container revenue-impact-inner">
                <div className="impact-card">
                    {isSummary ? (
                        <div className="summary-state fade-in-up">
                            <span className="summary-small-text">The average small business loses $126,000/year to missed calls.</span>
                            <h2 className="summary-large-text">What if you never missed one again?</h2>
                            <button className="summary-cta-button">Book Your Free AI Assessment</button>
                        </div>
                    ) : (
                        <div className={`cycle-state ${isAnimatingOut ? 'slide-out-up' : 'slide-in-up'}`}>
                            {industries[currentIndex] && (
                                <>
                                    <div className="industry-label">
                                        {industries[currentIndex].icon}
                                        <span>{industries[currentIndex].label}</span>
                                    </div>
                                    <AnimatedCounter
                                        target={industries[currentIndex].targetRevenue}
                                        isActive={!isAnimatingOut && hasStarted}
                                    />
                                    <p className="context-line">
                                        "{industries[currentIndex].context}"
                                    </p>
                                </>
                            )}
                        </div>
                    )}
                </div>

                <div className="source-line">
                    Based on industry averages from IIABA, Invoca, and IBISWorld research.
                </div>
            </div>
        </section>
    );
};

export default RevenueImpact;
