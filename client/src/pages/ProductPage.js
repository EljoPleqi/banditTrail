import React, { useState, useEffect } from 'react';
import ProductFeatured from '../components/productComponents/ProductFeatured';
import SellerProfile from '../components/productComponents/SellerProfile';
import axios from 'axios';

const ProductPage = () => {
  const [seller, setSeller] = useState();

  useEffect(() => {
    axios
      .get('https://random-data-api.com/api/users/random_user')
      .then((res) => {
        setSeller(res.data);
      });
  }, []);

  return (
    <div>
      <ProductFeatured />
      <SellerProfile seller={seller} />
    </div>
  );
};

export default ProductPage;
