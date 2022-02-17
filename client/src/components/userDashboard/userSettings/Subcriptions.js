import React from 'react';

const Subcriptions = () => {
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

  const subscriptionsCard = subscriptions.map((sub) => (
    <div className="flex h-96 w-64 flex-col items-center justify-center rounded-md bg-white hover:shadow-md ">
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
    <div className="flex items-center justify-center gap-8 ">
      {subscriptionsCard}
    </div>
  );
};

export default Subcriptions;
