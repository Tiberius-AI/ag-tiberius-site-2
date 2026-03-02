import React from 'react';
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
        </main>
    );
};

export default Home;
