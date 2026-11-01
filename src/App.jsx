import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutJourney from './components/AboutJourney';
import PythonSkills from './components/PythonSkills';
import ActivitiesSection from './components/ActivitiesSection';
import LearningTimeline from './components/LearningTimeline';
import ChallengesSolutions from './components/ChallengesSolutions';
import KeyTakeaways from './components/KeyTakeaways';
import FinalReflection from './components/FinalReflection';
import Footer from './components/Footer';
import Lightbox from './components/common/Lightbox';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-ivory-50 text-navy-900 selection:bg-violetAccent-100 selection:text-navy-950 font-sans">
        <Navbar />
        <main>
          <Hero />
          <AboutJourney />
          <PythonSkills />
          <ActivitiesSection />
          <LearningTimeline />
          <ChallengesSolutions />
          <KeyTakeaways />
          <FinalReflection />
        </main>
        <Footer />
        <Lightbox />
      </div>
    </PortfolioProvider>
  );
}

