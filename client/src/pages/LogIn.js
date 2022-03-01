import React from 'react';
import LogInForm from '../components/UserAuthentication/LogInForm';
import bgImg from '../img/adrien-vajas-o3_3a_EyNnY-unsplash.webp';

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
