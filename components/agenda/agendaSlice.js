import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  daySelected: '2023-10-11',
};

export const agendaSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setDaySelected: (state, action) => {
      state.daySelected = action.payload;
    },
  },
});

export const { setDaySelected } = agendaSlice.actions;

export default agendaSlice.reducer;
