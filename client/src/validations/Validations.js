import * as yup from 'yup';

export const signUpFormValidation = yup.object().shape({
  username: yup.string().min(4).required(),
  password: yup.string().min(8).max(64).required(),
  userEmail: yup.string().email().required(),
  userRidingStyle: yup.string(),
  phone: yup.number(),
});

export const bikeListingFormValidation = yup.object().shape({
  productTitle: yup.string().required(),
  price: yup.number().required(),
  currency: yup.string().required(),
  productDescription: yup.string().required(),
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

export const loginFormValidation = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});
