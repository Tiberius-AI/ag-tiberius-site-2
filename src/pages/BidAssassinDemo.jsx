import React, { useEffect } from 'react';
import './BidAssassinDemo.css';

const BidAssassinDemo = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = `(function (v, i, d, a, l, y, t, c, s) {
            y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
            if (!vsl){vsl=function(u,cb){
                if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
                if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
                i.getElementsByTagName("head")[0].appendChild(s);
            };}
            vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
        })(window, document, 'Vidalytics', 'vidalytics_embed_4vHW1vhfhtW0EbyQ', 'https://fast.vidalytics.com/embeds/0aVk09nm/4vHW1vhfhtW0EbyQ/');`;
        document.head.appendChild(script);
        return () => {
            if (document.head.contains(script)) document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); };
    }, []);

    const bullets = [
        'AI-powered proposals in under 5 minutes',
        'Find commercial leads before your competitors',
        '4 AI coaching tools built for subs',
        'Works for concrete, electrical, HVAC, and more',
    ];

    return (
        <main className="bad-page">

            {/* ── Logo + Headline ── */}
            <section className="bad-intro">
                <img
                    src="/images/logo2b.png"
                    alt="Bid Assassin"
                    className="bad-logo"
                />
                <h1 className="bad-headline">
                    How Commercial Concrete Subs Are Winning 3x More Bids
                    Without Hiring an Estimator
                </h1>
            </section>

            {/* ── Video ── */}
            <section className="bad-video-section">
                <div className="bad-video-wrap">
                    <div
                        id="vidalytics_embed_4vHW1vhfhtW0EbyQ"
                        style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}
                    />
                </div>
            </section>

            {/* ── CTA + Bullets ── */}
            <section className="bad-cta-section">
                <a
                    href="https://buy.stripe.com/7sYcN68Ovedtdzgbnv2sM0j"
                    className="bad-cta-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Start Your Free 14-Day Trial
                </a>
                <p className="bad-fine-print">Just $197/mo after your trial. Cancel anytime.</p>

                <ul className="bad-bullets">
                    {bullets.map((b) => (
                        <li key={b} className="bad-bullet">
                            <svg className="bad-check" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="9" fill="rgba(45,159,147,0.15)" />
                                <polyline
                                    points="5,9.5 7.5,12 13,6.5"
                                    stroke="#2d9f93"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {b}
                        </li>
                    ))}
                </ul>

            </section>

            <elevenlabs-convai agent-id="agent_4101kp6wd5j1e5w93e09zn2zdfrq" dismissible="true" avatar-image-url="https://tiberius.ai/images/charlie.gif" />

        </main>
    );
};

export default BidAssassinDemo;
