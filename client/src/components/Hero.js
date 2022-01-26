import React from 'react';
import Background from '../img/tim-foster-308PAaLR1OM-unsplash.webp';

const Hero = () => {
  return (
    <div className=" min-h-full  bg-slate-800 bg-cover	">
      <div className="h-screen flex flex-col">
        <div
          className="flex items center justify-center h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
