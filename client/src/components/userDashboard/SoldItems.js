import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SoldItems = ({ UserId }) => {
  const [soldItems, setSoldItems] = useState([]);

  useEffect(() => {
    axios
      .post(`http://127.0.0.1:8000/api/products/sold`, { UserId })
      .then((res) => {
        console.log(res.data);
        setSoldItems(res.data);
      });
  }, []);

  const totalEarnings = soldItems
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr);
  console.log(totalEarnings);

  console.log(soldItems);

  const displaySoldItems = soldItems.map((item, i) => {
    return (
      <div className="flex items-center justify-between gap-4 p-4 " key={i}>
        {' '}
        <div className="flex flex-col gap-2">
          <img
            src={`http://127.0.0.1:8000/${item.featuredImage}`}
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
        {displaySoldItems}
        <div className="  mt-4 rounded-md bg-neutral-200 p-4 ">
          <div className="flex justify-between ">
            <h3>Total Earnings</h3>
            <span className="flex gap-2">
              <span>{totalEarnings}</span>
              <span>{soldItems[0].currency}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldItems;
