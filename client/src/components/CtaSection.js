import React from 'react';
import ctaImg from '../img/andhika-soreng-US06QF_sxu8-unsplash.webp';

const CtaSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-neutral-600 bg-cover bg-center py-52 bg-blend-overlay lg:bg-top "
      style={{ backgroundImage: `url(${ctaImg})` }}
    >
      <h1 className="text-4xl font-bold text-white md:text-5xl">
        Never Miss a Deal
      </h1>
      <div className="flex items-center justify-center   pt-4 md:pt-8">
        <span>
          <input
            type="text"
            placeholder="Dont miss a deal"
            className=" border-2  border-r-0 border-black p-4 lg:py-3 lg:px-32"
          />
        </span>
        <span>
          <button className="bg-banditOrange-500  hover:bg-banditOrange-700 active:bg-banditOrange-900 border-2 border-black p-4 text-white  active:translate-y-1  lg:px-8 lg:py-3">
            Subscribe
          </button>
        </span>
      </div>
    </div>
  );
};

export default CtaSection;
