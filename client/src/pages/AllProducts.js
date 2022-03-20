import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/ProductComponents/Sidebar';
import ProductCard from '../components/ProductComponents/ProductCard';
import { useDispatch } from 'react-redux';
import { setProduct } from '../features/product';

const AllProducts = () => {
  const dispatch = useDispatch();

  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [ridingStyle, setRidingStyle] = useState('');
  const [condition, setCondition] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(16);

  useEffect(() => {
    axios
      .get(' http://localhost:8000/api/products')
      .then((res) => dispatch(setProduct(res.data)));
  }, [dispatch]);

  return (
    <div className="md:grid-cols-oneThree flex h-screen flex-col overflow-auto md:grid">
      <Sidebar
        setType={setType}
        setBrand={setBrand}
        setRidingStyle={setRidingStyle}
        setCondition={setCondition}
        setFilteredData={setFilteredData}
        setLoaded={setLoaded}
      />
      <div className="flex flex-col items-center">
        <ProductCard
          brand={brand}
          type={type}
          ridingStyle={ridingStyle}
          condition={condition}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          loaded={loaded}
          setLoaded={setLoaded}
          visible={visible}
        />
        <button
          onClick={() => {
            setVisible(visible + 4);
          }}
          className=" hover:bg-banditGreen-600 active:bg-banditGreen-900 hover:border-banditGreen-600 place-self-center border-2 border-black px-8 py-3 hover:text-white active:translate-y-1"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
