import { createSlice } from '@reduxjs/toolkit';

const subscriptionSlide = createSlice({
  name: 'sub',
  initialState: {},
  reducers: {
    switchSub: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { switchSub } = subscriptionSlide.actions;

export default subscriptionSlide.reducer;
