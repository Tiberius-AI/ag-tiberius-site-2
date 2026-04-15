import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

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
    return (
        <main className="ty-page">

            {/* ── Hero: two-column ── */}
            <section className="ty-hero">
                <div className="container ty-hero-inner">

                    {/* Left — content */}
                    <div className="ty-content">
                        <div className="ty-check">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>

                        <h1 className="ty-headline">
                            You're All Set.<br />
                            We've Got<br />
                            Your Results.
                        </h1>

                        <p className="ty-para">
                            Thanks for taking the time to answer those questions honestly.
                            That tells us a lot about where your business is right now —
                            and more importantly, where it can go.
                        </p>

                        <p className="ty-byline">— Michael, Founder of Tiberius AI</p>
                    </div>

                    {/* Right — image */}
                    <div className="ty-image-col">
                        <div className="ty-image-wrap">
                            <img
                                src="/images/michael.jpg"
                                alt="Michael, Founder of Tiberius AI"
                                className="ty-image"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* ── What Happens Next ── */}
            <section className="ty-next">
                <div className="container ty-next-inner">
                    <h2 className="ty-next-heading">Here's What Happens Next</h2>
                    <ol className="ty-steps">
                        {steps.map((step) => (
                            <li key={step.number} className="ty-step">
                                <span className="ty-step-num">{step.number}</span>
                                <p className="ty-step-text">{step.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ── Closing CTA ── */}
            <section className="ty-closing">
                <div className="container ty-closing-inner">
                    <p className="ty-closing-text">
                        In the meantime, if you want to see what we're building —
                        check out what Tiberius AI can do.
                    </p>
                    <Link to="/" className="ty-cta">Explore Tiberius AI →</Link>
                </div>
            </section>

        </main>
    );
}
