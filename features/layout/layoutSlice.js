import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    openNavMenu: (state) => {
      state.navOpen = true;
    },
    closeNavMenu: (state) => {
      state.navOpen = false;
    },
  },
});

export const { openNavMenu, closeNavMenu } = layoutSlice.actions;

export default layoutSlice.reducer;
