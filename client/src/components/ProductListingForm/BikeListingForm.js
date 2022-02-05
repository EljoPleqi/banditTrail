import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

import axios from 'axios';

import * as yup from 'yup';

const BikeListingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [featuredImage, setFeatureImage] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState('US$');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [size, setSize] = useState('');
  const [gender, setGender] = useState('');
  const [ridingStyle, setRidingStyle] = useState('');
  const [material, setMaterial] = useState('');
  const [wheelSize, setWheelSize] = useState(0);
  const [condition, setCondition] = useState(false);
  const [uploading, setUploading] = useState(true);

  // const formValidation = yup.object().shape({
  //   productTitle: yup.string().required(),
  //   price: yup.number().required(),
  //   currency: yup.string().required(),
  //   productDescription: yup.string().required(),
  //   brand: yup.string().required(),
  //   type: yup.string().required(),
  //   primaryColor: yup.string().required(),
  //   secondaryColor: yup.string(),
  //   size: yup.string().required(),
  //   gender: yup.string(),
  //   ridingStyle: yup.string().required(),
  //   material: yup.string().required(),
  //   wheelSize: yup.number().required(),
  //   condition: yup.boolean().required(),
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bike = new FormData();
    bike.append('featuredImage', featuredImage);
    bike.append('productTitle', productTitle);
    bike.append('productDescription', productDescription);
    bike.append('price', price);
    bike.append('currency', currency);
    bike.append('brand', brand);
    bike.append('type', type);
    bike.append('primaryColor', primaryColor);
    bike.append('secondaryColor', secondaryColor);
    bike.append('size', size);
    bike.append('gender', gender);
    bike.append('material', material);
    bike.append('wheelSize', wheelSize);
    bike.append('condition', condition);

    axios.post('http://127.0.0.1:3007/api/products', bike).then((res) => {
      console.log(bike);
      console.log(res);
      setUploading(false);
    });
    console.log(e.target);
  };
  return (
    <>
      <form
        className="flex flex-col gap-2 p-24 bg-neutral-100"
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        {!submitted ? (
          <div className="flex flex-col">
            <label>Product Title</label>
            <input
              type="text"
              placeholder="Product Title"
              onChange={(e) => setProductTitle(e.target.value)}
            />
            <label>Price</label>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <select onChange={(e) => setCurrency(e.target.value)}>
                <option value="US$">USD</option>
                <option value="Euro€">EURO</option>
              </select>
            </div>
            <label>Product Description </label>
            <textarea
              placeholder="Product Description"
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <label>Feature Image</label>
            <input
              type="file"
              name="featuredImage"
              onChange={(e) => {
                console.log(e.target);
                setFeatureImage(e.target.files[0]);
              }}
            />
            <button
              onClick={() => {
                setSubmitted(!submitted);
              }}
              className="flex gap-4"
            >
              Continue <ArrowRightIcon className="h-6 w-6" />
            </button>{' '}
          </div>
        ) : (
          <div className="flex flex-col">
            <label>Enter the Brand of the Bike </label>
            <input type="text" onChange={(e) => setBrand(e.target.value)} />
            <label>Enter your Bike's Type</label>
            <select onChange={(e) => setType(e.target.value)}>
              <option value="trail">Trail</option>
              <option value="crossCountry">Cross Country</option>
              <option value="downhill">Downhill</option>
              <option value="dirtJump">Dirt Jump</option>
            </select>
            <label>Enter the Primary Color</label>

            <input
              type="text"
              placeholder="Primary Color"
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
            <label>Enter the Secondary Color</label>

            <input
              type="text"
              name="secondaryColor"
              placeholder="Secondary Color"
              onChange={(e) => setSecondaryColor(e.target.value)}
            />
            <label>Enter your Bike's Size</label>
            <select onChange={(e) => setSize(e.target.value)}>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">XL</option>
            </select>
            <label>What gender is it for</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
            <label>Suitable Riding Style</label>
            <select onChange={(e) => setRidingStyle(e.target.value)}>
              <option value="beginer">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="dareDevil">Daredevil</option>
              <option value="trailBlazer">Trailblazer</option>
            </select>
            <label>Materials Made Of</label>
            <input
              type="text"
              name="material"
              placeholder="Material"
              onChange={(e) => setMaterial(e.target.value)}
            />
            <label>Wheel Size</label>
            <select onChange={(e) => setWheelSize(e.target.value)}>
              <option value="26">26</option>
              <option value="27.5">27.5</option>
              <option value="29">29</option>
            </select>
            <label>Is This Bike Used?</label>
            <input type="checkbox" onChange={() => setCondition(true)}></input>
            {uploading ? (
              <button type="submit" className="bg-white">
                List Item{' '}
              </button>
            ) : (
              <button disabled> 'Uploading...'</button>
            )}
          </div>
        )}
      </form>
    </>
  );
};

export default BikeListingForm;
