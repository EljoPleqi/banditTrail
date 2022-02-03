import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProduct: (state, action) => {
      state = action.payload;
      return [...state];
    },

    // addNewProduct: (state, action) => {
    //   const newProduct = action.payload;
    //   state = state.push(newProduct);
    // },
  },
});
export const { setProduct } = productsSlice.actions;
// export const { addNewProduct } = productsSlice.actions;

export default productsSlice.reducer;
