import React from 'react';
import './ThankYou.css';

export default function ThankYou() {
    return (
        <main className="ty-page">
            <div className="container ty-inner">

                {/* Left — text */}
                <div className="ty-content">
                    <h1 className="ty-headline">You're All Set.</h1>

                    <p className="ty-para">
                        Thanks for taking a few minutes to answer those questions. It tells us
                        a lot about where things stand and what's actually going to move the
                        needle for your business.
                    </p>

                    <p className="ty-para">
                        We're putting together a personalized recommendation based on your
                        answers right now. You'll hear from us within 24 hours, and when we
                        reach out it'll be a real conversation, not a generic pitch.
                    </p>

                    <p className="ty-para">
                        In the meantime, feel free to look around and see what we're building
                        at Tiberius AI.
                    </p>

                    <p className="ty-byline">— Michael Currie, Founder, Tiberius AI LLC</p>
                </div>

                {/* Right — image */}
                <div className="ty-image-col">
                    <img
                        src="/images/michael2.jpg"
                        alt="Michael Currie, Founder of Tiberius AI"
                        className="ty-image"
                    />
                </div>

            </div>
        </main>
    );
}
