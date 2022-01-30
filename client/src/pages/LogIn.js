import React from 'react';
import LogInForm from '../components/signUp/LogInForm';
import bgImg from '../img/william-hook-pa0rr3rVB-U-unsplash.jpg';

const LogIn = () => {
  return (
    <div
      className="bg-cover h-screen flex flex-col justify-center items-center "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <LogInForm />
    </div>
  );
};

export default LogIn;
