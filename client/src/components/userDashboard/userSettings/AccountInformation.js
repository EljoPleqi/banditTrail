import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccountInformation = ({
  userData: { username, avatar, password, ridingStyle },
}) => {
  const [changeUsername, setChangeUsername] = useState(false);
  const [changeProfilePicture, setChangeProfilePicture] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [changeRidingStyle, setChangeRidingStyle] = useState(false);

  const [newUsername, setNewUsername] = useState(username);
  const [newProfilePicture, setNewProfilePicture] = useState(avatar);
  const [newPassword, setNewPassword] = useState(password);
  const [newRidingStyle, setNewRidingStyle] = useState(ridingStyle);

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    axios.patch(`http://127.0.0.1:8000/users/${username}`, {
      username: newUsername,
      avatar: newProfilePicture,
      password: newPassword,
      ridingStyle: newRidingStyle,
    });
    return () => {
      setSubmit(false);
    };
  }, [submit]);

  return (
    <>
      <div
        className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 px-24 hover:bg-neutral-300"
        onClick={() => {
          setChangeUsername(!changeUsername);
        }}
      >
        <h2>Update your username</h2>
      </div>
      {changeUsername && (
        <input
          type="text"
          className="mt-2 rounded-md px-48 py-3"
          onChange={(e) => {
            console.log(e.target.value);
            setNewUsername(e.target.value);
          }}
          placeholder={username}
        />
      )}
      <div
        className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 px-24 hover:bg-neutral-300"
        onClick={() => setChangeProfilePicture(!changeProfilePicture)}
      >
        <h2>Update your profile picture</h2>
      </div>
      {changeProfilePicture && (
        <input
          type="file"
          className="mt-2 rounded-md px-48 py-3"
          onChange={(e) => setNewProfilePicture(e.target.value)}
        />
      )}
      <div
        className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 px-24 hover:bg-neutral-300"
        onClick={() => setChangePassword(!changePassword)}
      >
        <h2>Update your password</h2>
      </div>
      {changePassword && (
        <input
          type="text"
          className="mt-2 rounded-md px-48 py-3"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      )}
      <div
        className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 px-24 hover:bg-neutral-300"
        onClick={() => setChangeRidingStyle(!changeRidingStyle)}
      >
        <h2>Update your riding style</h2>
      </div>
      {changeRidingStyle && (
        <select
          className="mt-2 rounded-md px-48 py-3"
          onChange={(e) => setNewRidingStyle(e.target.value)}
        ></select>
      )}
      <button
        type="submit"
        className="mt-4 place-self-end rounded-md bg-green-700 py-4 px-10 text-white"
        onClick={() => setSubmit(!submit)}
      >
        Save Changes
      </button>
    </>
  );
};

export default AccountInformation;