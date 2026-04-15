import React from 'react';
import './OurApproach.css';

const OurApproach = () => {
    return (
        <section className="our-approach">
            <div className="container approach-inner">
                {/* Text Content (Left on Desktop, Top on Mobile) */}
                <div className="approach-text-content">
                    <span className="approach-subtitle">Our Approach</span>
                    <h2 className="approach-title">
                        More Than a Chatbot. A Complete AI Strategy for Your Business.
                    </h2>

                    <div className="approach-body">
                        <p>
                            Most AI tools are built for everyone, which means they're optimized for no one. At Tiberius, we take a different approach. We sit down with you, learn exactly how your business works, and build an AI solution around your specific workflow, customers, and goals.
                        </p>
                        <p>
                            Whether you need a voice agent that books jobs while you're on the roof, a website that gives instant quotes from a customer photo, or a custom intake bot that fits your unique process, we build it to fit you, not the other way around.
                        </p>
                        <p>
                            The result? AI that feels like a natural extension of your business, not a bolted-on tool your team has to work around.
                        </p>
                    </div>

                    <a className="approach-cta" href="https://form.jotform.com/251756446512156" target="_blank" rel="noopener noreferrer">
                        Let's Talk About Your Business
                    </a>
                </div>

                {/* Image Content (Right on Desktop, Bottom on Mobile) */}
                <div className="approach-image-wrapper">
                    <img
                        src="https://tiberiusvision.com/wp-content/uploads/2026/02/ai-proposal-generator.jpg"
                        alt="AI Proposal Generator"
                        className="approach-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
