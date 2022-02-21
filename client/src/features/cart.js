import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (state, { payload }) => {
      let addToCart = payload;
      state.push(addToCart);
    },
  },
});
export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
