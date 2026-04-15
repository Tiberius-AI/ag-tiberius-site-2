import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import PostHeroBanner from '../components/PostHeroBanner';
import SalesPoints from '../components/SalesPoints';
import OurApproach from '../components/OurApproach';
import LiveDemo from '../components/LiveDemo';
import AudioDemo from '../components/AudioDemo';
import RevenueImpact from '../components/RevenueImpact';
import ProposalRace from '../components/ProposalRace';
import VisionQuoting from '../components/VisionQuoting';
import FAQ from '../components/FAQ';
import GrandFinale from '../components/GrandFinale';

const Home = () => {
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
            <Hero />
            <PostHeroBanner />
            <SalesPoints />
            <OurApproach />
            <LiveDemo />
            <AudioDemo />
            <RevenueImpact />
            <ProposalRace />
            <VisionQuoting />
            <FAQ />
            <GrandFinale />
            <elevenlabs-convai agent-id="agent_5301kp98cx9yf8tsbxx85zd6th5z" dismissible="true" avatar-image-url="https://tiberius.ai/images/charlie2c.gif" />
        </main>
    );
};

export default Home;
