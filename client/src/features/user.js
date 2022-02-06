import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: false,
  reducers: {
    setLogin: (state, { payload }) => {
      state = payload;
      return state;
    },

    // addNewProduct: (state, action) => {
    //   const newProduct = action.payload;
    //   state = state.push(newProduct);
    // },
  },
});
export const { setLogin } = usersSlice.actions;

export default usersSlice.reducer;
