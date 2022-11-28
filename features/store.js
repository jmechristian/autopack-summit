import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layout/layoutSlice';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});
