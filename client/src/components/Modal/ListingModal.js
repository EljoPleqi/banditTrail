import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetProductsByProdcutId } from '../../hooks/useGetProducts';

const ListingModal = ({ id }) => {
  const {
    productTitle,
    price,
    productDescription,
    featuredImage,
    ridingStyle,
  } = useGetProductsByProdcutId(id);

  const [changeFeaturedImage, setChangeFeaturedImage] = useState(featuredImage);
  const [changeProductTitle, setChangeProductTitle] = useState(productTitle);
  const [changePrice, setChangePrice] = useState(price);
  const [changeRidingStyle, setChangeRidingStyle] = useState(ridingStyle);
  const [changeProductDescription, setChangeProductDescription] =
    useState(productDescription);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    axios
      .patch(`http://127.0.0.1:8000/api/products/${id}`, {
        featuredImage: changeFeaturedImage,
        price: changePrice,
        ridingStyle: changeRidingStyle,
        productDescription: changeProductDescription,
        productTitle: changeProductTitle,
      })
      .then((res) => console.log(res));

    return () => {
      setSubmit(false);
    };
  }, [submit]);

  return (
    <div className="flex  max-w-[52rem] gap-8 rounded-md bg-white p-8 shadow-md">
      <div
        className="flex flex-col gap-8"
        onChange={(e) => setChangeFeaturedImage(e.target.files[0])}
      >
        <img
          src={`http://127.0.0.1:8000/${featuredImage}`}
          alt="product"
          className="h-48 "
        />
        <input type="file" className="bg-neutral-100 " />
      </div>
      <div className="flex w-full flex-col items-start gap-5 ">
        <div className="flex flex-col justify-center gap-2">
          <span className="flex gap-2"></span>
          <input
            type="text"
            className="bg-neutral-100 "
            placeholder={productTitle}
            onChange={(e) => {
              setChangeProductTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <span className="flex gap-2"></span>
          <input
            type="text-area"
            className="bg-neutral-100 py-4 "
            placeholder={productDescription}
            onChange={(e) => setChangeProductDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <span className="flex gap-2"></span>
          <input
            type="number"
            className="bg-neutral-100 "
            placeholder={price}
            onChange={(e) => setChangePrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <span className="flex gap-2">
            <p>{ridingStyle}</p>

            <select
              classnane="bg-neutral-100 "
              onClick={(e) => setChangeRidingStyle(e.target.value)}
            ></select>
          </span>
        </div>
        <button
          type="submit"
          className="bg-green-500 py-2 px-8"
          onChange={() => setSubmit(true)}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ListingModal;
