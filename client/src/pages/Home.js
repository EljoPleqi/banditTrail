import React from 'react';
import Hero from '../components/Hero';
import ProductDisplay from '../components/ProductDisplay';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <Hero />
      <ProductDisplay />
      <CtaSection />
      <ProductDisplay />
      <Footer />
    </>
  );
}

export default Home;
