import React, { useState } from 'react';
import Background from '../img/lachlan-cruickshank-S9v_EPJfGys-unsplash.webp';
import Button from './Button';

const Hero = () => {
  const [emoji, setEmoji] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center gap-10 bg-neutral-600  bg-cover  bg-bottom bg-no-repeat p-16 bg-blend-overlay lg:h-screen"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1 className=" text-center text-2xl text-white lg:text-5xl">
        Riding That <span className="font-bold italic">Doesn't</span> Break The
        Bank
      </h1>
      <div
        onMouseEnter={() => setEmoji(true)}
        onMouseOut={() => setEmoji(false)}
      >
        <Button
          buttonText={`Sign Up ${emoji ? '🤙' : ''}`}
          destination={'/signup'}
          hover={'hover:bg-green-600 hover:border-none'}
        />
      </div>
    </div>
  );
};

export default Hero;
