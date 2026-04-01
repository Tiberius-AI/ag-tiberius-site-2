import React, { useState, useEffect, useRef } from 'react';
import './BidAssassin.css';

// ─── Brand constants ─────────────────────────────────────────
const BRAND = {
    crimson:      '#B1181F',
    crimsonDark:  '#8F1117',
    crimsonLight: '#cf4a52',
    dark:         '#0d1520',
    navy:         '#1a2438',
    white:        '#ffffff',
    text:         '#1A1A1A',
    textLight:    '#4A4A4A',
    gray:         '#6b7280',
    green:        '#22c55e',
    amber:        '#f59e0b',
};

// ─── useScrollReveal ─────────────────────────────────────────
// Watches all .ba-reveal* and .ba-method-connector descendants,
// adds .visible when they enter the viewport.
function useScrollReveal(ref, threshold = 0.1) {
    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );
        const sel = '.ba-reveal, .ba-reveal-left, .ba-reveal-scale, .ba-method-connector';
        const els = ref.current.querySelectorAll(sel);
        els.forEach((el) => observer.observe(el));
        return () => els.forEach((el) => { if (el) observer.unobserve(el); });
    }, []);
}

// ─── CountUp ─────────────────────────────────────────────────
// Counts from 0 to `end` when scrolled into view.
// prefix/suffix are rendered literally (e.g. prefix="$" suffix="T+").
function CountUp({ end, decimals = 0, prefix = '', suffix = '', duration = 1800 }) {
    const [display, setDisplay] = useState(decimals > 0 ? (0).toFixed(decimals) : '0');
    const nodeRef = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const el = nodeRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let startTime = null;
                    const step = (ts) => {
                        if (!startTime) startTime = ts;
                        const progress = Math.min((ts - startTime) / duration, 1);
                        const ease = 1 - Math.pow(1 - progress, 3);
                        const cur = ease * end;
                        setDisplay(decimals > 0 ? cur.toFixed(decimals) : Math.floor(cur).toLocaleString());
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [end, decimals, duration]);

    return <span ref={nodeRef}>{prefix}{display}{suffix}</span>;
}

// ─── Hero Video ──────────────────────────────────────────────
function HeroVideo() {
    return (
        <div className="ba-hero-video-outer">
            <div className="ba-hero-video-wrapper">
                <video className="ba-hero-video" autoPlay muted loop playsInline>
                    <source src="/video/hero-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="ba-hero-caption">
                <div className="ba-hero-caption-check">✓</div>
                <div className="ba-hero-caption-text">
                    <strong>$247,500</strong> Project Won Using Bid Assassin!
                </div>
            </div>
        </div>
    );
}

