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
  };

  const formValidation = yup.object().shape({
    productTitle: yup.string().required(),
    price: yup.number().required(),
    currency: yup.string().required(),
    productDescription: yup.string().required(),
    username: yup.string().required(),
  });

  const onSubmit = (data) => {
    let id;
    axios.post('http://127.0.0.1:3007/api/products', data).then((res) => {
      id = res;
      console.log(res);
      return id;
    });
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
          <Form>
            <label>Enter Product's Category</label>
            <ErrorMessage />
            <Field
              as="select"
              id="inputListItem"
              name="category"
              placeholder="Bike Category"
            >
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
            </Field>
            <label>Enter Product's Brand</label>
            <ErrorMessage />
            <Field
              type="text"
              id="inputListItem"
              name="brand"
              placeholder="Brand"
            />
            <label>Enter your Product's Type</label>
            <ErrorMessage />
            <Field
              as="select"
              id="inputListItem"
              name="type"
              placeholder="Bike Type"
            >
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
            </Field>
            <label>Enter the Primary Color</label>
            <ErrorMessage />
            <Field
              type="text"
              id="inputListItem"
              name="primaryColor"
              placeholder="Primary Color"
            />
            <label>Enter the Secondary Color</label>
            <ErrorMessage />
            <Field
              type="text"
              id="inputListItem"
              name="secondaryColor"
              placeholder="Secondary Color"
            />
            <label>Enter your Product's Size</label>
            <ErrorMessage />
            <Field
              as="select"
              id="inputListItem"
              name="size"
              placeholder="Size"
            >
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
            </Field>
            <label>What gender is it for</label>
            <ErrorMessage />
            <Field
              as="select"
              id="inputListItem"
              name="gender"
              placeholder="Gender"
            >
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
            </Field>
            <label>Suitable Riding Style</label>
            <ErrorMessage />
            <Field
              as="select"
              id="inputListItem"
              name="ridingStyle"
              placeholder="Riding Style"
            >
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
            </Field>
            <label>Materials Made Of</label>
            <ErrorMessage />
            <Field
              type="text"
              id="inputListItem"
              name="material"
              placeholder="Material"
            />
            <label>Wheel Size</label>
            <ErrorMessage />
            <Field
              as="select"
              id="inputListItem"
              name="wheelSize"
              placeholder="Wheel Size"
            >
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
              <option value="" key=""></option>
            </Field>
            <label>Is This Product Used?</label>
            <ErrorMessage />
            <Field
              as="select"
              id="inputListItem"
              name="condition"
              placeholder=""
            />
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
