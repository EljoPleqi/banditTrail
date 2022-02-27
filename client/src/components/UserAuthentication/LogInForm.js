import React, { useState } from 'react';
import axios from 'axios';
import { loginFormValidation } from '../../validations/Validations';

import { setLogin } from '../../features/login';
import { setUserData } from '../../features/userData';

import { useSelector, useDispatch } from 'react-redux';
import useUserRedirect from '../../hooks/useUserRedirect';

const LogInForm = () => {
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { username, password };

    if (loginFormValidation.isValid(user)) {
      axios.post('http://localhost:8000/users/login', user).then((res) => {
        console.log(res.data);
        if (res.data.error) {
          alert(res.data.error);
        } else {
          dispatch(setLogin(true));
          dispatch(setUserData(res.data));
        }
      });
    }
  };
  useUserRedirect(login);

  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-lg bg-neutral-100 p-8 lg:h-[32rem] lg:w-[32rem]  lg:gap-10">
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
              className="m-2  rounded-xl border-2 py-4 placeholder:p-4 lg:py-6 lg:px-24"
            />
            <input
              type="text"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="m-2  rounded-xl border-2 py-4 placeholder:p-4 lg:py-6 lg:px-24"
            />

            <div className="flex items-center gap-6">
              <button
                type="submit"
                className="rounded-lg bg-neutral-700 py-4 px-16 text-white active:bg-green-600"
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
