import React from 'react';
import LogInForm from '../components/UserAuthentication/LogInForm';
import bgImg from '../img/adrien-vajas-o3_3a_EyNnY-unsplash.webp';

const Login = () => {
  return (
    <div
      className="flex h-screen flex-col justify-center bg-neutral-600 bg-cover bg-center bg-blend-overlay md:items-end"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <LogInForm />
    </div>
  );
};

export default Login;
