import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'searchOpen',
  initialState: false,
  reducers: {
    setSearchOpen: (state, { payload }) => {
      state = payload;
      return state;
    },

    // addNewProduct: (state, action) => {
    //   const newProduct = action.payload;
    //   state = state.push(newProduct);
    // },
  },
});
export const { setSearchOpen } = modalSlice.actions;

export default modalSlice.reducer;
