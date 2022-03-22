import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { switchSub } from '../../../features/subscription';

const Subcriptions = ({ sub, setSubModal }) => {
  const subscriptions = [
    {
      name: 'Green',
      price: 0,
      description:
        "You don't pay a dime. Build your first 10 listings for free. After that, you pay a flat $2.99 per listing.",
      freeListings: 10,
      pricePerListing: 2.99,
    },

    {
      name: 'Blue',
      price: 9.99,
      description:
        "It's no hidden fee, no fine print, and no BS. Welcome to 100 listings for only $9.99! After that, you pay a flat $0.99 per listing.",
      freeListings: 100,
      pricePerListing: 0.99,
    },
    {
      name: ' Black Diamond',
      price: 19.99,
      description:
        "Oh yeah, you're a heavy hitter. No more limits, no more restrictions. We got you covered.",
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
      className={`
       hover:bg-banditGreen-500 flex cursor-pointer flex-col items-center justify-center gap-6 bg-neutral-50 p-8 hover:border-2 hover:border-black hover:text-white hover:shadow-md
       ${activeSub === i ? 'bg-banditYellow-500 border-2 border-black' : ''}`}
      key={i}
      onClick={() => {
        setActiveSub(i);
        setSubModal(true);
      }}
    >
      <p className="text-xl">{sub.name}</p>
      <p className="mb-4 w-52 text-center text-xs">{sub.description}</p>
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
