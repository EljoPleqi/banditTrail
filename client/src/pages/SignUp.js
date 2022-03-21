import React from 'react';
import SignUpForm from '../components/UserAuthentication/SignUpForm';
import SignUpImg from '../img/victoria-poveda-0DAwKglHOAY-unsplash.webp';

const SignUp = () => {
  return (
    <div
      className="flex h-screen flex-col justify-center bg-neutral-600 bg-cover bg-center bg-blend-overlay md:items-end"
      style={{ backgroundImage: `url(${SignUpImg})` }}
    >
      <SignUpForm />
    </div>
  );
};

export default SignUp;
