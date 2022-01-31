import React, { useState } from 'react';
import ProductFeatured from '../components/productComponents/ProductFeatured';
import SellerProfile from '../components/SellerComponents/SellerProfile';

const ProductPage = () => {
  const [seller, setSeller] = useState([]);

  return (
    <div>
      <ProductFeatured />
      <SellerProfile seller={seller} setSeller={setSeller} />
    </div>
  );
};

export default ProductPage;
