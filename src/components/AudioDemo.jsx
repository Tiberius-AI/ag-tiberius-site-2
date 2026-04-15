import React, { useState, useRef, useEffect } from 'react';
import './AudioDemo.css';

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);
    const orbRef = useRef(null);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);
    const animationFrameRef = useRef(null);
    const audioContextRef = useRef(null);
    const sourceRef = useRef(null);

    // Initialize Web Audio API on first play to avoid browser restrictions
    const initAudio = () => {
        if (!audioContextRef.current) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioContextRef.current = new AudioContext();
            analyserRef.current = audioContextRef.current.createAnalyser();

            // Connect the audio element to the analyser
            if (audioRef.current) {
                try {
                    sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
                    sourceRef.current.connect(analyserRef.current);
                    analyserRef.current.connect(audioContextRef.current.destination);
                } catch (e) {
                    console.warn("Audio Context Error (usually happens during hot reloading):", e);
                }
            }

            analyserRef.current.fftSize = 256;
            const bufferLength = analyserRef.current.frequencyBinCount;
            dataArrayRef.current = new Uint8Array(bufferLength);
        }
    };

    const togglePlay = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            initAudio();
            if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (err) {
                console.error("Audio playback failed:", err);
                setIsPlaying(false);
            }
        }
    };

    const updateProgress = () => {
        if (audioRef.current) {
            const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(currentProgress || 0);
        }
    };

    const handleScrub = (e) => {
        if (audioRef.current) {
            const bounds = e.target.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const percentage = x / bounds.width;
            audioRef.current.currentTime = percentage * audioRef.current.duration;
            setProgress(percentage * 100);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
        if (orbRef.current) {
            orbRef.current.style.transform = `scale(1)`;
            orbRef.current.style.boxShadow = `0 0 20px rgba(220, 38, 38, 0.4)`;
        }
    };

    useEffect(() => {
        const draw = () => {
            animationFrameRef.current = requestAnimationFrame(draw);

            if (isPlaying && analyserRef.current && dataArrayRef.current && orbRef.current) {
                analyserRef.current.getByteFrequencyData(dataArrayRef.current);

                // Calculate average volume
                let sum = 0;
                for (let i = 0; i < dataArrayRef.current.length; i++) {
                    sum += dataArrayRef.current[i];
                }
                const average = sum / dataArrayRef.current.length;

                // Map the average (0-255) to a scale factor (1.0 - 1.3)
                const scale = 1 + (average / 255) * 0.3;

                // Map the average to glow intensity
                const intensity = (average / 255);
                const blur = 20 + intensity * 60;
                const spread = intensity * 30;

                orbRef.current.style.transform = `scale(${scale})`;
                orbRef.current.style.boxShadow = `
                    0 0 ${blur}px ${spread}px rgba(220, 38, 38, ${0.4 + intensity * 0.4}),
                    0 0 ${blur * 2}px ${spread * 1.5}px rgba(234, 88, 12, ${0.2 + intensity * 0.3}),
                    inset 0 0 ${blur / 2}px rgba(255, 255, 255, ${0.2 + intensity * 0.3})
                `;
            }
        };

        draw();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isPlaying]);

    return (
        <section className="audio-demo-section">
            <div className="container audio-demo-inner">
                {/* Left Column: Copy */}
                <div className="audio-demo-content">
                    <span className="section-label">HEAR THE DIFFERENCE</span>
                    <h2 className="headline">Your AI Receptionist. On a Real Call.</h2>
                    <p className="body-copy">
                        This isn't a scripted demo — it's a real recorded call between an actual customer and a Tiberius AI voice agent handling intake for an auto mechanic shop. The customer called in, the AI picked up, and handled the entire conversation — no human needed. This is what your customers will experience when they call your business.
                    </p>

                    <ul className="feature-list">
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Real recorded call, not a script
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Handles scheduling, questions, and intake
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Sounds natural — customers don't notice
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Works 24/7, even holidays and weekends
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Your team only steps in when they need to
                        </li>
                    </ul>

                    <a className="cta-button" href="https://form.jotform.com/251756446512156" target="_blank" rel="noopener noreferrer">Get Your AI Voice Agent</a>
                </div>

                {/* Right Column: Audio Orb Player */}
                <div className="audio-demo-visual">
                    <div className="orb-container">
                        <div className="radial-grid"></div>
                        <div className="particles"></div>
                        <div
                            className={`orb ${isPlaying ? 'playing' : 'idle'}`}
                            ref={orbRef}
                            onClick={togglePlay}
                        >
                            <div className="orb-core"></div>
                        </div>
                        <div className="orb-shadow"></div>

                        <div className="audio-status">
                            {isPlaying ? (
                                <span className="status-label live">Live AI Call • Auto Repair Shop</span>
                            ) : (
                                <span className="status-label invite" onClick={togglePlay}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon-small">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                    Listen to a Live Call
                                </span>
                            )}
                        </div>

                        <div className="audio-controls">
                            <button className="play-pause-btn" onClick={togglePlay}>
                                {isPlaying ? (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="pause-icon">
                                        <rect x="6" y="4" width="4" height="16"></rect>
                                        <rect x="14" y="4" width="4" height="16"></rect>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                )}
                            </button>
                            <div className="progress-bar-container" onClick={handleScrub}>
                                <div className="progress-bar-track"></div>
                                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Hidden Audio Element */}
                    <audio
                        ref={audioRef}
                        src="/camero-demo-mp3.mp3"
                        onTimeUpdate={updateProgress}
                        onEnded={handleEnded}
                    ></audio>
                </div>
            </div>
        </section>
    );
};

export default AudioDemo;
