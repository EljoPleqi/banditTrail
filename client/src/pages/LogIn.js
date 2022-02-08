import React from 'react';
import LogInForm from '../components/userAuthentication/LogInForm';
import bgImg from '../img/william-hook-pa0rr3rVB-U-unsplash.jpg';

const Login = () => {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center bg-cover "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <LogInForm />
    </div>
  );
};

export default Login;
