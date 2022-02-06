import React from 'react';
import SignUpForm from '../components/userAuthentication/SignUpForm';
import SignUpImg from '../img/miguel-mendes-EvrfZ9bAtY4-unsplash.jpg';

const SignUp = () => {
  return (
    <div className="grid min-h-full grid-cols-2 content-center">
      <div className="flex items-center">
        <SignUpForm />
      </div>
      <div
        style={{ backgroundImage: `url(${SignUpImg})` }}
        className="h-screen bg-cover"
      ></div>
    </div>
  );
};

export default SignUp;
