
import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import ThankYouNote from './components/activities/ThankYouNote';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutJourney from './components/AboutJourney';
import ActivitiesSection from './components/activities/ActivitiesSection';
import EvidenceGallery from './components/EvidenceGallery';
import CourseworkAssignment from './components/CourseworkAssignment';
import VtopSubmissions from './components/activities/VtopSubmissions';
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

          <ActivitiesSection />

          <EvidenceGallery />

          <CourseworkAssignment />

          {/* VTOP Submissions - Immediately before Thank You */}
          <VtopSubmissions />

          <ThankYouNote />
        </main>

        <Footer />

        <Lightbox />

      </div>
    </PortfolioProvider>
  );
}
