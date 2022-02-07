import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../features/login';

const SignUpForm = () => {
  const dispatch = useDispatch();

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

    axios.post('http://127.0.0.1:8000/users', user).then((res) => {
      dispatch(setLogin(true));
    });
  };

  return (
    <div className="flex flex-col  items-center ">
      <h1 className="p-6 text-5xl">Riding That Doesn't Break The Bank</h1>
      <h2 className="px-6 text-xl ">
        Join the biggest community of riders that want to make mountain biking
        affordable
      </h2>
      <div className="mt-12 flex flex-col px-12 ">
        <form
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4">
            <label>Enter your Email</label>
            <input
              type="text"
              className="rounded-md bg-slate-100 py-4 px-16"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-4">
                <div className="flex flex-col py-1">
                  <label>Enter your Username</label>
                  <input
                    type="text"
                    className="rounded-md bg-slate-100 py-4 px-16"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-1">
                  <label>Enter your Password</label>
                  <input
                    type="password"
                    className="rounded-md bg-slate-100 py-4 px-16"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col py-1">
                <label>what is your riding experience</label>
                <select
                  className="rounded-md bg-slate-100 py-4 px-16"
                  onChange={(e) => setUserRidingStyle(e.target.value)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="Daredevil">Daredevil</option>
                  <option value="trailBlazer">Trailblazer</option>
                </select>
              </div>
              <div className="flex flex-col py-1">
                <label>Enter your phone</label>
                <input
                  type="tel"
                  className="rounded-md bg-slate-100 py-4 px-16"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col py-1">
              <label>Upload your Profile Picture</label>
              <input
                type="file"
                name="avatar"
                onChange={(e) => {
                  console.log(e.target);
                  setAvatar(e.target.files[0]);
                }}
              ></input>
            </div>

            <div className="flex gap-4">
              <a
                href="login"
                className="rounded-md border-2 border-solid border-neutral-700 py-4 px-8"
              >
                Login
              </a>
              <button
                type="submit"
                className="rounded-lg bg-neutral-700 py-4 px-24 text-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
