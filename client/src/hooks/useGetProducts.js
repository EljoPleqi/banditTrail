import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetAllProducts() {
  const [products, setProducts] = useState([]);

  axios
    .get(' https://bandit-trail.herokuapp.com/api/products')
    .then((res) => setProducts(res.data));

  return products;
}

function useGetProductsByUserId(id) {
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    axios
      .get(` https://bandit-trail.herokuapp.com/api/products/by_userId/${id}`)
      .then((res) => {
        setUserListings(res.data);
      });
  }, [id]);
  return userListings;
}

function useGetProductsByProdcutId(id) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(` https://bandit-trail.herokuapp.com/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, [id]);

  if (product) {
    return product;
  } else {
    return 'loading...';
  }
}

export { useGetAllProducts, useGetProductsByProdcutId, useGetProductsByUserId };
