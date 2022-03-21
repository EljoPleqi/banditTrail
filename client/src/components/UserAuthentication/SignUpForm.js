import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../features/login';
import { signUpFormValidation } from '../../validations/Validations';
import { setUserData } from '../../features/userData';
import useUserRedirect from '../../hooks/useUserRedirect';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userRidingStyle, setUserRidingStyle] = useState('');
  const [phone, setPhone] = useState(0);
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = new FormData();
    user.append('userEmail', email);
    user.append('username', username);
    user.append('password', password);
    user.append('userRidingStyle', userRidingStyle);
    user.append('phone', phone);
    user.append('avatar', avatar);

    if (signUpFormValidation.isValid(user)) {
      axios.post('http://localhost:8000/users', user).then((res) => {
        console.log(res.data);
        dispatch(setUserData(res.data));
        dispatch(setLogin(true));
      });
    }
  };

  useUserRedirect(login);

  return (
    <div className=" flex h-screen flex-col items-center justify-center gap-2 bg-white/30 p-8 backdrop-blur-md lg:w-[50%]  ">
      <h1 className="p-6 text-center text-xl font-bold   lg:text-4xl">
        Riding That Doesn't Break The Bank
      </h1>
      <h2 className="px-6 text-center text-lg lg:text-left ">
        Join the biggest community of riders that want to make mountain biking
        affordable
      </h2>
      <div className=" flex flex-col p-6 ">
        <form
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4">
            <label>Enter your Email</label>
            <input
              type="text"
              className=" bg-neutral-50 py-4 px-16"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="">
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex flex-col py-1">
                  <label>Enter your Username</label>
                  <input
                    type="text"
                    className=" bg-neutral-50 py-4 px-16"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-1">
                  <label>Enter your Password</label>
                  <input
                    type="password"
                    className=" bg-neutral-50 py-4 px-16"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex flex-col py-1">
                <label>what is your riding experience</label>
                <select
                  className=" bg-neutral-50 py-4 px-16"
                  onChange={(e) => setUserRidingStyle(e.target.value)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="Daredevil">Daredevil</option>
                  <option value="trailBlazer">Trailblazer</option>
                </select>
              </div>
              <div className="flex flex-col py-1">
                <label>Upload your Profile Picture</label>
                <input
                  type="file"
                  name="avatar"
                  onChange={(e) => {
                    setAvatar(e.target.files[0]);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center gap-8">
            <button
              type="submit"
              className="active:bg-banditGreen-800 hover:bg-banditYellow-400 bg-banditYellow-600 flex w-full items-center justify-center gap-2 border-2  border-black py-4 px-16 text-black hover:text-black"
            >
              Sign Up
            </button>
            <p>
              Already have an account? {''}{' '}
              <a href="login" className="underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
