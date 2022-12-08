import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
  videoOpen: false,
  videoUrl: null,
  speakerOpen: false,
  sponsorFormOpen: false,
  registrationOpen: false,
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
    openSponsorForm: (state) => {
      state.sponsorFormOpen = !state.sponsorFormOpen;
    },
    toggleRegistrationModal: (state) => {
      state.registrationOpen = !state.registrationOpen;
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
  openSponsorForm,
  toggleRegistrationModal,
} = layoutSlice.actions;

export default layoutSlice.reducer;
