import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
  videoOpen: false,
  videoUrl: null,
  speakerOpen: false,
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
    openVideoEmbed: (state, action) => {
      state.videoOpen = true;
      state.videoUrl = action.payload;
    },
    closeVideoEmbed: (state, action) => {
      state.videoOpen = false;
      state.videoUrl = null;
    },
    openSpeakerModal: (state) => {
      state.speakerOpen = true;
    },
    closeSpeakerModal: (state) => {
      state.speakerOpen = false;
    },
  },
});

export const {
  openNavMenu,
  closeNavMenu,
  openVideoEmbed,
  closeVideoEmbed,
  openSpeakerModal,
  closeSpeakerModal,
} = layoutSlice.actions;

export default layoutSlice.reducer;