// ─── Shared icons ─────────────────────────────────────────────
function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function ChevronIcon({ open }) {
    return (
        <svg
            className={`ba-objection-chevron ${open ? 'open' : ''}`}
            viewBox="0 0 24 24" fill="none" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

// ─── Hero ────────────────────────────────────────────────────
function BidAssassinHero() {
    return (
        <section className="ba-hero">
            <div className="container ba-hero-inner">
                {/* Content animates in on load — no scroll trigger needed */}
                <div className="ba-hero-enter-content">
                    <div className="ba-hero-logo">
                        <img src="/images/logo2b.png" alt="Bid Assassin" className="ba-hero-logo-img" />
                    </div>
                    <p className="ba-hero-eyebrow">For Commercial Subcontractors &amp; Specialty Trades</p>
                    <h1 className="ba-hero-headline">
                        You're Bidding on<br />
                        20 Jobs to Win 4.
                    </h1>
                    <span className="ba-hero-headline-sub">Here's How to Win 8.</span>
                    <p className="ba-hero-subline">
                        The AI-powered bid system that finds the right projects before your competitors see them, builds your proposals in 2 minutes flat, and coaches you on how to close the GC.
                    </p>
                    <div className="ba-hero-buttons">
                        <a className="ba-btn-primary" href="https://buy.stripe.com/7sYcN68Ovedtdzgbnv2sM0j" target="_blank" rel="noopener noreferrer">Start Free Trial →</a>
                        <button className="ba-btn-ghost">See How It Works</button>
                    </div>
                </div>

                <div className="ba-hero-image-wrapper ba-hero-enter-visual">
                    <HeroVideo />
                </div>
            </div>
        </section>
    );
}

// ─── Stats Banner ─────────────────────────────────────────────
// Each number counts up from 0 when scrolled into view.
function StatsBanner() {
    const stats = [
        { prefix: '',  end: 80,  suffix: '%',  decimals: 0, label: 'Of bids go\nnowhere' },
        { prefix: '$', end: 1.8, suffix: 'T+', decimals: 1, label: 'U.S. Construction\nMarket' },
        { prefix: '',  end: 700, suffix: 'K+', decimals: 0, label: 'Specialty contractors\ncompeting for work' },
    ];

    return (
        <div className="ba-stats-banner">
            <div className="container ba-stats-inner">
                {stats.map((s, i) => (
                    <div key={i} className="ba-stat">
                        <div className="ba-stat-number">
                            <CountUp
                                end={s.end}
                                decimals={s.decimals}
                                prefix={s.prefix}
                                suffix={s.suffix}
                                duration={1600}
                            />
                        </div>
                        <div className="ba-stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Problem Section ─────────────────────────────────────────
// Pain points cascade in from the left one by one.
function ProblemSection() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const painPoints = [
        'You hear about a project from a buddy, a bid board, or a GC who emails you at 4:47 PM Friday with plans due Monday.',
        'You spend hours on a takeoff, pull quantities, coordinate with your suppliers and subs, and put together a proposal in a Word template from 2016.',
        'You submit. You wait. The GC goes silent. Maybe you follow up once. Maybe not — you\'ve got work on the board tomorrow.',
        'Three weeks later, the job went to a guy who bid it $8,000 lower because he missed half the scope. He\'ll eat the difference. You won\'t.',
        'Meanwhile, two commercial permits were filed in your city this week for projects you\'re perfectly qualified for. You didn\'t know about either of them.',
    ];

    return (
        <section className="ba-problem" ref={sectionRef}>
            <div className="container">
                <span className="ba-section-eyebrow ba-reveal">The Real Problem</span>
                <h2 className="ba-problem-headline ba-reveal ba-d1">
                    Let's Talk About What's Actually Killing Your Business Right Now
                </h2>
                <p className="ba-problem-lead ba-reveal ba-d2">
                    It's not the labor shortage. It's not material costs. It's not even the GC who ghosts you after you spent three days on a takeoff. It's the way you find and bid on work.
                </p>

                <div className="ba-pain-points">
                    {painPoints.map((text, i) => (
                        <div key={i} className={`ba-pain-point ba-reveal-left ba-d${i + 1}`}>
                            <div className="ba-pain-number">{i + 1}</div>
                            <p className="ba-pain-text">{text}</p>
                        </div>
                    ))}
                </div>

                <div className="ba-problem-stat ba-reveal ba-d3">
                    <strong>The industry average win rate for commercial subs is 1 in 5.</strong> That means for every 5 jobs you bid, you lose 4. Not because your work is bad. Not because your price is wrong. Because the whole process is broken.
                </div>

                <div className="ba-problem-conclusion ba-reveal ba-d4">
                    <p>"What if the problem was never your craft? <strong>What if it was always your bidding process?</strong>"</p>
                </div>
            </div>
        </section>
    );
}

// ─── Why Others Failed ────────────────────────────────────────
// Cards stagger in with scale animation.
function WhyOthersFailed() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const cards = [
        {
            badge: 'bad', label: 'Existing Option', name: 'ConstructConnect', price: '$300–400/month',
            desc: 'Gives you access to a firehose of projects. Now you have 200 bid invites to sort through instead of 20. You still build every proposal by hand. No coaching on positioning. No idea which projects you\'re likely to win.',
        },
        {
            badge: 'bad', label: 'Existing Option', name: 'PlanHub', price: 'Cheaper, same story',
            desc: 'More leads, more noise, same bottleneck: you sitting at the kitchen table at 10 PM putting together a scope document. More leads doesn\'t solve the speed and quality problem.',
        },
        {
            badge: 'good', label: 'The Fix', name: 'Bid Assassin', price: '$197/month',
            desc: 'The real bottleneck isn\'t finding projects — it\'s the speed and quality of your response when you find one. Bid Assassin compresses days into minutes and coaches you to close.',
        },
    ];

    return (
        <section className="ba-others" ref={sectionRef}>
            <div className="container">
                <span className="ba-section-eyebrow ba-reveal">Why The Old Way Doesn't Work</span>
                <h2 className="ba-others-headline ba-reveal ba-d1">
                    Why ConstructConnect, PlanHub, and "More Networking" Haven't Fixed This
                </h2>
                <p className="ba-others-lead ba-reveal ba-d2">
                    Here's what those solutions have in common: they give you more bids to chase. They don't help you chase the right ones, and they don't help you win them faster. And networking? That works — over years.
                </p>

                <div className="ba-comparison-grid">
                    {cards.map((card, i) => (
                        <div key={i} className={`ba-comparison-card ${card.badge === 'good' ? 'ba-card-good' : ''} ba-reveal-scale ba-d${i + 1}`}>
                            <span className={`ba-card-badge ${card.badge}`}>{card.label}</span>
                            <h3>{card.name}</h3>
                            <p className="ba-card-price">{card.price}</p>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="ba-bottleneck-callout ba-reveal ba-d4">
                    <p>
                        <strong>"The real bottleneck in commercial contracting isn't finding projects.</strong> It's the speed and quality of your response when you find one."
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Product Intro ────────────────────────────────────────────
function ProductIntro() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    return (
        <section className="ba-introducing" ref={sectionRef}>
            <div className="container">
                <span className="ba-section-eyebrow ba-reveal">Introducing</span>
                <div className="ba-product-name ba-reveal ba-d1">Bid Assassin</div>
                <p className="ba-product-tagline ba-reveal ba-d2">
                    The first AI-powered bid system built specifically for commercial subcontractors<br />
                    who are tired of losing work to guys who just got there first.
                </p>
                <p className="ba-product-description ba-reveal ba-d3">
                    Bid Assassin doesn't just find you projects. It doesn't just build your proposals. It does something no other tool in construction does:
                </p>
                <p className="ba-product-mechanism ba-reveal ba-d4">
                    It compresses your entire bid cycle from days into minutes and coaches you on how to win the job once you've submitted.
                </p>
                <p className="ba-product-description ba-reveal ba-d5">
                    Speed plus intelligence. Finding the right project, generating a professional proposal on the spot, and then getting strategic coaching on how to follow up, negotiate, and close. All in one platform.
                </p>
                <p className="ba-product-price-teaser ba-reveal ba-d6">
                    For <strong>$197 a month</strong>. Less than one day of a laborer's wages.
                </p>
            </div>
        </section>
    );
}

// ─── The Method ───────────────────────────────────────────────
// Steps stagger in; the connector line draws left-to-right.
function TheMethod() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef, 0.08);

    const steps = [
        {
            number: '1', icon: '📡',
            title: 'See What\'s Coming',
            desc: 'Bid Assassin scans building permits, Google Places, and curated lead sources for commercial projects relevant to your trade and service area. You wake up to opportunities your competitors won\'t find for weeks.',
        },
        {
            number: '2', icon: '📄',
            title: 'Build Your Bid in 2 Minutes',
            desc: 'Enter project type, scope of work, site conditions, and any special requirements. Bid Assassin generates a complete, branded proposal with your logo, detailed scope, material breakdown, crew allocation, and pricing. Done before you finish your coffee.',
        },
        {
            number: '3', icon: '🎯',
            title: 'Get Coached to Close',
            desc: 'Four AI coaches trained in commercial construction sales. The Estimator, The Closer, The Prospector, and The GC Whisperer coach you through the bid, the negotiation, and the relationship — not around it.',
        },
    ];

    return (
        <section className="ba-method" ref={sectionRef}>
            <div className="container">
                <div className="ba-method-header">
                    <span className="ba-section-eyebrow ba-reveal">How It Works</span>
                    <h2 className="ba-method-headline ba-reveal ba-d1">The Bid Assassin Method</h2>
                    <p className="ba-method-subline ba-reveal ba-d2">Three Moves. Every Morning. Before Your First Crew Call.</p>
                </div>

                <div className="ba-method-steps">
                    {/* Connector draws after steps appear */}
                    <div className="ba-method-connector" />
                    {steps.map((step, i) => (
                        <div key={i} className={`ba-step ba-reveal ba-d${i + 1}`}>
                            <div className="ba-step-number-ring">{step.number}</div>
                            <span className="ba-step-icon">{step.icon}</span>
                            <h3 className="ba-step-title">{step.title}</h3>
                            <p className="ba-step-description">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── The Math ─────────────────────────────────────────────────
// Cards scale in with stagger; highlight card lands last.
function TheMath() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const cards = [
        { label: 'Average specialty subcontract', number: '$1.5M–$2M', desc: 'Per project on a $10M commercial build', highlight: false },
        { label: 'Cost of Bid Assassin per year',  number: '$2,364',   desc: 'Total annual subscription cost',          highlight: false },
        { label: 'Value of ONE extra win',          number: '7,600x',  desc: 'ROI on your subscription from a single win', highlight: true },
    ];

    return (
        <section className="ba-math" ref={sectionRef}>
            <div className="container">
                <div className="ba-math-header">
                    <span className="ba-section-eyebrow-light ba-reveal">The Numbers</span>
                    <h2 className="ba-math-headline ba-reveal ba-d1">The Math That Makes This Obvious</h2>
                    <p className="ba-math-subline ba-reveal ba-d2">Average specialty subcontract on a $10M commercial build</p>
                </div>

                <div className="ba-math-grid">
                    {cards.map((card, i) => (
                        <div key={i} className={`ba-math-card ${card.highlight ? 'ba-math-highlight' : ''} ba-reveal-scale ba-d${i + 1}`}>
                            <div className="ba-math-label">{card.label}</div>
                            <div className={`ba-math-number ${card.highlight ? 'ba-accent' : ''}`}>{card.number}</div>
                            <div className="ba-math-desc">{card.desc}</div>
                        </div>
                    ))}
                </div>

                <div className="ba-math-footnote ba-reveal ba-d4">
                    <p>
                        Even if your average project is <strong>$200K</strong> (not $1.5M), winning one extra job per year pays for Bid Assassin <strong>84 times over.</strong> Contractors who've adopted systematic bid management report spending <strong>60% less time</strong> evaluating opportunities.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Features Grid ────────────────────────────────────────────
// 6 cards stagger in two rows of 3.
function FeaturesGrid() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef, 0.06);

    const features = [
        {
            icon: '📡', title: 'The Opportunities Engine',
            desc: 'Building permits scraped daily across your target market. Google Places results for GCs, developers, and owners in your radius. Filtered to projects relevant to your trade, with one-click reach out via email, phone, LinkedIn, or SMS.',
        },
        {
            icon: '📄', title: '2-Minute Proposal Builder',
            desc: 'Enter project type, scope of work, site conditions, and special requirements. Get a fully branded, professionally formatted proposal with your logo, detailed scope, material breakdown, crew allocation, and pricing. Send it from the jobsite.',
        },
        {
            icon: '🎯', title: 'The Estimator (Coach #1)',
            desc: 'Upload a proposal and this coach tears into your numbers. Are you leaving money on the table? Did you miss a line item? Is your mobilization cost realistic? Scope and pricing validation before you hit send.',
        },
        {
            icon: '🤝', title: 'The Closer (Coach #2)',
            desc: 'The GC says you\'re too high. The project went silent. The Closer gives you word-for-word scripts, negotiation frameworks, and follow-up sequences. It coaches you through the conversation, not around it.',
        },
        {
            icon: '🔎', title: 'The Prospector (Coach #3)',
            desc: 'How do you get on more bid lists? How do you reach out to a GC you\'ve never worked with? The Prospector builds your outreach strategy one step at a time and positions you as the sub they call first.',
        },
        {
            icon: '🏗️', title: 'The GC Whisperer (Coach #4)',
            desc: 'Long-term GC relationships are where the real money is. Repeat invites. Negotiated work. No more competing against 12 subs on every job. The GC Whisperer teaches you the relationship game that turns one project into a pipeline.',
        },
    ];

    return (
        <section className="ba-features" ref={sectionRef}>
            <div className="container">
                <div className="ba-features-header">
                    <span className="ba-section-eyebrow ba-reveal">What's Inside</span>
                    <h2 className="ba-features-headline ba-reveal ba-d1">What's Inside Bid Assassin</h2>
                    <p className="ba-features-subline ba-reveal ba-d2">
                        Six tools working together to find the right projects, win more of them, and build the relationships that keep work coming in.
                    </p>
                </div>

                <div className="ba-features-grid">
                    {features.map((f, i) => (
                        <div key={i} className={`ba-feature-card ba-reveal ba-d${(i % 3) + 1}`}>
                            <span className="ba-feature-icon">{f.icon}</span>
                            <h3 className="ba-feature-title">{f.title}</h3>
                            <p className="ba-feature-description">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── GC Section ───────────────────────────────────────────────
function GCSection() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const benefits = [
        {
            icon: '⚡', title: 'Faster, better proposals',
            text: 'Your subs show up with a detailed, professionally scoped proposal within hours of your bid invite instead of days.',
        },
        {
            icon: '📊', title: 'Simpler leveling process',
            text: 'When proposals are actually comparable in format and scope detail, your bid leveling gets significantly faster.',
        },
        {
            icon: '🔍', title: 'Scope-complete bids',
            text: 'Bid Assassin\'s Estimator coach catches scope gaps before the proposal leaves your sub\'s desk.',
        },
    ];

    return (
        <section className="ba-gc" ref={sectionRef}>
            <div className="container ba-gc-inner">
                <div>
                    <span className="ba-section-eyebrow ba-reveal">General Contractors</span>
                    <h2 className="ba-gc-headline ba-reveal ba-d1">
                        GCs: This Works<br />for You Too.
                    </h2>
                    <p className="ba-gc-text ba-reveal ba-d2">
                        If you're a general contractor reading this, Bid Assassin isn't competing with your workflow. It's making your subs better at theirs.
                    </p>
                    <p className="ba-gc-text ba-reveal ba-d3">
                        We surface permits early, which means your subs can bring you opportunities instead of just waiting for you to call. The dynamic shifts from you managing a bid list to your subs saying: "I saw a 200,000 SF warehouse permit just filed in Pflugerville. Want to go after it together?"
                    </p>
                    <div className="ba-gc-quote ba-reveal ba-d4">
                        <p>"That's a different kind of subcontractor. That's the kind you want on every job."</p>
                    </div>
                </div>

                <div className="ba-gc-benefits">
                    {benefits.map((b, i) => (
                        <div key={i} className={`ba-gc-benefit ba-reveal ba-d${i + 2}`}>
                            <span className="ba-gc-benefit-icon">{b.icon}</span>
                            <div className="ba-gc-benefit-text">
                                <strong>{b.title}</strong>
                                {b.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Pricing ──────────────────────────────────────────────────
function PricingSection() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const features = [
        {
            name: 'AI Proposal Builder',
            value: 'Your branding, logo, and scope templates. Unlimited proposals. Value: $300/mo if you hired an estimating assistant.',
        },
        {
            name: 'Daily Opportunity Feed',
            value: 'Building permits, Google Places, and curated lead sources filtered to your trade and service area. Value: $300–400/mo (ConstructConnect alone costs this).',
        },
        {
            name: '4 AI Coaching Personas — 24/7',
            value: 'The Estimator, The Closer, The Prospector, The GC Whisperer. Ask anything about your bids, pipeline, or negotiations. Value: $97/mo.',
        },
        {
            name: 'Pipeline Dashboard',
            value: 'Track sent proposals, follow-ups, and close rates. Know your actual win rate for the first time. Fewer than 10% of subs track their bid-hit ratio. You will.',
        },
        {
            name: 'SOP Library',
            value: 'Step-by-step playbooks: getting on bid lists, pre-qual templates, follow-up cadences, scope review checklists, and more. Yours on Day 1.',
        },
    ];

    return (
        <section className="ba-pricing" ref={sectionRef}>
            <div className="container">
                <div className="ba-pricing-header">
                    <span className="ba-section-eyebrow ba-reveal">Pricing</span>
                    <h2 className="ba-pricing-headline ba-reveal ba-d1">Everything You Get for $197/Month</h2>
                    <p className="ba-pricing-subline ba-reveal ba-d2">Total value: $700+/month. Your price: $197. Less than one day of a laborer's wages.</p>
                </div>

                <div className="ba-pricing-card ba-reveal-scale ba-d3">
                    <div className="ba-pricing-card-header">
                        <div className="ba-pricing-card-name">
                            Bid Assassin
                            <span>All features included. No tiers.</span>
                        </div>
                        <div className="ba-pricing-amount">
                            <div className="ba-pricing-price">$197</div>
                            <div className="ba-pricing-period">/month</div>
                        </div>
                    </div>

                    <div className="ba-pricing-features-list">
                        {features.map((f, i) => (
                            <div key={i} className="ba-pricing-feature">
                                <div className="ba-pricing-check"><CheckIcon /></div>
                                <div>
                                    <div className="ba-pricing-feature-name">{f.name}</div>
                                    <div className="ba-pricing-feature-value">{f.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ba-pricing-total-row">
                        <span className="ba-pricing-total-label">Total value of everything above</span>
                        <span className="ba-pricing-total-value">$700+/month</span>
                    </div>

                    <div className="ba-pricing-cta-area">
                        <a className="ba-pricing-cta" href="https://buy.stripe.com/7sYcN68Ovedtdzgbnv2sM0j" target="_blank" rel="noopener noreferrer">Start Your Free Trial →</a>
                        <p className="ba-pricing-fine-print">Cancel anytime · No contracts · No setup fees</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Objections ───────────────────────────────────────────────
function ObjectionsSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    const objections = [
        {
            q: '"I\'m not great with technology. I can barely use my phone."',
            a: 'Good. Bid Assassin was built for people who run jobs, not people who write code. If you can fill out a text message, you can use this. Enter your project details, hit generate, and your proposal is done. The AI coaches work like texting a really smart friend who knows everything about commercial sales and bidding. No training manuals. No certifications. No IT department required.',
        },
        {
            q: '"$197 a month is a lot for software."',
            a: 'You\'re bidding on commercial projects worth $200K to $2M each. If Bid Assassin helps you win one additional project this year you would have otherwise missed, the ROI isn\'t 2x or 10x — it\'s 84x to 7,600x. The subscription costs less per day than a single hour of labor. And unlike that hour, it pays for itself hundreds of times over.',
        },
        {
            q: '"Can AI really write a proposal for my trade? It doesn\'t know my business."',
            a: 'It does after you spend 10 minutes on the onboarding wizard. You enter your company details, trades, service area, licensing, insurance, and typical pricing ranges. From that point on, every proposal pulls from YOUR information — your logo, your scope language, your pricing benchmarks. The AI structures and formats it. The details are yours.',
        },
        {
            q: '"What if the leads aren\'t in my area?"',
            a: 'You set your service radius during setup. The Opportunities engine only shows projects within YOUR range. Right now we\'re pulling permits and leads from the Texas Triangle — San Antonio, Austin, DFW, and Houston — with more markets being added. If you\'re a sub operating anywhere in Texas, you\'re covered.',
        },
        {
            q: '"I already have relationships with GCs. I don\'t need software to find work."',
            a: 'That\'s great. And Bid Assassin isn\'t here to replace those relationships — it\'s here to multiply them. Use the permit data to bring opportunities to your GCs before they even know about them. Use the proposal builder to respond to their invites faster than anyone else on their list. The subs who win the most work don\'t choose between relationships and systems. They use both.',
        },
    ];

    return (
        <section className="ba-objections" ref={sectionRef}>
            <div className="container">
                <div className="ba-objections-header">
                    <span className="ba-section-eyebrow ba-reveal">Common Questions</span>
                    <h2 className="ba-objections-headline ba-reveal ba-d1">I Know What You're Thinking</h2>
                </div>

                <div className="ba-objections-list">
                    {objections.map((obj, i) => (
                        <div key={i} className={`ba-objection ba-reveal ba-d${Math.min(i + 1, 4)}`}>
                            <button
                                className="ba-objection-question"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                {obj.q}
                                <ChevronIcon open={openIndex === i} />
                            </button>
                            <div className={`ba-objection-answer ${openIndex === i ? 'open' : ''}`}>
                                <div className="ba-objection-answer-inner">{obj.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Guarantee ────────────────────────────────────────────────
function GuaranteeSection() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    return (
        <section className="ba-guarantee" ref={sectionRef}>
            <div className="container">
                <div className="ba-guarantee-inner">
                    <span className="ba-guarantee-icon ba-reveal">🛡️</span>
                    <h2 className="ba-guarantee-title ba-reveal ba-d1">The "First Proposal" Guarantee</h2>
                    <p className="ba-guarantee-text ba-reveal ba-d2">
                        Generate your first proposal within your free trial. If Bid Assassin doesn't produce something you'd be proud to put your company name on and send to a GC, cancel with one click. No questions. No hassle. No hard feelings.
                    </p>
                    <p className="ba-guarantee-caveat ba-reveal ba-d3">
                        This isn't for everyone. If you're a solo operator doing small residential repairs and odd jobs, Bid Assassin is overkill. This is built for commercial subcontractors and specialty contractors — any trade — bidding on projects worth $100K and up. If that's you, the only question is whether you want to keep spending 3 days on proposals your competitors are building in 3 minutes.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Final CTA ────────────────────────────────────────────────
function FinalCTA() {
    const sectionRef = useRef(null);
    useScrollReveal(sectionRef);

    return (
        <section className="ba-final-cta" ref={sectionRef}>
            <div className="container">
                <h2 className="ba-final-cta-headline ba-reveal">
                    Two Permits Were Filed in<br />Your Market Today.
                </h2>
                <p className="ba-final-cta-subline ba-reveal ba-d1">
                    Do you know about them? Your competitors don't either. Not yet.<br />
                    But someone is going to find them first.
                </p>
                <a className="ba-final-cta-button ba-reveal-scale ba-d2" href="https://buy.stripe.com/7sYcN68Ovedtdzgbnv2sM0j" target="_blank" rel="noopener noreferrer">Start Free Trial →</a>
                <p className="ba-final-cta-fine-print ba-reveal ba-d3">$197/mo after trial · Cancel anytime · No contracts</p>
            </div>
        </section>
    );
}

// ─── Page assembly ────────────────────────────────────────────
const BidAssassin = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); };
    }, []);

    return (
        <main>
            <BidAssassinHero />
            <StatsBanner />
            <ProblemSection />
            <WhyOthersFailed />
            <ProductIntro />
            <TheMethod />
            <TheMath />
            <FeaturesGrid />
            <GCSection />
            <PricingSection />
            <ObjectionsSection />
            <GuaranteeSection />
            <FinalCTA />
            <elevenlabs-convai agent-id="agent_2001kn4nhzvfewxvjb7f6bzy41pt" dismissible="true" />
        </main>
    );
};

export default BidAssassin;
