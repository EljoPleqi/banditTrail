import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';

const Sidebar = (
  {
    setBrand,
    setCondition,
    setWheelSize,
    setPriceRange,
    setGender,
    setLoaded,
    setType,
    setSize,
    setRidingStyle,
    setListingType,
    setFilteredData,
    listingType,
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
    <div className="hidden flex-col items-center bg-neutral-100 md:visible lg:flex lg:h-full lg:py-8">
      <div className="flex flex-col gap-4 ">
        <label>Search by Product Type</label>
        <select
          className="px-2 py-4"
          onChange={(e) => setListingType(e.target.value)}
        >
          {displayItems(createSet(getProductDetails('listingType')))}
        </select>
        <label htmlFor="Brand">Search by Brand</label>
        <select
          className="px-2 py-4"
          onChange={(e) => setBrand(e.target.value)}
        >
          {displayItems(createSet(getProductDetails('brand')))}
        </select>
        <label htmlFor="Brand">Search by Price Range</label>
        <select
          className="px-2 py-4"
          onChange={(e) => setPriceRange(e.target.value)}
        >
          {displayItems(createSet(getProductDetails('priceRange')))}
        </select>

        <label htmlFor="ridingStyle">Search by Riding Style</label>
        <select
          className="px-2 py-4"
          onChange={(e) => setRidingStyle(e.target.value)}
        >
          {displayItems(createSet(getProductDetails('ridingStyle')))}
        </select>

        <label htmlFor="ridingStyle">Search by Sub-type</label>
        <select className="px-2 py-4" onChange={(e) => setType(e.target.value)}>
          {displayItems(createSet(getProductDetails('type')))}
        </select>
        <label>Search by Gender</label>
        <select
          className="px-2 py-4"
          onChange={(e) => setGender(e.target.value)}
        >
          {displayItems(createSet(getProductDetails('gender')))}
        </select>
        <label>Search by Wheel Size</label>
        <select
          className="px-2 py-4"
          onChange={(e) => setWheelSize(e.target.value)}
        >
          {displayItems(createSet(getProductDetails('wheelSize')))}
        </select>

        <div className="cursor-pointer  hover:rounded-md hover:bg-neutral-300">
          <span
            onClick={() => {
              setFilteredData([]);
              setLoaded(false);
            }}
            className="hover:bg-banditOrange-500  flex items-center  gap-2 border-2 border-black px-8 py-3"
          >
            <XCircleIcon className="h-6 w-6" /> Clear Filters
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
