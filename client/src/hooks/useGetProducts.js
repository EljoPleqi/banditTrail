import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useGetProducts(id) {
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

export default useGetProducts;
