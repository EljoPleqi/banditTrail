import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setAddToCart: (state, { payload }) => {
      let addToCart = payload;
      state.push(addToCart);
    },
    setRemoveFromCart: (state, { payload }) => {
      let itemIndex = payload;
      console.log(state);
      state.splice(itemIndex, 1);
    },
    setEmptyCart: (state, { payload }) => {
      state.splice(0, state.length);
    },
  },
});
export const { setAddToCart, setRemoveFromCart, setEmptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
