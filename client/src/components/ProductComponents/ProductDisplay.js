import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../features/product';

const ProductDisplay = () => {
  const dispatch = useDispatch();

  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [ridingStyle, setRidingStyle] = useState('');
  const [condition, setCondition] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(8);

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
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
