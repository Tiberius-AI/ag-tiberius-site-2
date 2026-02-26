import React, { useState, useRef, useEffect } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: "What exactly does Tiberius AI do?",
        answer: "We build AI-powered tools for contractors and service businesses. That includes AI voice agents that answer your phones 24/7, talking websites that chat with visitors and book jobs, AI vision quoting that turns a customer photo into an instant estimate, and AI-powered proposals that help you win more bids faster. You can use one or all of them depending on what your business needs."
    },
    {
        question: "How much does it cost?",
        answer: "Our managed AI solutions start at $197/month with a small setup fee depending on the level of service you choose. No long-term contracts. Cancel anytime. We also offer fully custom builds for businesses that want a dedicated, self-hosted solution. Those are scoped and priced per project."
    },
    {
        question: "Do I own my AI agent?",
        answer: "At the $197/month level, we host and manage everything for you, but key accounts like your voice agent platform are always set up in your name, so your call data and recordings are yours. If down the road you want full ownership with your own servers, your own codebase, and custom features built to your specs, we do that too. That's a custom engagement with its own proposal and pricing, and it's something our managed clients graduate into once they've seen the results and know exactly what they want."
    },
    {
        question: "I'm not technical at all. Can I still use this?",
        answer: "That's the whole point of the managed service. Most of our clients are contractors who spend their days on job sites, not behind a computer. You tell us how your business works and we build the AI around it. We handle the setup, the configuration, and the ongoing management. You just answer the phone when the AI books you a job."
    },
    {
        question: "What happens if the AI can't answer a question?",
        answer: "Your AI agent is trained specifically on your business, your services, your pricing, your service area, your scheduling. But if a caller asks something outside its scope or the situation needs a human touch, it hands off gracefully. It can transfer the call to you or your team, take a detailed message, or schedule a callback. No dead ends."
    },
    {
        question: "How is this different from a chatbot I can get for $20/month?",
        answer: "Generic chatbots follow a script. They answer what they're programmed to answer and fall apart the moment a conversation goes off-track. Our AI agents have real conversations. They understand context, ask follow-up questions, handle objections, and actually book appointments. More importantly, we build them around your specific business, not a one-size-fits-all template."
    },
    {
        question: "How long does it take to get up and running?",
        answer: "Most clients are live within 3 to 5 business days. You give us the details about your business, services, pricing, service area, scheduling preferences, and we handle the rest. We build your agent, test it, and get it answering calls before the week is out."
    },
    {
        question: "What if it doesn't work for my business?",
        answer: "We offer a 30-day money-back guarantee. If your AI agent doesn't capture leads you would have otherwise missed, we'll refund your monthly fee. No hoops to jump through. We're confident it works because we've seen what happens when contractors stop missing calls. They book more jobs. Simple as that."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                if (openIndex === index) {
                    ref.style.maxHeight = ref.scrollHeight + "px";
                } else {
                    ref.style.maxHeight = "0px";
                }
            }
        });
    }, [openIndex]);

    return (
        <section className="faq-section" id="faq">
            <div className="container faq-container">
                <div className="faq-header">
                    <span className="section-label">GOT QUESTIONS?</span>
                    <h2 className="headline">Everything You Need to Know</h2>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`faq-item ${isOpen ? 'open' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <div className={`faq-icon ${isOpen ? 'open' : ''}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="faq-answer-wrapper"
                                    ref={el => contentRefs.current[index] = el}
                                >
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
