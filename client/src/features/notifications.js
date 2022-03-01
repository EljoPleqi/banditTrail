import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: false,
  reducers: {
    setNotification: (state, { payload }) => {
      state = payload;
      return state;
    },

    // addNewProduct: (state, action) => {
    //   const newProduct = action.payload;
    //   state = state.push(newProduct);
    // },
  },
});

export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
