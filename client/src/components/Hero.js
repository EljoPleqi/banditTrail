import React from 'react';
import Background from '../img/project_template.jpeg';

const Hero = () => {
  return (
    <div className="h-[50rem] flex flex-col">
      <div
        className="flex items center justify-center h-full bg-top bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h1 className="text-5xl shadow-md text-white place-self-center">
          Riding That <span className="font-bold italic">Doesn't</span> Break
          The Bank
        </h1>
      </div>
    </div>
  );
};

export default Hero;
