import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import AddToCartButton from '../Cart/AddToCartButton';

import { useGetProductsByProdcutId } from '../../hooks/useGetProducts';
import axios from 'axios';

const ProductFeatured = ({ setShowNotification }) => {
  const [user, setUser] = useState();
  let { id } = useParams();

  const product = useGetProductsByProdcutId(id);
  console.log(product);
  const { UserId } = product;

  useEffect(() => {
    axios
      .get(` http://localhost:8000/users/${UserId}`)
      .then((res) => setUser(res.data));
  }, [product]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 bg-cover pb-4 lg:h-screen">
        <ProductGallery
          product={product.featuredImage}
          gallery={product.images}
        />
      </div>
      <div className="drop-shadow-productPage z-10 mt-4 bg-white p-8 lg:p-24">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:px-36">
          <div className="">
            {user ? (
              <div className="flex flex-col gap-4">
                <a href={` http://localhost:8000/users/${user.username}`}>
                  <img
                    src={` http://localhost:8000/${user.avatar}`}
                    alt=""
                    className="h-32 w-32 rounded-full object-cover"
                  />
                </a>
                <div className="flex flex-col">
                  <span className="flex gap-2">
                    Seller: <p className="font-semibold">{user.username}</p>
                  </span>
                  <span className="flex gap-2">
                    Rider Experience:{' '}
                    <p className="font-semibold">{user.userRidingStyle}</p>
                  </span>
                </div>
                <p>{user.userDescription}</p>
              </div>
            ) : (
              'LOADING....'
            )}
          </div>
          <div className="item-center flex flex-col gap-4 lg:items-end">
            <h1 className="text-5xl font-bold">{product.productTitle}</h1>
            <div className="flex gap-2">
              <span className="flex gap-1">
                <p className="mt-4 text-xl">{product.price}</p>
                <p className="mt-4 text-xl">{product.currency}</p>
              </span>
              <p className="mt-4 text-xl">Size: {product.size}</p>
            </div>{' '}
            <p className="lg:w-96">{product.productDescription}</p>
            <AddToCartButton
              product={product}
              setShowNotification={setShowNotification}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFeatured;
