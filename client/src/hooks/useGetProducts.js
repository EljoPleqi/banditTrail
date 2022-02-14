import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useGetProductsByUserId(id) {
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/by_userId/${id}`)
      .then((res) => {
        setUserListings(res.data);
      });
  }, [id]);
  return userListings;
}

function useGetProductsByProdcutId(id) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);
  return product;
}

export { useGetProductsByProdcutId, useGetProductsByUserId };
