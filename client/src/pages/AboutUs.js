import React from 'react';
import Button from '../components/Button';
import img from '.././img/axel-brunst-GcVVLnjYlN0-unsplash.jpg';
const AboutUs = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-neutral-600 bg-cover py-40  bg-blend-overlay"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h1 className="text-4xl text-white shadow-sm">About Us</h1>
      </div>
      <div className="my-28 mx-24 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-2 py-16">
          <h2>Why riding shouldn't break the bank</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="my-28 mx-24 flex items-center justify-center">
        <div
          className="flex h-full w-[64rem] flex-col items-center justify-center gap-4 bg-neutral-700 bg-cover py-40 px-12 bg-blend-overlay"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h2 className="text-xl text-white shadow-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <Button buttonText={'Learn More'} />
        </div>
      </div>
      <h2 className="text-center text-4xl">Help the community</h2>
      <div className="my-28 mx-24 flex items-center justify-center gap-16">
        <div
          className="flex h-96 w-96 items-center justify-center bg-neutral-700 bg-cover bg-blend-overlay"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h3 className="text-white"> Donate your old gear</h3>
        </div>
        <div
          className="flex h-96 w-96 items-center justify-center bg-neutral-700 bg-cover bg-blend-overlay"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h3 className="text-white">Help maintain the trails</h3>
        </div>
        <div
          className="flex h-96 w-96 items-center justify-center bg-neutral-700 bg-cover bg-blend-overlay"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h3 className="text-white">Volunteer</h3>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
