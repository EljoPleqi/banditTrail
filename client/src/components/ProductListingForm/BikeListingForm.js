import React, { useState } from 'react';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  UploadIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline';

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
  const [images, setImages] = useState([]);

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

  console.log({ productTitle, productDescription, price, currency });

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
    bike.append('ridingStyle', ridingStyle);
    bike.append('gender', gender);
    bike.append('material', material);
    bike.append('wheelSize', wheelSize);
    bike.append('condition', condition);
    bike.append('images', images);

    axios
      .post('http://127.0.0.1:8000/api/products', bike, {
        headers: { accessToken: sessionStorage.getItem('accessToken') },
      })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          alert(res.data.error);
        } else {
          setUploading(false);
        }
      });
  };
  return (
    <>
      <form
        className="flex flex-col rounded-md bg-neutral-100 p-20"
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        {!submitted ? (
          <div className="flex flex-col gap-4">
            <div className="grid-cols-threeTwo grid gap-4">
              <div className="flex flex-col gap-1">
                <label>Product Title</label>
                <input
                  className="rounded-md py-4 placeholder:px-4"
                  type="text"
                  placeholder="Product Title"
                  onChange={(e) => setProductTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Price</label>
                <input
                  className="rounded-md py-4 placeholder:px-4"
                  type="number"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label>Product Description </label>
              <textarea
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...."
                className="rounded-md pb-16 pt-4 placeholder:justify-self-start placeholder:px-4"
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Feature Image</label>
              <input
                className="rounded-md  py-1"
                type="file"
                name="featuredImage"
                onChange={(e) => {
                  console.log(e.target);
                  setFeatureImage(e.target.files[0]);
                }}
              />
            </div>
            <button
              onClick={() => {
                setSubmitted(!submitted);
              }}
              className="box-border flex items-center justify-center gap-2 rounded-md border-2 border-solid border-neutral-600 py-2 px-4 transition-all duration-500 hover:gap-4 hover:border-none hover:bg-neutral-700 hover:text-white"
            >
              Continue <ArrowRightIcon className="h-6 w-6" />
            </button>{' '}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label>Enter the Brand of the Bike </label>
                <input
                  className="rounded-md py-4 placeholder:px-4"
                  type="text"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Enter your Bike's Type</label>
                <select
                  className="rounded-md py-4 placeholder:px-4"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="trail">Trail</option>
                  <option value="crossCountry">Cross Country</option>
                  <option value="downhill">Downhill</option>
                  <option value="dirtJump">Dirt Jump</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label>Enter the Primary Color</label>
                <input
                  className="rounded-md py-4 placeholder:px-4"
                  type="text"
                  placeholder="Primary Color"
                  onChange={(e) => setPrimaryColor(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Enter the Secondary Color</label>
                <input
                  className="rounded-md py-4 placeholder:px-4"
                  type="text"
                  name="secondaryColor"
                  placeholder="Secondary Color"
                  onChange={(e) => setSecondaryColor(e.target.value)}
                />
              </div>
            </div>
            <label>Enter your Bike's Size</label>
            <select
              className="rounded-md py-4 placeholder:px-4"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">XL</option>
            </select>
            <label>What gender is it for</label>
            <select
              className="rounded-md py-4 placeholder:px-4"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
            <label>Suitable Riding Style</label>
            <select
              className="rounded-md py-4 placeholder:px-4"
              onChange={(e) => {
                console.log(e.target.value);
                setRidingStyle(e.target.value);
              }}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Daredevil">Daredevil</option>
              <option value="Trailblazer">Trailblazer</option>
            </select>
            <label>Materials Made Of</label>
            <input
              className="rounded-md py-4 placeholder:px-4"
              type="text"
              name="material"
              placeholder="Material"
              onChange={(e) => setMaterial(e.target.value)}
            />
            <label>Wheel Size</label>
            <select
              className="rounded-md py-4 placeholder:px-4"
              onChange={(e) => setWheelSize(Number(e.target.value))}
            >
              <option value={26}>26</option>
              <option value={27.5}>27.5</option>
              <option value={29}>29</option>
            </select>
            <label>Is This Bike Used?</label>
            <input
              className="rounded-md py-4 placeholder:px-4"
              type="checkbox"
              onChange={() => setCondition(true)}
            ></input>
            <label>Product Images</label>
            <input
              className="rounded-md py-4 placeholder:px-4"
              type="file"
              multiple
              name="images"
              onChange={(e) => {
                console.log(e.target);
                setImages(e.target.files);
              }}
            />
            <div className="flex justify-between gap-2">
              <button
                onClick={() => {
                  setSubmitted(!submitted);
                }}
                className="flex  items-center gap-4 rounded-md border-2 border-solid border-neutral-600 py-2 px-4"
              >
                <ArrowLeftIcon className="h-6 w-6" /> Go back
              </button>{' '}
              {uploading ? (
                <button
                  type="submit"
                  className=" flex items-center gap-2 rounded-md bg-white py-2 px-4"
                >
                  List Item <PlusCircleIcon className="h-6 w-6" />
                </button>
              ) : (
                <button
                  className="rounded-md bg-[#283618] py-2 px-4"
                  disabled
                  on
                >
                  {' '}
                  'Uploading...'
                </button>
              )}
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default BikeListingForm;
