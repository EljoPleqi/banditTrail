import React from 'react';
import SignUpForm from '../components/signUp/SignUpForm';
import SignUpImg from '../img/miguel-mendes-EvrfZ9bAtY4-unsplash.jpg';

const SignUp = () => {
  return (
    <div className="grid grid-cols-2 min-h-full content-center">
      <div className="flex items-center">
        <SignUpForm />
      </div>
      <div
        style={{ backgroundImage: `url(${SignUpImg})` }}
        className="bg-cover h-screen"
      ></div>
    </div>
  );
};

export default SignUp;
