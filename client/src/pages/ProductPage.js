import React from 'react';
import Popup from '../components/notifications/Popup';
import ProductFeatured from '../components/ProductComponents/ProductFeatured';
import { useSelector } from 'react-redux';

const ProductPage = () => {
  const notification = useSelector((state) => state.notification);
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <ProductFeatured />
      {notification && (
        <Popup
          type={'bg-green-500 p-8 text-center text-white transition-all'}
          message={`"${cart[0].productTitle}" has been added to your cart`}
        />
      )}
    </div>
  );
};

export default ProductPage;
