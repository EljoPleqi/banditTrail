import React from 'react';
import SignUpForm from '../components/SignUpForm';
import SignUpImg from '../img/adrien-vajas-o3_3a_EyNnY-unsplash.jpg';

const SignUp = () => {
  return (
    <div className="grid grid-cols-2 min-h-full content-center">
      <div className="flex items-center">
        <SignUpForm />
      </div>
      <div
        style={{ backgroundImage: `url(${SignUpImg})` }}
        className="bg-cover h-screen"
      >
        <h1>Collumn 2</h1>
      </div>
    </div>
  );
};

export default SignUp;
