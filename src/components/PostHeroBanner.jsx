import React from 'react';
import './PostHeroBanner.css';

const PostHeroBanner = () => {
    return (
        <div className="post-hero-banner">
            <div className="container banner-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="banner-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="banner-text">
                    Get your business communicating smartly with a FREE AI assessment. <span className="banner-bold">Book Demo</span>
                </p>
            </div>
        </div>
    );
};

export default PostHeroBanner;
