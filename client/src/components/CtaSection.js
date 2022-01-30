import React from 'react';

const CtaSection = () => {
  return (
    <div className="bg-[#464d3d] flex flex-col items-center justify-center py-40">
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
          <button className="bg-white px-16 py-8 rounded-r-lg text-xl">
            Subscribe
          </button>
        </span>
      </div>
    </div>
  );
};

export default CtaSection;
