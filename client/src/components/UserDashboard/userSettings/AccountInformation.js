import React, { useState } from 'react';
import axios from 'axios';

const AccountInformation = ({
  userData: { username, avatar, password, ridingStyle },
}) => {
  const [changeUsername, setChangeUsername] = useState(false);
  const [changeProfilePicture, setChangeProfilePicture] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [changeRidingStyle, setChangeRidingStyle] = useState(false);

  const [newUsername, setNewUsername] = useState(username);
  const [newProfilePicture, setNewProfilePicture] = useState('');
  const [newPassword, setNewPassword] = useState(password);
  const [newRidingStyle, setNewRidingStyle] = useState(ridingStyle);

  console.log(avatar);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = new FormData();
    updatedUser.append('username', newUsername);
    updatedUser.append('password', newPassword);
    updatedUser.append('userRidingStyle', newRidingStyle);
    updatedUser.append('avatar', newProfilePicture);

    axios
      .patch(` http://localhost:8000/users/${username}`, updatedUser)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div
          className=" flex w-full cursor-pointer flex-col border-b-2 border-neutral-200 py-8 hover:bg-neutral-200 lg:px-24"
          onClick={() => {
            setChangeUsername(!changeUsername);
          }}
        >
          <h2>Update your username</h2>
        </div>
        {changeUsername && (
          <input
            type="text"
            className="mt-2 rounded-md bg-neutral-50 py-3 lg:px-48"
            onChange={(e) => {
              setNewUsername(e.target.value);
            }}
            placeholder={username}
          />
        )}
        <div
          className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 hover:bg-neutral-200 lg:px-24"
          onClick={() => setChangeProfilePicture(!changeProfilePicture)}
        >
          <h2>Update your profile picture</h2>
        </div>
        {changeProfilePicture && (
          <input
            type="file"
            className="mt-2 rounded-md bg-neutral-50 py-3 lg:px-48"
            name="avatar"
            onChange={(e) => {
              setNewProfilePicture(e.target.files[0]);
            }}
          />
        )}
        <div
          className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 hover:bg-neutral-200 lg:px-24"
          onClick={() => setChangePassword(!changePassword)}
        >
          <h2>Update your password</h2>
        </div>
        {changePassword && (
          <input
            type="text"
            className="mt-2 rounded-md bg-neutral-50 py-3 lg:px-48"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        )}
        <div
          className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 hover:bg-neutral-200 lg:px-24"
          onClick={() => setChangeRidingStyle(!changeRidingStyle)}
        >
          <h2>Update your riding style</h2>
        </div>
        {changeRidingStyle && (
          <select
            className="mt-2 rounded-md bg-neutral-50 py-3 lg:px-48"
            onChange={(e) => setNewRidingStyle(e.target.value)}
          ></select>
        )}
        <button
          type="submit"
          className="hover:bg-banditYellow-500 active:bg-banditYellow-800 mt-4 place-self-end border-2 border-black  py-3 px-8"
        >
          Save Changes
        </button>
      </form>
    </>
  );
};

export default AccountInformation;
