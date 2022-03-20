import React from 'react';
import Button from '../components/Button';
import img from '.././img/victoria-poveda-0DAwKglHOAY-unsplash.webp';
import img2 from '.././img/abi-schreider-IM9MTmfrOl4-unsplash.jpg';
import img3 from '.././img/andhika-soreng-US06QF_sxu8-unsplash.webp';
const AboutUs = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-neutral-600 bg-cover bg-center py-40  bg-blend-overlay"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <h1 className="text-4xl text-white shadow-sm">About Us</h1>
      </div>
      <div className="mx-8 ">
        <div className="flex flex-col gap-6 py-16">
          <h2 className="text-2xl font-bold">
            Why riding shouldn't break the bank
          </h2>
          <p>
            Hey there! Welcome to Bandit Trail! We're a local team that has a
            passion to connect mountain bikers with the right gear, at the right
            price. Whether you're new to the trail or an avid veteran, we strive
            to create a community where it's easy to find what you need, even if
            you didn't know you wanted it!
          </p>
          <p>
            Bandit Trail is a little different than some other online bike shops
            out there. It's all about the community, and we pride ourselves on
            promoting the sport while helping you get trail ready.
          </p>
        </div>
      </div>
      <div className="my-8 flex items-center justify-center lg:my-28 lg:mx-24">
        <div
          className="flex h-full w-[64rem] flex-col items-center justify-center gap-4 bg-neutral-700 bg-cover py-40 px-12 bg-blend-overlay"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <h2 className="text-xl text-white shadow-sm">
            Check out our selection and start saving today!
          </h2>
          <Button buttonText={'Learn More'} />
        </div>
      </div>
      <h2 className="text-center text-4xl">Help the community</h2>
      <div className="my-8 flex flex-col items-center justify-center gap-4 md:flex-row md:px-4 lg:my-28 lg:mx-24 lg:flex-row lg:gap-16">
        <div
          className="flex h-96 w-96 flex-col items-center justify-center bg-neutral-700 bg-cover bg-blend-overlay "
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
