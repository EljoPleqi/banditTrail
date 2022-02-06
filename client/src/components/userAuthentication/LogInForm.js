import React from 'react';
import { Link } from 'react-router-dom';

const LogInForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10  bg-gray-50 rounded-lg h-[32rem] w-[32rem]">
        <div className="px-5 logo text-3xl font-bold">LOGO</div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Enter your username"
            className="border-2  rounded-xl py-6 px-24 m-2 text-2xl placeholder:p-4"
          />
          <input
            type="text"
            placeholder="Enter your password"
            className="border-2  rounded-xl py-6 px-24 m-2 text-2xl placeholder:p-4"
          />
        </div>
        <div className="flex gap-6 items-center">
          <Link to={'/user-dashboard'}>
            <p className="py-4 px-16 text-white bg-slate-700 rounded-lg">
              Log in
            </p>
          </Link>
          <a
            href="/"
            // className="py-4 px-16 border-solid border-2 border-slate-700 rounded-lg"
          >
            Forgot Password
          </a>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
