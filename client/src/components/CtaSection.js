import React from 'react';
import ctaImg from '../img/andhika-soreng-US06QF_sxu8-unsplash.jpg';

const CtaSection = () => {
  return (
    <div
      className="bg-neutral-600 flex flex-col items-center justify-center bg-cover bg-blend-overlay py-40 "
      style={{ backgroundImage: `url(${ctaImg})` }}
    >
      <h1 className="text-6xl text-white font-bold">Never Miss a Deal</h1>
      <div className="flex items-center justify-center pt-16">
        <span>
          <input
            type="text"
            placeholder="Dont miss a deal"
            className="px-52 py-8 rounded-l-lg text-xl"
          />
        </span>
        <span>
          <button className="bg-orange-500 text-white px-16 py-8 rounded-r-lg text-xl">
            Subscribe
          </button>
        </span>
      </div>
    </div>
  );
};

export default CtaSection;
