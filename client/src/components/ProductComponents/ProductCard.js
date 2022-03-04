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
      .post(
        ' https://bandit-trail.herokuapp.com/api/products/filtered',
        filteredRequest
      )
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
          href={` https://bandit-trail.herokuapp.com/products/${data.id}`}
          className="hover:scale-105 hover:shadow-md hover:transition-all"
          key={i}
        >
          <div className="flex min-h-full flex-col bg-white p-5">
            <div>
              <img
                src={` https://bandit-trail.herokuapp.com/${data.featuredImage}`}
                alt=""
                className="object-cover"
              />
            </div>
            <div className="py-5">
              <p>{data.productTitle}</p>
              <div className="flex items-center justify-between pt-5">
                <p>{`${data.price} ${data.currency}`}</p>
                {/* <p>Condition: {`${data.details.new ? 'New' : 'Used'}`}</p> */}
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
