import React from 'react';
import Background from '../img/project_template.jpeg';
import { ArrowDownIcon } from '@heroicons/react/outline';

const Hero = () => {
  return (
    <div className="h-[50rem] flex flex-col">
      <div
        className="flex flex-col items-center justify-center h-full bg-neutral-500 bg-blend-overlay bg-top bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h1 className="text-5xl shadow-md text-white place-self-center">
          Riding That <span className="font-bold italic">Doesn't</span> Break
          The Bank
        </h1>
        <ArrowDownIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default Hero;
