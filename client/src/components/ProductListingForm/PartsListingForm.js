import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PartsListingForm = () => {
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
    <div>
      <form className="flex flex-col overflow-hidden bg-neutral-100 py-12 px-4 text-sm ">
        <div>
          <label>Title</label>
          <input type="text" />
          <label>Brand</label>
          <input type="text" />
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
        <div>
          <div className="flex flex-col gap-1">
            <label>Category</label>
            <select>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
            </select>
          </div>
          <label>Price</label>
          <input type="number" />
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
        <div>
          {' '}
          <div className="flex flex-col">
            <label>Product Images</label>
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
      </form>
    </div>
  );
};

export default PartsListingForm;
