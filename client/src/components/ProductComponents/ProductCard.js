import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductCard = ({
  type,
  brand,
  ridingStyle,
  condition,
  filteredData,
  setFilteredData,
  setLoaded,
  loaded,
  visible,
  listingType,
  size,
  wheelSize,
  gender,
  priceRange,
  setVisible,
}) => {
  // Get all default state from the DB
  const productData = useSelector((state) => state.products);
  const [sorting, setSorting] = useState('');
  const [sortingFunction, setSortingFunction] = useState(function () {
    return function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    };
  });

  // get filtered data from the server
  useEffect(() => {
    const filteredRequest = {
      brand: brand,
      listingType: listingType,
      type: type,
      ridingStyle: ridingStyle,
      condition: condition,
      size: size,
    };
    axios
      .post(' http://localhost:8000/api/products/filtered', filteredRequest)
      .then((res) => setFilteredData(res.data));
    setLoaded(true);
    return () => setLoaded(false);
  }, [
    type,
    brand,
    ridingStyle,
    condition,
    setFilteredData,
    setLoaded,
    listingType,
    size,
    wheelSize,
    gender,
    priceRange,
  ]);

  // create the high level function that returns the sorting logic function

  useEffect(() => {
    const sortingLogic = () => {
      if (sorting === 'Newest' || '')
        setSortingFunction(function () {
          return function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          };
        });
      if (sorting === 'Oldest')
        setSortingFunction(function () {
          return function (a, b) {
            return new Date(a.createdAt) - new Date(b.createdAt);
          };
        });

      if (sorting === 'Price (Low to High)')
        setSortingFunction(function () {
          return function (a, b) {
            return a.price - b.price;
          };
        });

      if (sorting === 'Price (High to Low)')
        setSortingFunction(function () {
          return function (a, b) {
            return b.price - a.price;
          };
        });
    };

    sortingLogic();
  }, [sorting]);
  console.log(sortingFunction);
  console.log(sorting);

  const displayData =
    // if the length of filtered data is greater than 0 then map over the filtered array if not map over the default product data
    (filteredData.length > 0 ? filteredData : productData)

      .slice(0, visible)
      .sort(sortingFunction) // sort items by newest first
      .map((data, i) => (
        <Link
          to={`products/${data.id}`}
          className="flex-grow-1  m-2  text-sm hover:scale-105 hover:shadow-md  hover:transition-all"
          key={i}
        >
          <div className="flex flex-col rounded-t-lg  bg-white">
            <div className="h-44 w-52 p-4">
              <img
                src={` http://localhost:8000/${data.featuredImage}`}
                alt="product"
              />
            </div>
            <div>
              <div className="flex justify-start gap-4 p-5">
                <p
                  className={` rounded-lg px-2 py-1 text-xs  ${
                    data.condition
                      ? 'bg-banditGreen-500 text-white'
                      : 'bg-banditYellow-500'
                  }`}
                >{`${data.condition ? 'New' : 'Used'}`}</p>
                <p className="bg-banditYellow-500 rounded-lg px-2 py-1 text-xs ">
                  {data.type}
                </p>
              </div>
              <div
                className={`flex items-start justify-between bg-neutral-100 p-5`}
              >
                <div className="flex flex-col justify-between gap-1">
                  <p>Brand: {data.brand}</p>
                  <p>Title: {data.productTitle.slice(0, 10)}... </p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">
                      Price: {`${data.price} ${data.currency}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ));

  return (
    <div className="">
      <div className="ml-16 flex gap-2 place-self-end p-2 text-sm">
        <p>Filter by:{''}</p>
        <select
          className="flex cursor-pointer items-center gap-2 font-medium hover:bg-neutral-100"
          onChange={(e) => {
            setSorting(e.target.value);
          }}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Price (Low to High)">Price (Low to High)</option>
          <option value="Price (High to Low)">Price (High to Low)</option>
        </select>
      </div>

      {filteredData.length <= 0 && loaded && (
        <div>
          <div className="flex items-center justify-center text-xl font-light">
            <h2>
              No results found...😱 here are the latest listings insted 👇{' '}
            </h2>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-3 overscroll-auto py-8 px-12 md:grid-cols-2 lg:grid-cols-4 lg:py-6">
        {displayData}
      </div>
    </div>
  );
};

export default ProductCard;
