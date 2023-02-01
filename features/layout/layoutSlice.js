import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
  videoOpen: false,
  videoUrl: null,
  speakerOpen: false,
  sponsorFormOpen: false,
  registrationOpen: false,
  selectedSpeaker: null,
  formSubmissionText: 'Your submission has been sent.',
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
    setSpeaker: (state, action) => {
      state.selectedSpeaker = action.payload;
      state.speakerOpen = !state.speakerOpen;
    },
    setThankYouMessage: (state, action) => {
      state.formSubmissionText = action.payload;
    },
  },
});

export const {
  setThankYouMessage,
  openNavMenu,
  closeNavMenu,
  openVideoEmbed,
  closeVideoEmbed,
  openSpeakerModal,
  closeSpeakerModal,
  openSponsorForm,
  toggleRegistrationModal,
  setSpeaker,
} = layoutSlice.actions;

export default layoutSlice.reducer;
