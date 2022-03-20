import React from 'react';

const Footer = () => {
  return (
    <div className="md:grid-cols-threeTwo flex flex-col gap-16 bg-neutral-900 p-12 text-sm text-neutral-300 md:grid md:gap-2 md:py-48 md:px-24 ">
      <div className=" flex flex-col gap-12 border-opacity-25 md:grid  md:grid-cols-3 md:border-r-2 md:border-solid md:border-neutral-100">
        <div>
          <h2 className=" text-lg text-neutral-200">Resources</h2>
          <ul className="mt-4 flex cursor-pointer flex-col gap-2 text-sm  ">
            <li className=" hover:text-banditGreen-500 font-light ">
              Why Bandit Trail
            </li>
            <li className=" hover:text-banditGreen-500 font-light ">
              Account Information
            </li>
            <li className=" hover:text-banditGreen-500 font-light ">
              How to Performe a Bike Safety Check
            </li>
            <li className=" hover:text-banditGreen-500 font-light ">Blog</li>
            <li className=" hover:text-banditGreen-500 font-light ">
              Trail Guide
            </li>
            <li className=" hover:text-banditGreen-500 font-light ">
              Glossary
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-lg text-neutral-200">Account Information</h2>
          <ul className="mt-4 flex cursor-pointer flex-col gap-2 text-sm  ">
            <li className=" hover:text-banditGreen-500 font-light ">
              Open An Account
            </li>
            <li className=" hover:text-banditGreen-500 font-light ">Login</li>
            <li className=" hover:text-banditGreen-500 font-light ">
              Request Account Support
            </li>
            <li className=" hover:text-banditGreen-500 font-light ">
              GDPR Data Information
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-lg text-neutral-200">Social Media </h2>
          <ul className="mt-4 flex cursor-pointer flex-col gap-2 text-sm  ">
            <li className=" hover:text-banditGreen-500 font-light ">Twitter</li>
            <li className=" hover:text-banditGreen-500 font-light ">Tik Tok</li>
            <li className=" hover:text-banditGreen-500 font-light ">Reddit</li>
            <li className=" hover:text-banditGreen-500 font-light ">
              Instagram
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:pl-8">
        <h2 className="text-3xl font-bold">Bandit Trail</h2>
        <p className="font-thin text-neutral-300">
          We're a local team that has a passion to connect mountain bikers with
          the right gear, at the right price. Whether you're new to the trail or
          an avid veteran, we strive to create a community where it's easy to
          find what you need, even if you didn't know you wanted it!
        </p>
      </div>
    </div>
  );
};

export default Footer;
