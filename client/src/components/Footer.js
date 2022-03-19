import React from 'react';

const Footer = () => {
  return (
    <div className="grid-cols-threeTwo grid bg-neutral-900 p-12 text-sm text-neutral-300 md:py-48 md:px-24 ">
      <div className="grid grid-cols-3 gap-12  border-r-2 border-solid border-neutral-100 border-opacity-25">
        <div>
          <h2 className=" text-lg text-neutral-200">Resources</h2>
          <ul className="mt-4 flex cursor-pointer flex-col gap-2 text-sm  ">
            <li className=" font-light hover:text-orange-500 ">
              Why Bandit Trail
            </li>
            <li className=" font-light hover:text-orange-500 ">
              Account Information
            </li>
            <li className=" font-light hover:text-orange-500 ">
              How to Performe a Bike Safety Check
            </li>
            <li className=" font-light hover:text-orange-500 ">Blog</li>
            <li className=" font-light hover:text-orange-500 ">Trail Guide</li>
            <li className=" font-light hover:text-orange-500 ">Glossary</li>
          </ul>
        </div>
        <div>
          <h2 className=" text-lg text-neutral-200">Account Information</h2>
          <ul className="mt-4 flex cursor-pointer flex-col gap-2 text-sm  ">
            <li className=" font-light hover:text-orange-500 ">
              Open An Account
            </li>
            <li className=" font-light hover:text-orange-500 ">Login</li>
            <li className=" font-light hover:text-orange-500 ">
              Request Account Support
            </li>
            <li className=" font-light hover:text-orange-500 ">
              GDPR Data Information
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-lg text-neutral-200">Social Media </h2>
          <ul className="mt-4 flex cursor-pointer flex-col gap-2 text-sm  ">
            <li className=" font-light hover:text-orange-500 ">Twitter</li>
            <li className=" font-light hover:text-orange-500 ">Tik Tok</li>
            <li className=" font-light hover:text-orange-500 ">Reddit</li>
            <li className=" font-light hover:text-orange-500 ">Instagram</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 pl-8">
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
