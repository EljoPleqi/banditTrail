import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../features/user';

const LogInForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCred = { username, password };

    axios.post('http://127.0.0.1:3007/api/user', userCred).then(() => {
      dispatch(setLogin(true));
    });
  };
  return (
    <>
      <div className="flex h-[32rem] w-[32rem] flex-col items-center  justify-center gap-10 rounded-lg bg-gray-50">
        <div className="logo px-5 text-3xl font-bold">BANDIT TRAIL</div>
        <form method="POST" encType="multipart/form-data">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              className="m-2  rounded-xl border-2 py-6 px-24 text-2xl placeholder:p-4"
            />
            <input
              type="text"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="m-2  rounded-xl border-2 py-6 px-24 text-2xl placeholder:p-4"
            />
          </div>
          <div className="flex items-center gap-6">
            <Link to={'/user-dashboard'}>
              <button
                onSubmit={handleSubmit}
                className="rounded-lg bg-slate-700 py-4 px-16 text-white"
              >
                Log in
              </button>
            </Link>
            <a
              href="/"
              // className="py-4 px-16 border-solid border-2 border-slate-700 rounded-lg"
            >
              Forgot Password
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogInForm;
