import React from 'react';

const Footer = () => {
  return (
    <div>
      <ul className="flex flex-col bg-slate-900  text-white p-48">
        <li className="px-5 text-xl text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
          Sign Up
        </li>
        <li className="px-5 text-xl text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
          nav-item
        </li>
        <li className="px-5 text-xl text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
          nav-item
        </li>
        <li className="px-5 text-xl text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
          nav-item
        </li>
      </ul>
    </div>
  );
};

export default Footer;
