import React, { useState } from 'react';
import axios from 'axios';
import { loginFormValidation } from '../../validations/Validations';
import { LoginIcon } from '@heroicons/react/outline';

import { setLogin } from '../../features/login';
import { setUserData } from '../../features/userData';
import { setNotification } from '../../features/notifications';

import { useSelector, useDispatch } from 'react-redux';
import useUserRedirect from '../../hooks/useUserRedirect';

const LogInForm = () => {
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { username, password };

    if (loginFormValidation.isValid(user)) {
      axios.post(' http://localhost:8000/users/login', user).then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          dispatch(setLogin(true));
          dispatch(setUserData(res.data));
          dispatch(setNotification(true));
          setTimeout(() => {
            dispatch(setNotification(false));
          }, 3000);
        }
      });
    }
  };
  useUserRedirect(login);

  return (
    <>
      <div className=" flex h-screen flex-col items-center justify-center gap-4 bg-white/30 p-8 backdrop-blur-md  lg:w-[50%]">
        <div className="px-5 text-3xl font-bold text-white">BANDIT TRAIL</div>
        <form
          onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              className="m-2 border-b-2 border-white bg-white/0 py-4 placeholder:px-4 placeholder:text-white lg:w-96 lg:py-4"
            />
            <input
              type="password"
              password={password.toString()}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="m-2 border-b-2 border-white bg-white/0 py-4 placeholder:px-4  placeholder:text-white lg:w-96 lg:py-4"
            />
            <span className="place-self-start pt-4 text-sm text-white">
              Forgot your password?{' '}
              <a href="/" className="underline ">
                Recover it
              </a>
            </span>

            <div className="w-full pt-6 lg:place-self-start lg:pt-20">
              <button
                type="submit"
                className="active:bg-banditGreen-800 hover:bg-banditYellow-600 flex w-full items-center justify-center gap-2  bg-white py-4 px-16 text-black hover:text-black"
              >
                <LoginIcon className="h-6 w-6" /> Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogInForm;
