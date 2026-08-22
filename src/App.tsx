/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab } from './types';
import { CircuitBackground } from './components/CircuitBackground';
import { Navbar } from './components/Navbar';
import { HeroContent } from './components/HeroContent';
import { StatCard } from './components/StatCard';
import { CodeFeaturesCard } from './components/CodeFeaturesCard';
import { ContactModal } from './components/ContactModal';
import { CVModal } from './components/CVModal';
import { SectionContent } from './components/SectionContent';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('Home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [isGlowEnhanced, setIsGlowEnhanced] = useState(true);

  const handleStatClick = (type: string) => {
    if (type === 'projects') setActiveTab('Projects');
    else if (type === 'experience') setActiveTab('About');
    else if (type === 'satisfaction') setActiveTab('Testimonials');
  };

  return (
    <div className={`min-h-screen relative flex flex-col justify-between overflow-x-hidden ${isGlowEnhanced ? 'glow-enhanced' : ''}`}>
      {/* Background Neon Canvas & Radial Ambient Effects */}
      <CircuitBackground />

      {/* Main Top Header Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCV={() => setCvModalOpen(true)}
        isGlowEnhanced={isGlowEnhanced}
        onToggleGlow={() => setIsGlowEnhanced(!isGlowEnhanced)}
      />

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 max-w-7xl w-full mx-auto py-6 sm:py-10">
        
        {/* Render Tab Content if non-Home tab is selected */}
        {activeTab !== 'Home' ? (
          <SectionContent
            activeTab={activeTab}
            onOpenContact={() => setContactModalOpen(true)}
            onViewWork={() => setActiveTab('Projects')}
          />
        ) : (
          <>
            {/* Hero Section Layout (Matches Reference Screenshot Exactly) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:gap-12 transition-all duration-300">
              
              {/* Left Hero Main Section (7 cols on desktop) */}
              <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
                <HeroContent
                  onViewWork={() => setActiveTab('Projects')}
                  onOpenContact={() => setContactModalOpen(true)}
                />
              </div>

              {/* Right Hero Section (5 cols on desktop): Stacked Stat Cards */}
              <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-center gap-4 sm:gap-5">
                
                {/* Stat Card 1: Projects Completed & Deployed */}
                <div className="w-full sm:w-auto">
                  <StatCard
                    label={`Projects\nCompleted & Deployed`}
                    iconType="Layers"
                    onClick={() => handleStatClick('projects')}
                  />
                </div>

                {/* Stat Card 2: Passion for Code */}
                <div className="w-full sm:w-auto">
                  <StatCard
                    label={`Passion for\nCode`}
                    iconType="Heart"
                    onClick={() => handleStatClick('satisfaction')}
                  />
                </div>
              </div>
            </div>

            {/* Center-Bottom Floating Feature Box */}
            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-end pr-0 lg:pr-12 gap-6">
              <CodeFeaturesCard />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 border-t border-pink-500/20 text-center text-xs text-pink-300/60">
        <p>© 2026 Sneha Kumari. Designed & Built with Precision.</p>
      </footer>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
