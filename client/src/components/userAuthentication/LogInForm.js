import axios from 'axios';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setLogin } from '../../features/login';
import { setUserData } from '../../features/userData';

const LogInForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:8000/users/login', { username, password })
      .then((res) => {
        console.log(res.data);
        if (res.data.error) alert(res.data.error);
        sessionStorage.setItem('accessToken', res.data.accessToken);
        dispatch(setLogin(true));
        dispatch(setUserData(res.data.user));
        if (location.state?.from) navigate(location.state.from);
      });
  };

  return (
    <>
      <div className="bg-neutra-100 flex h-[32rem] w-[32rem] flex-col  items-center justify-center gap-10 rounded-lg bg-neutral-100">
        <div className="logo px-5 text-3xl font-bold">BANDIT TRAIL</div>
        <form
          onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={username}
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

            <div className="flex items-center gap-6">
              <button
                type="submit"
                className="rounded-lg bg-neutral-700 py-4 px-16 text-white"
              >
                Log in
              </button>

              <a
                href="/"
                // className="py-4 px-16 border-solid border-2 border-slate-700 rounded-lg"
              >
                Forgot Password
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogInForm;
