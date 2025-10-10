import React from 'react';
import AboutHero from '../components/about/AboutHero';
import StorySection from '../components/about/Story';
import MissionVisionSection from '../components/about/Mission';
import ValueSection from '../components/about/Values';
import StatsSection from '../components/about/Stats';
import WhyChooseUsSection from '../components/about/WhyChooseUs';
import TeamSection from '../components/about/Team';
import CTASection from '../components/home/CTASection';

// ==================== ABOUT.JSX ====================
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <StorySection />
      <MissionVisionSection />
      <ValueSection />
      <StatsSection />
      <WhyChooseUsSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
