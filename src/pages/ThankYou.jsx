import React from 'react';
import './ThankYou.css';

export default function ThankYou() {
    return (
        <main className="ty-page">
            <div className="container ty-inner">

                {/* Left — text */}
                <div className="ty-content">
                    <div className="ty-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>

                    <h1 className="ty-headline">
                        You're All Set.<br />
                        We've Got Your Results.
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
                    <img
                        src="/images/michael.jpg"
                        alt="Michael, Founder of Tiberius AI"
                        className="ty-image"
                    />
                </div>

            </div>
        </main>
    );
}
