import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIcon, PlusCircleIcon } from '@heroicons/react/outline';

import { bikeListingFormValidation } from '../../validations/Validations';

const BikeListingForm = ({ setType }) => {
  const [featuredImage, setFeatureImage] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
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

  const { id, username } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bike = new FormData();
    bike.append('featuredImage', featuredImage);
    bike.append('productTitle', productTitle);
    bike.append('productDescription', productDescription);
    bike.append('price', price);
    bike.append('brand', brand);
    bike.append('type', category);
    bike.append('primaryColor', primaryColor);
    bike.append('secondaryColor', secondaryColor);
    bike.append('size', size);
    bike.append('ridingStyle', ridingStyle);
    bike.append('gender', gender);
    bike.append('material', material);
    bike.append('wheelSize', wheelSize);
    bike.append('condition', condition);
    bike.append('UserId', id);

    for (let image of images) {
      bike.append('images', image);
    }

    if (bikeListingFormValidation.isValid(bike)) {
      axios.post(' http://localhost:8000/api/products', bike).then((res) => {
        if (res.data.error) {
          // alert(res.data.error);
          console.log(res.data);
        } else {
          setUploading(false);
          navigate(`/user-dashboard/${username}`);
        }
      });
    }
  };

  return (
    <>
      <form
        className="flex flex-col overflow-hidden bg-neutral-100 py-12 px-4 text-sm "
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="flex flex-col gap-4 px-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label>Product Title</label>
              <input
                className="  py-2 "
                type="text"
                onChange={(e) => setProductTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Price</label>
              <input
                className="  py-2 placeholder:px-4"
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <label>Is This Bike Used?</label>
              <input
                className="  py-2 placeholder:px-4"
                type="checkbox"
                onChange={() => setCondition(true)}
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label>Product Description </label>
            <textarea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...."
              className=" pb-6 pt-4 placeholder:justify-self-start placeholder:px-4"
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Feature Image</label>
            <input
              className="  py-1"
              type="file"
              name="featuredImage"
              onChange={(e) => {
                setFeatureImage(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label>Enter the Brand of the Bike </label>
              <input
                className="  py-2 placeholder:px-4"
                type="text"
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Enter your Bike's Type</label>
              <select
                className="  py-2 placeholder:px-4"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=""></option>
                <option value="Trail">Trail</option>
                <option value="Cross Country">Cross Country</option>
                <option value="Downhill">Downhill</option>
                <option value="Dirt Jump">Dirt Jump</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label>Enter the Primary Color</label>
              <input
                className="  py-2 placeholder:px-4"
                type="text"
                placeholder="Primary Color"
                onChange={(e) => setPrimaryColor(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Enter the Secondary Color</label>
              <input
                className="  py-2 placeholder:px-4"
                type="text"
                name="secondaryColor"
                placeholder="Secondary Color"
                onChange={(e) => setSecondaryColor(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label>Enter your Bike's Size</label>
              <select
                className="  py-2 placeholder:px-4"
                onChange={(e) => setSize(e.target.value)}
              >
                <option value=""></option>
                <option value="one-size">One Size</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">XL</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>What gender is it for</label>
              <select
                className="  py-2 placeholder:px-4"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label>Suitable Riding Style</label>
              <select
                className="  py-2 "
                onChange={(e) => {
                  setRidingStyle(e.target.value);
                }}
              >
                <option value=""></option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Daredevil">Daredevil</option>
                <option value="Trailblazer">Trailblazer</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Materials Made Of</label>
              <input
                className="  py-2 placeholder:px-4 "
                type="text"
                name="material"
                placeholder="Material"
                onChange={(e) => setMaterial(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Wheel Size</label>
              <select
                className="  py-2 "
                onChange={(e) => setWheelSize(Number(e.target.value))}
              >
                <option value="">Select</option>
                <option value={24}>24</option>
                <option value={26}>26</option>
                <option value={27.5}>27.5</option>
                <option value={29}>29</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label>Product Images</label>
              <input
                className="   py-2 placeholder:px-4"
                type="file"
                multiple
                name="images"
                onChange={(e) => {
                  console.log(e.target.files);
                  setImages(e.target.files);
                }}
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <button
              onClick={() => {
                setType('');
              }}
              className="flex  items-center gap-4  border-2 border-solid border-neutral-600 py-2 px-4 hover:bg-white active:translate-y-1 active:bg-neutral-200"
            >
              <ArrowLeftIcon className="h-6 w-6" /> Go back
            </button>{' '}
            {uploading ? (
              <button
                type="submit"
                className=" bg-banditGreen-600 hover:bg-banditGreen-500 active:bg-banditGreen-900 flex items-center gap-2  border-2 py-2 px-8 text-white active:translate-y-1 "
              >
                List Item <PlusCircleIcon className="h-6 w-6" />
              </button>
            ) : (
              <button className=" bg-[#283618] py-2 px-4" disabled on>
                {' '}
                'Uploading...'
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default BikeListingForm;
