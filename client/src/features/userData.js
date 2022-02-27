import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {},
  reducers: {
    setUserData: (state, { payload }) => {
      state = payload;
      return state;
    },

    // addNewProduct: (state, action) => {
    //   const newProduct = action.payload;
    //   state = state.push(newProduct);
    // },
  },
});
export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
