import React, { useEffect } from 'react';
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
  setVisible,
}) => {
  // Get all default state from the DB
  const productData = useSelector((state) => state.products);

  // set filtered products in filtered data

  // get filtered data from the server
  useEffect(() => {
    const filteredRequest = {
      brand: brand,
      type: type,
      ridingStyle: ridingStyle,
      condition: condition,
    };
    axios
      .post(' http://localhost:8000/api/products/filtered', filteredRequest)
      .then((res) => setFilteredData(res.data));
    setLoaded(true);
    return () => setLoaded(false);
  }, [type, brand, ridingStyle, condition, setFilteredData, setLoaded]);

  const displayData =
    // if the length of filtered data is greater than 0 then map over the filtered array if not map over the default product data
    (filteredData.length > 0 ? filteredData : productData)
      .slice(0, visible)
      .map((data, i) => (
        <Link
          to={`products/${data.id}`}
          className="m-2 text-sm hover:scale-105 hover:shadow-md hover:transition-all"
          key={i}
        >
          <div className="flex min-h-full flex-col gap-6 rounded-t-lg  bg-white">
            <div className="p-5 ">
              <img
                src={` http://localhost:8000/${data.featuredImage}`}
                alt=""
                className="object-cover "
              />
            </div>
            <div>
              <div
                className={`flex items-start justify-between  bg-neutral-100 p-5`}
              >
                <div className="flex flex-col justify-between gap-1">
                  <p>Brand: {data.brand}</p>
                  <p>Title: {data.productTitle}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">
                      Price: {`${data.price} ${data.currency}`}
                    </p>
                  </div>
                </div>
                <p
                  className={` rounded-lg px-2 py-1 text-xs ${
                    data.condition
                      ? 'bg-banditGreen-500 text-white'
                      : 'bg-banditYellow-500'
                  }`}
                >{`${data.condition ? 'New' : 'Used'}`}</p>
              </div>
            </div>
          </div>
        </Link>
      ));

  return (
    <div>
      {filteredData.length <= 0 && loaded && (
        <div className="flex items-center justify-center text-xl font-light">
          <h2>No results found...😱 here are the latest listings insted 👇 </h2>
        </div>
      )}
      <div className="grid grid-cols-1 gap-3 py-8 px-12 md:grid-cols-2 lg:grid-cols-4 lg:py-6">
        {displayData}
      </div>
    </div>
  );
};

export default ProductCard;
