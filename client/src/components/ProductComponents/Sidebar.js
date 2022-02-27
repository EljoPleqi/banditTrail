import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';

const Sidebar = (
  {
    setBrand,
    setCondition,
    setLoaded,
    setType,
    setRidingStyle,
    setFilteredData,
  },
  products
) => {
  const productData = useSelector((state) => state.products);

  const getProductDetails = (prop) => {
    const x = productData.map((data) => data[prop]);
    return x;
  };

  const createSet = (arr) => ['Select', ...new Set(arr)];

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
    <div className="hidden flex-col items-center bg-neutral-100 md:visible lg:flex lg:h-full lg:pt-8">
      <div className="flex flex-col gap-4">
        <label htmlFor="type">Search by Bike Type</label>
        <select
          name="type"
          className="  px-2 py-4"
          onChange={(e) => setType(e.target.value)}
        >
          {displayItems(createSet(getProductDetails('type')))}
        </select>
        <label htmlFor="Brand">Search by Brand</label>
        <select
          name="brand"
          className="  px-2 py-4"
          onChange={(e) => setBrand(e.target.value)}
        >
          {displayItems(createSet(getProductDetails('brand')))}
        </select>
        <label htmlFor="ridingStyle">Search by Riding Style</label>
        <select
          name="ridingStyle"
          className="  px-2 py-4"
          onChange={(e) => setRidingStyle(e.target.value)}
        >
          {displayItems(createSet(getProductDetails('ridingStyle')))}
        </select>
        <div className="flex gap-2">
          <span>
            <input type="checkbox" id="new" />
            <label className="" htmlFor="new">
              New
            </label>
          </span>
          <span>
            <input type="checkbox" id="used" />
            <label className="" htmlFor="used">
              Used
            </label>
          </span>
        </div>
        <div className="cursor-pointer  py-2  hover:rounded-md hover:bg-neutral-300">
          <span
            onClick={() => {
              setFilteredData([]);
              setLoaded(false);
            }}
            className="flex items-center gap-2"
          >
            Clear Filters <XCircleIcon className="h-6 w-6" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
