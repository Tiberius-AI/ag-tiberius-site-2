import React, { useState, useEffect, useRef } from 'react';
import './LiveDemo.css';

const conversation = [
    { role: 'caller', text: 'Hi, I need my gutters cleaned. Do you guys do that?' },
    { role: 'ai', text: 'Absolutely! We handle gutter cleaning for both residential and commercial properties. Can I get your address to put together a quote?' },
    { role: 'caller', text: "Sure, it's 442 Elm Street in Cedar Park." },
    { role: 'ai', text: 'Got it — 442 Elm Street, Cedar Park. I have a slot open this Thursday at 10 AM. Would that work for you?' },
    { role: 'caller', text: 'Thursday works great!' },
    { role: 'ai', text: "Perfect, you're all set! You'll get a confirmation text shortly. Anything else I can help with?" }
];

const LiveDemo = () => {
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef(null);
    const chatContainerRef = useRef(null);

    // Auto-scroll chat to bottom
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // Intersection observer to trigger animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
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

    // Chat animation logic
    useEffect(() => {
        if (!hasStarted) return;

        if (currentIndex < conversation.length) {
            const message = conversation[currentIndex];
            // Typing delay is shorter for caller, longer for AI to simulate processing
            const typingDelay = message.role === 'ai' ? Math.max(message.text.length * 20, 1500) : 1200;

            // Wait 500ms before starting to type
            const startTypingTimer = setTimeout(() => {
                setIsTyping(true);
            }, 500);

            const messageTimer = setTimeout(() => {
                setIsTyping(false);
                setMessages((prev) => [...prev, message]);
                setCurrentIndex((prev) => prev + 1);
            }, typingDelay + 500);

            return () => {
                clearTimeout(startTypingTimer);
                clearTimeout(messageTimer);
            };
        } else {
            // Loop after delay
            const resetTimer = setTimeout(() => {
                setMessages([]);
                setCurrentIndex(0);
            }, 8000);
            return () => clearTimeout(resetTimer);
        }
    }, [currentIndex, hasStarted]);

    return (
        <section className="live-demo" ref={sectionRef}>
            <div className="container demo-inner">
                {/* Text Content */}
                <div className="demo-text-content">
                    <span className="demo-subtitle">See It In Action</span>
                    <h2 className="demo-title">Watch Your AI Agent Book a Job</h2>
                    <p className="demo-body">
                        This is what it looks like when a customer reaches out — by phone or through your website. Your Tiberius AI agent picks up the conversation, qualifies the lead, gathers the details, and books the appointment. No hold music. No missed calls. No leads slipping through the cracks. It works the same whether someone calls your business line or starts a chat on your site.
                    </p>

                    <ul className="demo-features">
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Handles voice calls and website chat
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Natural, human-like conversation
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Books appointments in real time
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Sends confirmation to you and the customer
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Logs everything to your CRM
                        </li>
                    </ul>

                    <button className="demo-cta">Book a Demo</button>
                </div>

                {/* Chat Simulation */}
                <div className="demo-chat-wrapper">
                    <div className="chat-interface">
                        <div className="chat-header">
                            <div className="live-indicator">
                                <span className="pulse-dot"></span>
                                LIVE AI CONVERSATION
                            </div>
                            <div className="chat-subtitle">Incoming • Cedar Park, TX</div>
                        </div>

                        <div className="chat-body" ref={chatContainerRef}>
                            {messages.map((msg, i) => (
                                <div key={i} className={`chat-message-wrapper ${msg.role}`}>
                                    <div className="chat-sender-label">
                                        {msg.role === 'ai' ? 'TIBERIUS AI' : 'CUSTOMER'}
                                    </div>
                                    <div className={`chat-bubble ${msg.role}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className={`chat-message-wrapper ${conversation[currentIndex]?.role || 'ai'}`}>
                                    <div className="chat-sender-label">
                                        {conversation[currentIndex]?.role === 'ai' ? 'TIBERIUS AI' : 'CUSTOMER'}
                                    </div>
                                    <div className={`chat-bubble typing-bubble ${conversation[currentIndex]?.role || 'ai'}`}>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveDemo;
