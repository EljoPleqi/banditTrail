import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../features/product';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/outline';

const ProductDisplay = () => {
  const dispatch = useDispatch();

  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [ridingStyle, setRidingStyle] = useState('');
  const [condition, setCondition] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(8);

  const screenSize = window.matchMedia('(max-width: 600px)');

  let mobile = screenSize.matches;

  useEffect(() => {
    if (mobile) setVisible(3);
  }, [mobile]);

  useEffect(() => {
    axios
      .get(' http://localhost:8000/api/products')
      .then((res) => dispatch(setProduct(res.data)));
  }, []);

  return (
    <div className="lg:grid-cols-products grid">
      <Sidebar
        setType={setType}
        setBrand={setBrand}
        setRidingStyle={setRidingStyle}
        setCondition={setCondition}
        setFilteredData={setFilteredData}
        setLoaded={setLoaded}
      />
      <div className="flex flex-col items-center justify-center lg:py-8">
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
        {visible < 8 ? (
          <button
            className=" hover:bg-banditGreen-600 active:bg-banditGreen-900 hover:border-banditGreen-600 place-self-center border-2
         border-black px-8 py-3 hover:text-white active:translate-y-1"
            onClick={() => setVisible((visible) => visible + 2)}
          >
            Load More
          </button>
        ) : (
          <Link
            to="/products/all-products"
            className=" hover:bg-banditYellow-600 active:bg-banditYellow-800 place-self-center border-2 border-black
                  px-8 py-3 hover:border-black  active:translate-y-1"
          >
            View All items
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
