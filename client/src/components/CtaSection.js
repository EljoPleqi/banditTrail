import React from 'react';
import ctaImg from '../img/andhika-soreng-US06QF_sxu8-unsplash.webp';

const CtaSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-neutral-600 bg-cover bg-center py-40 bg-blend-overlay lg:bg-top "
      style={{ backgroundImage: `url(${ctaImg})` }}
    >
      <h1 className=" text-4xl font-bold text-white md:text-6xl">
        Never Miss a Deal
      </h1>
      <div className="flex items-center justify-center pt-4 md:pt-16">
        <span>
          <input
            type="text"
            placeholder="Dont miss a deal"
            className="rounded-l-lg p-4 md:text-xl lg:py-8 lg:px-52"
          />
        </span>
        <span>
          <button className="rounded-r-lg bg-orange-500 p-4 text-white md:text-xl lg:px-16 lg:py-8">
            Subscribe
          </button>
        </span>
      </div>
    </div>
  );
};

export default CtaSection;
