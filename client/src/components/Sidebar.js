import React from 'react';
import { AdjustmentsIcon } from '@heroicons/react/outline';

const Sidebar = ({ productData }) => {
  const getProductDetails = (prop) => {
    const x = productData.map((data) => data.details[prop]);
    return x;
  };

  const createSet = (arr) => [...new Set(arr)];

  const displayItems = (arr) => {
    const el = arr.map((data, i) => {
      return (
        <option key={i} value={data}>
          {data}
        </option>
      );
    });
    return [...el];
  };

  return (
    <div className="flex flex-col">
      {/* <p className="flex">
        Filter <AdjustmentsIcon className="w-5 h-5" />
      </p> */}
      <div className="h-full bg-neutral-100 flex flex-col items-center pt-8">
        <div className="flex flex-col">
          <label htmlFor="category">Search by Product Category</label>
          <select name="category" className="my-5 py-5 rounded-md">
            {displayItems(createSet(getProductDetails('category')))}
          </select>
          <label htmlFor="type">Search by Bike Category</label>
          <select name="type" className="my-5 py-5 rounded-md">
            {displayItems(createSet(getProductDetails('type')))}
          </select>
          <label htmlFor="Brand">Search by Brand</label>
          <select name="brand" className="my-5 py-5 rounded-md">
            {displayItems(createSet(getProductDetails('brand')))}
          </select>
          <label htmlFor="ridingStyle">Search by Riding Style</label>
          <select name="ridingStyle" className="my-5 py-5 rounded-md">
            {displayItems(createSet(getProductDetails('ridingStyle')))}
          </select>
          <span>
            <input type="checkbox" id="new" />

            <label className="pl-5" htmlFor="new">
              New
            </label>
          </span>
          <span>
            <input type="checkbox" id="used" />
            <label className="pl-5" htmlFor="used">
              Used
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
