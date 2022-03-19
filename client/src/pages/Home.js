import React from 'react';
import Hero from '../components/Hero';
import ProductDisplay from '../components/ProductComponents/ProductDisplay';
import Popup from '../components/notifications/Popup';
import CtaSection from '../components/CtaSection';
import InfoSections from '../components/InfoSections';
import TrailsSection from '../components/Trails/TrailsSection';
import { useSelector } from 'react-redux';

function Home() {
  const notification = useSelector((state) => state.notification);
  return (
    <>
      <div className="">
        <div>
          {notification && (
            <Popup
              type={'bg-red-500 p-8 text-center text-white transition-all'}
              message={'You have been logged out successfully'}
            />
          )}
        </div>
        <Hero />
        <ProductDisplay />
        <TrailsSection />
        <InfoSections />
        <CtaSection />
      </div>
    </>
  );
}

export default Home;
