import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProduct } from '../features/product';

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3007/api/products')
      .then((res) => dispatch(setProduct(res.data)));
  }, [dispatch]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3007/api/product-details')
      .then((res) => setProductDetail(res.data));
  }, []);

  return (
    <div className="grid grid-cols-products">
      <Sidebar productDetail={productDetail} />
      <div className="flex flex-col justify-center items-center py-8">
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
