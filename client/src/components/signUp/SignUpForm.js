import React from 'react';

const SignUpForm = () => {
  return (
    <div className="flex flex-col  items-center ">
      <h1 className="text-6xl p-6">Riding That Doesn't Break The Bank</h1>
      <h2 className="text-2xl px-6 ">
        Join the biggest community of riders that want to make mountain biking
        affordable
      </h2>
      <div className="flex flex-col p-10 ">
        <input
          type="text"
          placeholder="Enter your username"
          className="border-2 rounded-xl py-6 px-32 m-2 text-2xl placeholder:p-4"
        />
        <input
          type="text"
          placeholder="Enter your password"
          className="border-2 rounded-xl py-6 px-32 m-2 text-2xl placeholder:p-4"
        />
        <input
          type="text"
          placeholder="Comfirm your password"
          className="border-2 rounded-xl py-6 px-32 m-2 text-2xl placeholder:p-4"
        />
      </div>
      <div className="flex gap-2 justify-between">
        <button className="py-4 px-24 text-white bg-slate-700 rounded-lg">
          Sign Up
        </button>
        <a
          href="/Login"
          className="py-4 px-24 border-solid border-2 border-slate-700 rounded-lg"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default SignUpForm;
