import React from 'react';
import axios from 'axios';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const ListingForm = () => {
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
    axios.post('http://localhost:3007/api/products', data).then((res) => {
      console.log(res);
      console.log('it worked');
    });
  };

  return (
    <div className="flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={formValidation}
      >
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

          <button type="submit" className="bg-white">
            List Item
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ListingForm;