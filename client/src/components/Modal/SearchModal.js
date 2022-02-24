import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SearchModal = () => {
  const products = useSelector((state) => state.products);
  const [searchableData, setSetSearchableData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  console.log(products);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/users').then((res) => {
      setSetSearchableData([...products, ...res.data]);
      setLoaded(true);
    });
  }, [searchInput, products]);

  // const data = searchableData.map((ent) => {
  //   if (ent.username) {
  //     return ent.username;
  //   } else {
  //     return ent.productTitle;
  //   }
  // });

  const filteredData = searchableData
    .filter((data) => {
      if (
        data.username &&
        data.username.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return data;
      } else if (
        data.productTitle &&
        data.productTitle.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return data;
      } else if (
        data.brand &&
        data.brand.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return data;
      } else {
        return '';
      }
    })
    .map((data) => {
      return (
        <a
          href={
            data.productTitle
              ? `http://localhost:3000/products/${data.id}`
              : `http://localhost:3000/users/${data.username}`
          }
        >
          <div className="flex gap-2">
            <img
              src={`http://127.0.0.1:8000/${
                data.productTitle ? data.featuredImage : data.avatar
              }`}
              alt=""
              className="h-10 object-cover"
            />
            <p>{data.productTitle ? data.productTitle : data.username}</p>
          </div>
        </a>
      );
    });

  return (
    <div className="bg-white px-36">
      <div className=" flex flex-col items-center  gap-4 rounded-md bg-white  pt-6 pb-12">
        <div className="flex flex-col items-center ">
          <h2 className="text-xl ">Great gear makes for great rides</h2>
          <h4 className="text-lg font-light">And it is all one search away </h4>
        </div>
        <input
          type="text"
          placeholder="search here"
          className="rounded-full bg-neutral-100 py-4 px-24"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="mb-10 flex flex-col gap-4">
        {searchInput && filteredData}
      </div>
    </div>
  );
};

export default SearchModal;
