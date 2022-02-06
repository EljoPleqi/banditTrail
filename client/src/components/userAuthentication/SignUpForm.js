import axios from 'axios';
import React, { useState } from 'react';
const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [phone, setPhone] = useState(0);
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = new FormData();
    user.append('email', email);
    user.append('username', username);
    user.append('password', password);
    user.append('conPassword', conPassword);
    user.append('phone', phone);
    user.append('avatar', avatar);

    axios.post('127.0.0.1:3007/users').then((res) => {});
  };

  return (
    <div className="flex flex-col  items-center ">
      <h1 className="p-6 text-5xl">Riding That Doesn't Break The Bank</h1>
      <h2 className="px-6 text-xl ">
        Join the biggest community of riders that want to make mountain biking
        affordable
      </h2>
      <div className="mt-12 flex flex-col px-12 ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <label>Enter your Email</label>
            <input
              type="email"
              className="rounded-md bg-slate-100 py-4 px-16"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-4">
                <div className="flex flex-col py-1">
                  <label>Enter your Password</label>
                  <input
                    type="text"
                    className="rounded-md bg-slate-100 py-4 px-16"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-1">
                  <label>Confirm Your Password</label>
                  <input
                    type="text"
                    className="rounded-md bg-slate-100 py-4 px-16"
                    onChange={(e) => setConPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col py-1">
                <label>Enter your Username</label>
                <input
                  type="text"
                  className="rounded-md bg-slate-100 py-4 px-16"
                  onChange={(e) => setUsername(e.target.value)}
                />
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
                onChange={(e) => setAvatar(e.target.value)}
              ></input>
            </div>

            <div className="flex gap-4">
              <a
                href="/Login"
                className="rounded-md border-2 border-solid border-neutral-700 py-4 px-8"
              >
                Login
              </a>
              <button className="rounded-lg bg-neutral-700 py-4 px-24 text-white">
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
