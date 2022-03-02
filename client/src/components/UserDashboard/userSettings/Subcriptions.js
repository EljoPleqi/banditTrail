import axios from 'axios';
import Popup from '../../notifications/Popup';
import Modal from '../../Modal/Modal';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotification } from '../../../features/notifications';

const Subcriptions = ({ sub, id }) => {
  const subscriptions = [
    {
      title: 'Green',
      price: 0,
      description: 'Lorem ipsum dolor sit amet',
      freeListings: 10,
      pricePerListing: 2.99,
    },

    {
      title: 'Blue',
      price: 9.99,
      description: 'Lorem ipsum dolor sit amet',
      freeListings: 100,
      pricePerListing: 0.99,
    },
    {
      title: ' Black Diamond',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet',
      freeListings: 'Unlimited',
      pricePerListing: 0,
    },
  ];

  const [activeSub, setActiveSub] = useState(0);

  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const switchSub = () => {
    axios
      .post(`http://localhost:8000/users/sub/${id}`, subscriptions[activeSub])
      .then((res) => {
        dispatch(setNotification(true));
        setTimeout(() => {
          dispatch(setNotification(false));
        }, 3000);
      });
  };

  const subscriptionsCard = subscriptions.map((sub, i) => (
    <div
      className={
        activeSub === i
          ? `${'border-2 border-blue-500'} flex flex-col items-center justify-center rounded-md  bg-neutral-50 p-8 hover:shadow-md`
          : `flex flex-col items-center justify-center rounded-md  bg-neutral-50 p-8 hover:shadow-md`
      }
      key={i}
      onClick={() => setActiveSub(i)}
    >
      <p className=" text-xl">{sub.title}</p>
      <p className="mb-4 text-xs ">{sub.description}</p>
      <p className="mb-2 text-lg ">
        {sub.price}$<span className="text-sm font-light"> /Per Year</span>
      </p>
      <ul className="text-sm">
        <li> Free listings: {sub.freeListings}</li>
        <li> Price Per Listing: {sub.pricePerListing}</li>
      </ul>
    </div>
  ));
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row ">
      {subscriptionsCard}
      {notification && <Popup />}
    </div>
  );
};

export default Subcriptions;
