import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { switchSub } from '../../../features/subscription';

const Subcriptions = ({ sub, setSubModal }) => {
  const subscriptions = [
    {
      name: 'banditGreen',
      price: 0,
      description: 'Lorem ipsum dolor sit amet',
      freeListings: 10,
      pricePerListing: 2.99,
    },

    {
      name: 'Blue',
      price: 9.99,
      description: 'Lorem ipsum dolor sit amet',
      freeListings: 100,
      pricePerListing: 0.99,
    },
    {
      name: ' Black Diamond',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet',
      freeListings: 99999999,
      pricePerListing: 0,
    },
  ];

  const [activeSub, setActiveSub] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchSub(subscriptions[activeSub]));
  }, [activeSub]);

  const subscriptionsCard = subscriptions.map((sub, i) => (
    <div
      className={
        activeSub === i
          ? `${'border-2 border-blue-500'} flex cursor-pointer flex-col items-center justify-center  rounded-md bg-neutral-50 p-8 hover:shadow-md`
          : `flex cursor-pointer flex-col items-center justify-center  rounded-md bg-neutral-50 p-8 hover:shadow-md`
      }
      key={i}
      onClick={() => {
        setActiveSub(i);
        setSubModal(true);
      }}
    >
      <p className=" text-xl">{sub.name}</p>
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
    </div>
  );
};

export default Subcriptions;
