import React, { useEffect } from 'react';
import axios from 'axios';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

const ProductDetailsForm = () => {
  const productData = useSelector((state) => state.products);
  console.log(productData);
  // useEffect(() => {
  //   axios.post('http://127.0.0.1:3007/api/product-details').then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  // const formValidation = yup.object().shape()({
  //   category: yup.string().required(),
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

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>FORM 2</h1>
      {/* <Formik onSubmit={onSubmit} validationSchema={formValidation}>
        <Form>
          <label></label>
          <ErrorMessage />
          <Field
            type="text"
            id="inputListItem"
            name="category"
            placeholder="Bike Category"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="text"
            id="inputListItem"
            name="brand"
            placeholder="Brand"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="text"
            id="inputListItem"
            name="type"
            placeholder="Bike Type"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="text"
            id="inputListItem"
            name="primaryColor"
            placeholder="Primary Color"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="text"
            id="inputListItem"
            name="secondaryColor"
            placeholder="Secondary Color"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="text"
            id="inputListItem"
            name="size"
            placeholder="Size"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="text"
            id="inputListItem"
            name="gender"
            placeholder="Gender"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="text"
            id="inputListItem"
            name="ridingStyle"
            placeholder="Riding Style"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="text"
            id="inputListItem"
            name="material"
            placeholder="Material"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="number"
            id="inputListItem"
            name="wheelSize"
            placeholder="Wheel Size"
          />
          <label></label>
          <ErrorMessage />
          <Field
            type="number"
            id="inputListItem"
            name="condition"
            placeholder=""
          />
          <button type="submit"></button>
        </Form>
      </Formik> */}
    </div>
  );
};

export default ProductDetailsForm;
