import React from 'react';
import Background from '../img/lachlan-cruickshank-S9v_EPJfGys-unsplash.webp';
import Button from './Button';

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-10 bg-neutral-600  bg-cover  bg-bottom bg-no-repeat p-16 bg-blend-overlay lg:h-screen"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1 className=" text-center text-2xl text-white lg:text-5xl">
        Riding That{' '}
        <span className="font-bold underline underline-offset-2">Doesn't</span>{' '}
        Break The Bank
      </h1>
      <div>
        <Button
          buttonText={`Sign Up`}
          destination={'/signup'}
          hover={
            'hover:bg-banditYellow-500 hover:border-black hover:text-black'
          }
        />
      </div>
    </div>
  );
};

export default Hero;
