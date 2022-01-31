import React from 'react';
import Hero from '../components/Hero';
import ProductDisplay from '../components/ProductDisplay';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import InfoSections from '../components/InfoSections';
function Home() {
  return (
    <>
      <Hero />
      <ProductDisplay />
      <CtaSection />
      <ProductDisplay />
      <InfoSections />
      <Footer />
    </>
  );
}

export default Home;
