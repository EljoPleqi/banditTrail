import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const createNewTrail = () => {
  const initialValues = {
    trailName: '',
    trailDescription: '',
    trailDuration: 0,
    traiDistance: 0,
    trailDifficulty: '',
  };

  const formValidation = yup.object().shape({
    trailName: yup.string().required(),
    trailDescription: yup.string().required(),
    trailDuration: yup.number().required(),
    traiDistance: yup.number().required(),
    trailDifficulty: yup.string().required(),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={formValidation}
      >
        <Form className="flex flex-col gap-4 p-24">
          <label>Enter Trail Name </label>
          <ErrorMessage
            name="trailName"
            component="span"
            className="text-red-500"
          ></ErrorMessage>
          <Field
            type="text"
            id="inputListItem"
            name="trailName"
            placeholder="Trail Name"
            className="bg-neutral-100 py-4 px-2 rounded-md"
          ></Field>
          <label>Enter Trail Description </label>
          <ErrorMessage
            name="trailDescription"
            component="span"
            className="text-red-500"
          ></ErrorMessage>
          <Field
            type="text"
            id="inputListItem"
            name="trailDescription"
            placeholder="Trail Description"
            className="bg-neutral-100 py-4 px-2 rounded-md"
          ></Field>
          <div className="flex justify-between">
            <div className=" flex flex-col w-64">
              <label>Enter Trail Duration </label>
              <ErrorMessage
                name="trailDuration"
                component="span"
                className="text-red-500"
              ></ErrorMessage>
              <Field
                type="text"
                id="inputListItem"
                name="trailDuration"
                placeholder="Trail Duration"
                className="bg-neutral-100 py-4 px-2 rounded-md"
              ></Field>
            </div>
            <div className=" flex flex-col w-64">
              <label>Enter Trail Distance </label>
              <ErrorMessage
                name="trailDistance"
                component="span"
                className="text-red-500"
              ></ErrorMessage>
              <Field
                type="text"
                id="inputListItem"
                name="trailDistance"
                placeholder="Trail Distance"
                className="bg-neutral-100 py-4 px-2 rounded-md"
              ></Field>
            </div>
            <div className=" flex flex-col w-64">
              <label>Enter Trail Difficulty </label>
              <ErrorMessage
                name="trailDifficulty"
                component="span"
                className="text-red-500"
              ></ErrorMessage>
              <Field
                type="text"
                id="inputListItem"
                name="trailDifficulty"
                placeholder="Trail Difficulty"
                className="bg-neutral-100 py-4 px-2 rounded-md"
              ></Field>
            </div>
          </div>
          <div className="py-6 px-2 place-self-end">
            <button
              type="submit"
              className="bg-[#606c38] hover:bg-[#283618] hover:px-16 hover:transition-all py-4 px-8 justify-end rounded-md text-white"
            >
              Create New Trail
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default createNewTrail;
