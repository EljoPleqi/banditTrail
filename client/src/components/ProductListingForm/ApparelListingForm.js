import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowLeftIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ApparelListingForm = ({ setType, type }) => {
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
  const [size, setSize] = useState('');
  const [gender, setGender] = useState('');
  const [images, setImages] = useState([]);

  const { id, username } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const listApparel = (e) => {
    e.preventDefault();
    const apparel = new FormData();
    apparel.append('listingType', type);
    apparel.append('featuredImage', featuredImage);
    apparel.append('productTitle', productTitle);
    apparel.append('productDescription', productDescription);
    apparel.append('price', price);
    apparel.append('brand', brand);
    apparel.append('type', category);
    apparel.append('primaryColor', primaryColor);
    apparel.append('secondaryColor', secondaryColor);
    apparel.append('size', size);
    apparel.append('gender', gender);
    apparel.append('material', material);
    apparel.append('condition', condition);
    apparel.append('UserId', id);

    for (let image of images) {
      apparel.append('images', image);
    }

    axios.post(' http://localhost:8000/api/products', apparel).then((res) => {
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
        onSubmit={listApparel}
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
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label>Category</label>
            <select
              className=" py-2 placeholder:px-4"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              <option value="helmets">Helmets</option>
              <option value="jackets">Jackets</option>
              <option value="jackets">Jackets</option>
              <option value="gloves">Gloves</option>
              <option value="googles">Googles</option>
              <option value="guards">Guards</option>
              <option value="jerseys">Jerseys</option>
              <option value="pants">Pants</option>
              <option value="shorts">Shorts</option>
            </select>
          </div>
          <div
            className="flex flex-col gap-1"
            onChange={(e) => setPrice(e.target.value)}
          >
            <label>Price</label>
            <input type="number" className=" py-2 placeholder:px-4" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label>Enter your Gear's Size</label>
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
            <button className=" bg-[#283618] py-2 px-4"> 'Uploading...'</button>
          )}
        </div>
      </form>
    </>
  );
};

export default ApparelListingForm;
