import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layout/layoutSlice';
import agendaSlice from '../components/agenda/agendaSlice';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    agenda: agendaSlice,
  },
});
