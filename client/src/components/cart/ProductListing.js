import React from 'react';

const ProductListing = () => {
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
        <img
          src="http://127.0.0.1:8000/public/img/product-imgs/1644160895931-.png"
          alt="listed product"
          className="w-36 px-4 py-10"
        />

        <td className="px-4 py-10">Canyon Spectral 29 CF9</td>

        <td className="px-4 py-10">Canyon Spectral 29 CF9</td>

        <td className="px-8 py-10">
          <p>6149 US$</p>
        </td>
      </tbody>
    </table>
  );
};
export default ProductListing;
