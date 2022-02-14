import React, { useState } from 'react';

const AccountInformation = () => {
  const [changeUsername, setChangeUsername] = useState(false);
  const [changeProfilePicture, setChangeProfilePicture] = useState('');
  const [changePassword, setChangePassword] = useState('');
  const [changeRidingStyle, setChangeRidingStyle] = useState('');
  return (
    <>
      <div
        className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 px-24 hover:bg-neutral-300"
        onClick={() => setChangeUsername(!changeUsername)}
      >
        <h2>Update your username</h2>
        {changeUsername && (
          <input type="text" className="mt-2 rounded-md px-48 py-3" />
        )}
      </div>
      <div
        className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 px-24 hover:bg-neutral-300"
        onClick={() => setChangeProfilePicture(!changeProfilePicture)}
      >
        <h2>Update your profile picture</h2>
        {changeProfilePicture && (
          <input type="file" className="mt-2 rounded-md px-48 py-3" />
        )}{' '}
      </div>
      <div
        className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 px-24 hover:bg-neutral-300"
        onClick={() => setChangePassword(!changePassword)}
      >
        <h2>Update your password</h2>
        {changePassword && (
          <input type="text" className="mt-2 rounded-md px-48 py-3" />
        )}
      </div>
      <div
        className="w-full cursor-pointer border-b-2 border-neutral-200 py-8 px-24 hover:bg-neutral-300"
        onClick={() => setChangeRidingStyle(!changeRidingStyle)}
      >
        <h2>Update your riding style</h2>
        {changeRidingStyle && (
          <select className="mt-2 rounded-md px-48 py-3"></select>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 place-self-end rounded-md bg-green-700 py-4 px-10 text-white"
      >
        {' '}
        Save Changes
      </button>
    </>
  );
};

export default AccountInformation;
