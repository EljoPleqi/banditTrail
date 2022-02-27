import React from 'react';
import Hero from '../components/Hero';
import ProductDisplay from '../components/ProductComponents/ProductDisplay';
import CtaSection from '../components/CtaSection';
import InfoSections from '../components/InfoSections';
import TrailsSection from '../components/Trails/TrailsSection';
function Home() {
  return (
    <div className="bg-neutral-100">
      <Hero />
      <ProductDisplay />
      <TrailsSection />
      <InfoSections />
      <CtaSection />
    </div>
  );
}

export default Home;
