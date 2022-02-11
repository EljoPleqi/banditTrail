import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    setLogin: (state, { payload }) => {
      state = false;

      state = payload;
      return state;
    },

    // addNewProduct: (state, action) => {
    //   const newProduct = action.payload;
    //   state = state.push(newProduct);
    // },
  },
});
export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
