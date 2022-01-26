import React from 'react';

const SignUpForm = () => {
  return (
    <div className="flex flex-col content-center ">
      <h1 className="text-6xl p-6">Riding That Doesn't Break The Bank</h1>
      <h2 className="text-2xl px-6 ">
        Join the biggest community of riders that want to make mountain biking
        affordable
      </h2>
      <div className="flex flex-col p-6">
        <input
          type="text"
          placeholder="Enter your username"
          className="border-2 border-rose-500 rounded-xl py-6 m-4 text-2xl placeholder:p-4"
        />
        <input
          type="text"
          placeholder="Enter your password"
          className="border-2 border-rose-500 rounded-xl py-6 m-4 text-2xl placeholder:p-4"
        />
        <input
          type="text"
          placeholder="Comfirm your password"
          className="border-2 border-rose-500 rounded-xl py-6 m-4 text-2xl placeholder:p-4"
        />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpForm;
