import React, { useState, useEffect, useRef, useCallback } from "react";
import './Hero.css';

// ─── Brand colors pulled from the actual site ───────────────────
const BRAND = {
    bg: "#fafafa",
    white: "#ffffff",
    dark: "#1a1a2e",
    text: "#2d2d3a",
    textLight: "#6b6b80",
    crimson: "#b22234",
    crimsonDark: "#8b1a2b",
    crimsonLight: "#d4354a",
    gold: "#c9a84c",
    // For the orb interior glow
    orbCore: "#b22234",
    orbGlow: "#d4354a",
    orbAccent: "#ff6b6b",
};


function AIOrb({ mousePos }) {
    const offsetX = (mousePos.x - 0.5) * 24;
    const offsetY = (mousePos.y - 0.5) * 16;

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Soft ambient background wash */}
            <div
                style={{
                    position: "absolute",
                    width: "120%",
                    height: "120%",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${BRAND.crimson}08 0%, ${BRAND.crimson}03 40%, transparent 70%)`,
                    filter: "blur(40px)",
                }}
            />

            {/* Orbit container - tracks mouse */}
            <div
                style={{
                    position: "relative",
                    width: "min(380px, 60vw)",
                    height: "min(380px, 60vw)",
                    transform: `translate(${offsetX}px, ${offsetY}px)`,
                    transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
            >
                {/* Outer orbit ring 1 */}
                <div
                    style={{
                        position: "absolute",
                        inset: "-18%",
                        borderRadius: "50%",
                        border: `1px solid ${BRAND.crimson}12`,
                        animation: "orbitSpin 25s linear infinite",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "8%",
                            left: "48%",
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: BRAND.crimson,
                            boxShadow: `0 0 10px ${BRAND.crimson}60`,
                            opacity: 0.7,
                        }}
                    />
                </div>

                {/* Outer orbit ring 2 */}
                <div
                    style={{
                        position: "absolute",
                        inset: "-10%",
                        borderRadius: "50%",
                        border: `1px dashed ${BRAND.crimson}08`,
                        animation: "orbitSpin 40s linear infinite reverse",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            bottom: "12%",
                            right: "3%",
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: BRAND.gold,
                            boxShadow: `0 0 8px ${BRAND.gold}50`,
                            opacity: 0.6,
                        }}
                    />
                </div>

                {/* Pulse ring (breathing) */}
                <div
                    style={{
                        position: "absolute",
                        inset: "-4%",
                        borderRadius: "50%",
                        border: `1.5px solid ${BRAND.crimson}10`,
                        animation: "pulseRing 4s ease-in-out infinite",
                    }}
                />

                {/* Main orb */}
                <div
                    style={{
                        position: "absolute",
                        inset: "6%",
                        borderRadius: "50%",
                        background: `
              radial-gradient(circle at 38% 32%, ${BRAND.white} 0%, transparent 55%),
              radial-gradient(circle at 60% 65%, ${BRAND.crimson}80 0%, transparent 50%),
              radial-gradient(circle at 45% 50%, #ffffff 0%, #ffebeb 60%, #ffcdcd 100%)
            `,
                        boxShadow: `
              0 20px 60px ${BRAND.crimson}40,
              0 8px 30px rgba(0,0,0,0.15),
              inset 0 -15px 40px ${BRAND.crimson}20,
              inset 0 2px 20px ${BRAND.white}
            `,
                        animation: "orbBreathe 6s ease-in-out infinite",
                        overflow: "hidden",
                    }}
                >
                    {/* Interior swirl — reacts to mouse via conic-gradient rotation */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            background: `
                conic-gradient(
                  from ${180 + offsetX * 3}deg at 50% 50%,
                  transparent 0deg,
                  ${BRAND.crimson}40 60deg,
                  transparent 120deg,
                  ${BRAND.orbAccent}30 200deg,
                  transparent 280deg,
                  ${BRAND.crimson}30 350deg,
                  transparent 360deg
                )
              `,
                            animation: "orbitSpin 15s linear infinite",
                        }}
                    />

                    {/* Glass highlight */}
                    <div
                        style={{
                            position: "absolute",
                            top: "10%",
                            left: "15%",
                            width: "40%",
                            height: "28%",
                            borderRadius: "50%",
                            background: `linear-gradient(145deg, ${BRAND.white}90, ${BRAND.white}10)`,
                            filter: "blur(6px)",
                        }}
                    />

                    {/* Sound wave / pulse rings inside the orb */}
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                inset: `${28 + i * 9}%`,
                                borderRadius: "50%",
                                border: `2px solid ${BRAND.crimson}${40 - i * 10}`,
                                animation: `waveExpand 3.5s ease-in-out ${i * 0.5}s infinite`,
                            }}
                        />
                    ))}

                    {/* Center "brain" glow */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "25%",
                            height: "25%",
                            borderRadius: "50%",
                            transform: "translate(-50%, -50%)",
                            background: `radial-gradient(circle, ${BRAND.crimson} 0%, ${BRAND.crimson}80 40%, transparent 70%)`,
                            animation: "corePulse 3s ease-in-out infinite",
                        }}
                    />
                </div>

                {/* Floating data cards around the orb */}
                <div
                    style={{
                        position: "absolute",
                        top: "-5%",
                        right: "-12%",
                        background: BRAND.white,
                        borderRadius: 10,
                        padding: "10px 14px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                        border: `1px solid #f0eded`,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        animation: "floatCard 6s ease-in-out infinite",
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            width: 28,
                            height: 28,
                            borderRadius: 7,
                            background: `${BRAND.crimson}10`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 13,
                        }}
                    >
                        📞
                    </div>
                    <div>
                        <div
                            style={{
                                fontSize: 11,
                                color: BRAND.textLight,
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            Calls Handled
                        </div>
                        <div
                            style={{
                                fontSize: 16,
                                fontWeight: 700,
                                color: BRAND.dark,
                                fontFamily: "'Outfit', sans-serif",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            1,247
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        bottom: "5%",
                        left: "-15%",
                        background: BRAND.white,
                        borderRadius: 10,
                        padding: "10px 14px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                        border: `1px solid #f0eded`,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        animation: "floatCard 6s ease-in-out 2s infinite",
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            width: 28,
                            height: 28,
                            borderRadius: 7,
                            background: "#e8f5e9",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 13,
                        }}
                    >
                        ✅
                    </div>
                    <div>
                        <div
                            style={{
                                fontSize: 11,
                                color: BRAND.textLight,
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            Leads Booked
                        </div>
                        <div
                            style={{
                                fontSize: 16,
                                fontWeight: 700,
                                color: BRAND.dark,
                                fontFamily: "'Outfit', sans-serif",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            342
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        bottom: "-8%",
                        right: "5%",
                        background: BRAND.white,
                        borderRadius: 100,
                        padding: "7px 14px 7px 10px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                        border: `1px solid #f0eded`,
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        animation: "floatCard 6s ease-in-out 3.5s infinite",
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#22c55e",
                            boxShadow: "0 0 8px #22c55e80",
                            animation: "statusBlink 2s ease-in-out infinite",
                        }}
                    />
                    <span
                        style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: BRAND.text,
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        Agent Active
                    </span>
                </div>
            </div>
        </div>
    );
}


const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
    const heroRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
        });
    }, []);

    return (
        <section className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
            <div className="container hero-inner">
                <div className="hero-content">
                    <h1 className="hero-headline">
                        AI Solutions Built Around <span className="highlight-text">Your Business.</span>
                    </h1>
                    <p className="hero-subheadline">
                        From AI voice agents and talking websites to instant quoting and winning proposals. We build the tools that book more jobs, save you hours, and help your business grow.
                    </p>

                    <div className="hero-buttons">
                        <button className="cta-button primary-cta hero-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            Book a Demo
                        </button>
                        <button className="cta-button secondary-cta hero-btn">
                            See How It Works
                        </button>
                    </div>

                    <ul className="trust-markers">
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="check-icon">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Captures Every Lead
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="check-icon">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Integrates with Your Tools
                        </li>
                    </ul>
                </div>

                <div
                    className="hero-image-wrapper"
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <AIOrb mousePos={mousePos} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
