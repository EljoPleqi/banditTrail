import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SoldItems = ({ UserId }) => {
  const [soldItems, setSoldItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .post(` http://localhost:8000/api/products/sold`, {
        UserId,
      })
      .then((res) => {
        setSoldItems(res.data);
        setLoaded(true);
      });
  }, []);

  const displaySoldItems = soldItems.map((item, i) => {
    return (
      <div className="flex items-center justify-between gap-4 p-4 " key={i}>
        {' '}
        <div className="flex flex-col gap-2">
          <img
            src={` http://localhost:8000/${item.featuredImage}`}
            alt=""
            className="h-16 w-auto"
          />
        </div>
        <p>{item.productTitle}</p>
        <div>
          <p className="flex justify-center gap-2">
            {item.price}
            <span>{item.currency}</span>
          </p>
        </div>
      </div>
    );
  });
  // let totalEarnings;

  // if (loaded) {
  //   totalEarnings = soldItems
  //     .map((item) => item.price)
  //     .reduce((prev, curr) => prev + curr);
  // } else {
  //   totalEarnings = 0;
  // }

  return (
    <div className="flex h-full flex-col">
      <div className=" mb-6 flex justify-between border-b-2 border-neutral-100 bg-neutral-50 py-4 px-6 font-light">
        <h3>Listing Image</h3>
        <h3>Listing Name</h3>
        <h3>Listing Price</h3>
      </div>
      <div
        className="flex flex-col justify-between
      "
      >
        {displaySoldItems ? displaySoldItems : 'LOADING'}
        <div className="  mt-4 rounded-md bg-neutral-200 p-4 ">
          <div className="flex justify-between ">
            <h3>Total Earnings</h3>
            <span className="flex gap-2">
              {/* <span>{totalEarnings ? totalEarnings : 'LOADING..'}</span> */}
              US$
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldItems;
