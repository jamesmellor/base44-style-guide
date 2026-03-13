import React, { useState, useCallback } from 'react';
import SideNav from '../components/styleguide/SideNav';
import MobileNav from '../components/styleguide/MobileNav';
import OverviewSection from '../components/styleguide/OverviewSection';
import PrinciplesSection from '../components/styleguide/PrinciplesSection';
import ColoursSection from '../components/styleguide/ColoursSection';
import TypographySection from '../components/styleguide/TypographySection';
import SpacingSection from '../components/styleguide/SpacingSection';
import ComponentsSection from '../components/styleguide/ComponentsSection';
import ImagerySection from '../components/styleguide/ImagerySection';
import PatternsSection from '../components/styleguide/PatternsSection';

export default function StyleGuide() {
  const [activeSection, setActiveSection] = useState('overview');

  const handleNavigate = useCallback((id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SideNav activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16 space-y-24">
          <OverviewSection />
          <PrinciplesSection />
          <ColoursSection />
          <TypographySection />
          <SpacingSection />
          <ComponentsSection />
          <ImagerySection />
          <PatternsSection />
        </div>
      </main>
    </div>
  );
}