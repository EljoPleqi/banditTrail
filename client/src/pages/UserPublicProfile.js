import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileCover from '../img/kay-liedl-zV3cZTAQ0xo-unsplash.jpg';

const UserPublicProfile = () => {
  const [userData, setUserData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const username = 'eljo';

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/users/${username}`, { username: username })
      .then((res) => {
        setUserData(res.data);
        setLoaded(loaded);
      });
  }, []);

  return (
    <>
      <div className="h-screen">
        <div
          className=" h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${profileCover})` }}
        ></div>
        <div className="grid-cols-oneThree mt-4 grid h-max gap-8"></div>
        <div className="z-10 flex gap-8  ">
          <img
            src={`http://127.0.0.1:8000/${userData.avatar}`}
            alt="user avatar"
            className="-mt-20 ml-16 h-40 w-40 rounded-full bg-white object-cover p-2 "
          />
          <div className=" flex flex-col gap-2">
            <p className="">{userData.username}</p>
            <div className="flex gap-2">
              <p>Rider's Experience:</p>
              <p>{userData.userRidingStyle}</p>
            </div>
            <p></p>
          </div>
          <div className="border-l-2 border-solid border-neutral-100 px-4">
            <div className="flex justify-end ">
              <h2>{`${userData.username}'s Active Listings`}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPublicProfile;
