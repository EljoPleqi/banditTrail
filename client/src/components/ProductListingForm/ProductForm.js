import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

import axios from 'axios';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const ProductForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    productTitle: '',
    price: 0,
    currency: 'US$',
    productDescription: '',
    username: '',
    category: '',
    brand: '',
    type: '',
    primaryColor: '',
    secondaryColor: '',
    size: '',
    gender: '',
    ridingStyle: '',
    material: '',
    wheelSize: 0,
    condition: false,
  };

  const formValidation = yup.object().shape({
    productTitle: yup.string().required(),
    price: yup.number().required(),
    currency: yup.string().required(),
    productDescription: yup.string().required(),
    username: yup.string().required(),
    category: yup.string().required(),
    brand: yup.string().required(),
    type: yup.string().required(),
    primaryColor: yup.string().required(),
    secondaryColor: yup.string(),
    size: yup.string().required(),
    gender: yup.string(),
    ridingStyle: yup.string().required(),
    material: yup.string().required(),
    wheelSize: yup.number().required(),
    condition: yup.boolean().required(),
  });

  const onSubmit = (data) => {
    // let id;
    // axios.post('http://127.0.0.1:3007/api/products', data).then((res) => {
    //   id = res;
    //   console.log(res);
    //   return id;
    // });
    console.log(data);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={formValidation}
      >
        {!submitted ? (
          <Form className="flex flex-col gap-2 p-24">
            <label className="text-white">Product Title</label>
            <ErrorMessage
              name="productTitle"
              component="span"
              className="text-red-500"
            />
            <Field
              type="text"
              id="inputListItem"
              name="productTitle"
              placeholder="Product Title"
            />

            <label className="text-white">Price</label>
            <ErrorMessage
              name="price"
              component="span"
              className="text-red-500"
            />
            <div className="flex gap-2 items-center">
              <Field
                type="number"
                id="inputListItem"
                name="price"
                placeholder="Price"
              />
              <select>
                <option value="US$">USD</option>
                <option value="Euro€">EURO</option>
              </select>
            </div>

            <label className="text-white">Product Description </label>
            <ErrorMessage
              name="productDescription"
              component="span"
              className="text-red-500"
            />
            <Field
              type="text"
              id="inputListItem"
              placeholder="Product Description"
              name="productDescription"
            />

            <label className="text-white">Username</label>
            <ErrorMessage
              name="username"
              component="span"
              className="text-red-500"
            />
            <Field
              type="text"
              id="inputListItem"
              placeholder="Sellers username"
              name="username"
            />
            <button
              onClick={() => {
                setSubmitted(!submitted);
              }}
              className="flex gap-4"
            >
              Continue <ArrowRightIcon className="h-6 w-6" />
            </button>
          </Form>
        ) : (
          <Form className="flex flex-col gap-2 p-24">
            <label>Enter your Product's Type</label>
            <ErrorMessage
              name="type"
              component="span"
              className="text-red-500"
            />
            <Field
              as="select"
              id="inputListItem"
              name="type"
              placeholder="Bike Type"
            >
              <option value="trail">Trail</option>
              <option value="crossCountry">Cross Country</option>
              <option value="downhill">Downhill</option>
              <option value="dirtJump">Dirt Jump</option>
            </Field>
            <label>Enter the Primary Color</label>
            <ErrorMessage
              name="primaryColor"
              component="span"
              className="text-red-500"
            />
            <Field
              type="text"
              id="inputListItem"
              name="primaryColor"
              placeholder="Primary Color"
            />
            <label>Enter the Secondary Color</label>
            <ErrorMessage
              name="secondaryColor"
              component="span"
              className="text-red-500"
            />
            <Field
              type="text"
              id="inputListItem"
              name="secondaryColor"
              placeholder="Secondary Color"
            />
            <label>Enter your Product's Size</label>
            <ErrorMessage
              name="size"
              component="span"
              className="text-red-500"
            />
            <Field
              as="select"
              id="inputListItem"
              name="size"
              placeholder="Size"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">XL</option>
            </Field>
            <label>What gender is it for</label>
            <ErrorMessage
              name="gender"
              component="span"
              className="text-red-500"
            />
            <Field
              as="select"
              id="inputListItem"
              name="gender"
              placeholder="Gender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </Field>
            <label>Suitable Riding Style</label>
            <ErrorMessage
              name="ridingStyle"
              component="span"
              className="text-red-500"
            />
            <Field
              as="select"
              id="inputListItem"
              name="ridingStyle"
              placeholder="Riding Style"
            >
              <option value="begginer">Begginer</option>
              <option value="intermediate">Intermediate</option>
              <option value="dareDevil">Daredevil</option>
              <option value="trailBlazer">Trailb lazer</option>
            </Field>
            <label>Materials Made Of</label>
            <ErrorMessage
              name="material"
              component="span"
              className="text-red-500"
            />
            <Field
              type="text"
              id="inputListItem"
              name="material"
              placeholder="Material"
            />
            <label>Wheel Size</label>
            <ErrorMessage
              name="wheelSize"
              component="span"
              className="text-red-500"
            />
            <Field
              as="select"
              id="inputListItem"
              name="wheelSize"
              placeholder="Wheel Size"
            >
              <option value="26">26</option>
              <option value="27.5">27.5</option>
              <option value="29">29</option>
            </Field>
            <label>Is This Product Used?</label>
            <ErrorMessage
              name="condition"
              component="span"
              className="text-red-500"
            />
            <Field
              as="select"
              id="inputListItem"
              name="condition"
              placeholder=""
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Field>

            <button type="submit" className="bg-white">
              List Item
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProductForm;
