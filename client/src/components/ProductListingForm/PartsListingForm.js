import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowLeftIcon, PlusCircleIcon } from '@heroicons/react/outline';

const PartsListingForm = ({ setType, type }) => {
  const [featuredImage, setFeatureImage] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [material, setMaterial] = useState('');
  const [condition, setCondition] = useState(false);
  const [uploading, setUploading] = useState(true);
  const [images, setImages] = useState([]);
  return (
    <>
      <form className="flex w-full flex-col gap-4 overflow-hidden bg-neutral-100 py-12 px-4 text-sm ">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label>Brand</label>
            <input type="text" className=" py-2 placeholder:px-4" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Title</label>
            <input type="text" className=" py-2 placeholder:px-4" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label>Category</label>
            <select className=" py-2 placeholder:px-4">
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label>Price</label>
            <input type="number" className=" py-2 placeholder:px-4" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label>Enter the Primary Color</label>
            <input
              className=" py-2 placeholder:px-4"
              type="text"
              placeholder="Primary Color"
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Enter the Secondary Color</label>
            <input
              className=" py-2 placeholder:px-4"
              type="text"
              name="secondaryColor"
              placeholder="Secondary Color"
              onChange={(e) => setSecondaryColor(e.target.value)}
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
      </form>
    </>
  );
};

export default PartsListingForm;
