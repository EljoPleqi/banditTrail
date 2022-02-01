import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import Button from './Button';

const ProductDisplay = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function getProductData() {
      let res = await fetch('http://127.0.0.1:3007/api/products');
      res = await res.json();
      setProductData(res);
    }
    getProductData();
  }, []);

  return (
    <div className="grid grid-cols-products bg-neutral-100">
      <Sidebar productData={productData} />
      <div className="flex flex-col  justify-center items-center py-8">
        <div>
          <ProductCard productData={productData} />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
