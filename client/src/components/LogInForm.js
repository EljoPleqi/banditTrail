import React from 'react';

const LogInForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-50 rounded-lg h-[32rem] w-[32rem]">
        <div className="px-5 logo text-3xl font-bold">LOGO</div>
        <input
          type="text"
          placeholder="Enter your username"
          className="border-2 border-rose-500 rounded-xl py-6 px-24 m-4 text-2xl placeholder:p-4"
        />
        <input
          type="text"
          placeholder="Enter your password"
          className="border-2 border-rose-500 rounded-xl py-6 px-24 m-4 text-2xl placeholder:p-4"
        />
        <a href="/">Forgot Password</a>
        <button>Log in </button>
      </div>
    </>
  );
};

export default LogInForm;
