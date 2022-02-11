import React, { useState } from 'react';
import Background from '../img/project_template.jpeg';
import Button from './Button';
import { ArrowDownIcon } from '@heroicons/react/outline';

const Hero = () => {
  const [emoji, setEmoji] = useState(false);

  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-10 bg-neutral-500 bg-cover bg-top bg-no-repeat bg-blend-overlay"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1 className="place-self-center text-5xl text-white ">
        Riding That <span className="font-bold italic">Doesn't</span> Break The
        Bank
      </h1>
      <ArrowDownIcon className="h-6 w-6 text-white" />
      <div
        onMouseEnter={() => setEmoji(true)}
        onMouseOut={() => setEmoji(false)}
      >
        <Button
          buttonText={`Sign Up ${emoji ? '🤙' : ''}`}
          destination={'/signup'}
          hover={'hover:bg-neutral-900'}
        />
      </div>
    </div>
  );
};

export default Hero;
