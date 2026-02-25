import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import PostHeroBanner from './components/PostHeroBanner';
import SalesPoints from './components/SalesPoints';
import ProposalRace from './components/ProposalRace';
import LiveDemo from './components/LiveDemo';
import AudioDemo from './components/AudioDemo';
import VisionQuoting from './components/VisionQuoting';
import RevenueImpact from './components/RevenueImpact';
import OurApproach from './components/OurApproach';
import './App.css';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <PostHeroBanner />
      <SalesPoints />
      <OurApproach />
      <LiveDemo />
      <AudioDemo />
      <RevenueImpact />
      <ProposalRace />
      <VisionQuoting />
    </>
  );
}

export default App;
