import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

function useReveal(ref) {
    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ty-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        const els = ref.current.querySelectorAll('.ty-reveal');
        els.forEach((el) => observer.observe(el));
        return () => els.forEach((el) => observer.unobserve(el));
    }, []);
}

const steps = [
    {
        number: '01',
        text: "We're reviewing your answers right now to build your custom game plan.",
    },
    {
        number: '02',
        text: "You'll hear from us within 24 hours with a personalized recommendation.",
    },
    {
        number: '03',
        text: "No pressure, no hard pitch. Just a clear look at what's possible for your business.",
    },
];

export default function ThankYou() {
    const pageRef = useRef(null);
    useReveal(pageRef);

    return (
        <div className="ty-page" ref={pageRef}>
            {/* Subtle top accent */}
            <div className="ty-top-bar" />

            <div className="ty-container">

                {/* ── Hero ── */}
                <section className="ty-hero ty-reveal ty-d1">
                    <div className="ty-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                            strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>

                    <h1 className="ty-headline">
                        You're All Set.<br />We've Got Your Results.
                    </h1>

                    <p className="ty-subtext">
                        Thanks for taking the time to answer those questions honestly.
                        That tells us a lot about where your business is right now —
                        and more importantly, where it can go.
                    </p>
                </section>

                {/* ── Photo ── */}
                <div className="ty-photo-block ty-reveal ty-d2">
                    <div className="ty-photo-wrap">
                        <img
                            src="/images/michael.jpg"
                            alt="Michael"
                            className="ty-photo"
                        />
                    </div>
                    <p className="ty-name">Michael</p>
                    <p className="ty-title">Founder, Tiberius AI</p>
                </div>

                {/* ── Divider ── */}
                <div className="ty-divider ty-reveal ty-d3" />

                {/* ── What Happens Next ── */}
                <section className="ty-next ty-reveal ty-d3">
                    <h2 className="ty-next-heading">Here's What Happens Next</h2>

                    <ol className="ty-steps">
                        {steps.map((step) => (
                            <li key={step.number} className="ty-step ty-reveal ty-d4">
                                <span className="ty-step-num">{step.number}</span>
                                <p className="ty-step-text">{step.text}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ── Divider ── */}
                <div className="ty-divider ty-reveal ty-d4" />

                {/* ── Closing ── */}
                <section className="ty-closing ty-reveal ty-d5">
                    <p className="ty-closing-text">
                        In the meantime, if you want to see what we're building —
                        check out what Tiberius AI can do.
                    </p>
                    <Link to="/" className="ty-cta">
                        Explore Tiberius AI →
                    </Link>
                </section>

            </div>

            {/* Footer strip */}
            <footer className="ty-footer">
                <p>© {new Date().getFullYear()} Tiberius AI. All rights reserved.</p>
            </footer>
        </div>
    );
}
