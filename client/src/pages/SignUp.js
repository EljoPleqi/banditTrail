import React from 'react';
import SignUpForm from '../components/UserAuthentication/SignUpForm';
import SignUpImg from '../img/miguel-mendes-EvrfZ9bAtY4-unsplash.webp';

const SignUp = () => {
  return (
    <div className="grid min-h-full grid-cols-2 content-center">
      <div className="flex items-center">
        <SignUpForm />
      </div>
      <div
        style={{ backgroundImage: `url(${SignUpImg})` }}
        className="hidden h-screen bg-cover lg:block"
      ></div>
    </div>
  );
};

export default SignUp;
