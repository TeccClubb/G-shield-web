import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAppMounted: false,
  isLegalNoticeLoadedOnce: false,
  termsAndConditions: "",
  privacyPolicy: "",
  isBillingAddressLoadedOnce: false,
  billingAddress: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppMounted: (state) => {
      state.isAppMounted = true;
    },

    setLegalNotes: (state, action) => {
      state.isLegalNoticeLoadedOnce = true;
      state.termsAndConditions = action.payload.termsAndConditions;
      state.privacyPolicy = action.payload.privacyPolicy;
    },

    setBillingAddress: (state, action) => {
      state.billingAddress = action.payload;
    },
  },
});

export const { setAppMounted, setLegalNotes, setBillingAddress } =
  appSlice.actions;

export default appSlice.reducer;
