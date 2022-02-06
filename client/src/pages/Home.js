import React from 'react';
import Hero from '../components/Hero';
import ProductDisplay from '../components/productComponents/ProductDisplay';
import CtaSection from '../components/CtaSection';
import InfoSections from '../components/InfoSections';
import TrailsSection from '../components/trails/TrailsSection';
function Home() {
  return (
    <div className="bg-neutral-100">
      <Hero />
      <ProductDisplay />
      <CtaSection />
      <TrailsSection />
      <InfoSections />
    </div>
  );
}

export default Home;
