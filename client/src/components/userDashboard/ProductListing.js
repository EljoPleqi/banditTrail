import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductListing = ({ userData: { id } }) => {
  const [userListings, setUserListings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/by_userId/${id}`)
      .then((res) => {
        setUserListings(res.data);
      });
  }, [id]);

  const displayListings = userListings.map((listing) => {
    return (
      <table className="mt-4 table-auto rounded-md border-b-2 border-solid border-neutral-100 p-4 text-sm">
        <thead>
          <tr className=" ">
            <th className="px-4 font-light">Product Image</th>
            <th className="px-4 font-light">Product Title</th>
            <th className="px-4 font-light">Product Description</th>
            <th className="px-4 font-light">Price</th>
          </tr>
        </thead>
        <tbody className="">
          <td>
            <img
              src={`http://127.0.0.1:8000/${listing.featuredImage}`}
              alt="listed product"
              className="w-36 px-4 py-10"
            />
          </td>

          <td className="px-4 py-10">{listing.productTitle}</td>

          <td className="px-4 py-10">{listing.productDescription}</td>

          <td className="px-8 py-10">
            <p className="flex ">{`${listing.price} ${listing.currency}`}</p>
          </td>
        </tbody>
      </table>
    );
  });
  return <div>{displayListings}</div>;
};
export default ProductListing;
