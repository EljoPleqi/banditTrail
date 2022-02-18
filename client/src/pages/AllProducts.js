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
      .get('http://127.0.0.1:8000/api/products')
      .then((res) => dispatch(setProduct(res.data)));
  }, [dispatch]);

  return (
    <div className="grid-cols-oneThree grid h-screen">
      <Sidebar
        setType={setType}
        setBrand={setBrand}
        setRidingStyle={setRidingStyle}
        setCondition={setCondition}
        setFilteredData={setFilteredData}
        setLoaded={setLoaded}
      />
      <div>
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
          className="rounded-md bg-blue-500 px-8 py-3 text-white hover:bg-blue-400 active:bg-blue-800"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
