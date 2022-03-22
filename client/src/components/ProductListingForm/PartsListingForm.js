import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowLeftIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PartsListingForm = ({ setType, type }) => {
  const [featuredImage, setFeatureImage] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [material, setMaterial] = useState('');
  const [condition, setCondition] = useState(false);
  const [uploading, setUploading] = useState(true);
  const [images, setImages] = useState([]);

  const { id, username } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const listPart = (e) => {
    e.preventDefault();
    const part = new FormData();
    part.append('listingType', type);
    part.append('featuredImage', featuredImage);
    part.append('productTitle', productTitle);
    part.append('productDescription', productDescription);
    part.append('price', price);
    part.append('brand', brand);
    part.append('type', category);
    part.append('material', material);
    part.append('condition', condition);
    part.append('UserId', id);

    for (let image of images) {
      part.append('images', image);
    }

    axios.post(' http://localhost:8000/api/products', part).then((res) => {
      if (res.data.error) {
        // alert(res.data.error);
        console.log(res.data);
      } else {
        setUploading(false);
        navigate(`/user-dashboard/${username}`);
      }
    });
  };

  return (
    <>
      <form
        onSubmit={listPart}
        className="flex w-full flex-col gap-4 overflow-hidden bg-neutral-100 py-12 px-4 text-sm "
      >
        <div className="grid grid-cols-3 gap-4">
          <div
            className="flex flex-col gap-1"
            onChange={(e) => setBrand(e.target.value)}
          >
            <label>Brand</label>
            <input type="text" className=" py-2 placeholder:px-4" />
          </div>
          <div
            className="flex flex-col gap-1"
            onChange={(e) => setProductTitle(e.target.value)}
          >
            <label>Title</label>
            <input type="text" className=" py-2 placeholder:px-4" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <label>Is This Item Used?</label>
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
        <div className="grid grid-cols-3 gap-4">
          <div
            className="flex flex-col gap-1"
            onChange={(e) => setCategory(e.target.value)}
          >
            <label>Category</label>
            <select className=" py-2 placeholder:px-4">
              <option value="cassette">Cassette</option>
              <option value="crankset">Crankset</option>
              <option value="shifters">Shifters</option>
              <option value="front-deraileur">Front Deraileur</option>
              <option value="back-deraileur">Back Deraileur</option>
              <option value="wheels">Wheels</option>
              <option value="tires">Tires</option>
              <option value="hub">Hub</option>
              <option value="rims">Rims</option>
              <option value="pedals">Pedals</option>
              <option value="rear-shocks">Rear Shocks</option>
              <option value="fork">Fork</option>
            </select>
          </div>
          <div
            className="flex flex-col gap-1"
            onChange={(e) => setPrice(e.target.value)}
          >
            <label>Price</label>
            <input type="number" className=" py-2 placeholder:px-4" />
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
        </div>
        <div className="grid grid-cols-2 gap-4">
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
          <div className="flex flex-col">
            <label>Gallery Images</label>
            <input
              className=" py-2 placeholder:px-4"
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
            className="flex items-center gap-4  border-2 border-black py-2 px-4 hover:bg-white active:translate-y-1 active:bg-neutral-200"
          >
            <ArrowLeftIcon className="h-6 w-6" /> Go back
          </button>{' '}
          {uploading ? (
            <button
              type="submit"
              className="  hover:bg-banditYellow-500 active:bg-banditYellow-900 flex items-center gap-2  border-2 border-black py-2 px-8  active:translate-y-1 "
            >
              List Item <PlusCircleIcon className="h-6 w-6" />
            </button>
          ) : (
            <button className=" bg-[#283618] py-2 px-4"> 'Uploading...'</button>
          )}
        </div>
      </form>
    </>
  );
};

export default PartsListingForm;
