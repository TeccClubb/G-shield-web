import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isPlansLoadedOnce: false,
  plans: [],
  isActivePlanLoadedOnce: false,
  activePlan: null,
};

const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    setPlans: (state, action) => {
      state.isPlansLoadedOnce = true;
      state.plans = action.payload;
    },

    setActivePlan: (state, action) => {
      state.isActivePlanLoadedOnce = true;
      state.activePlan = action.payload;
    },
  },
});

export const { setPlans, setActivePlan } = plansSlice.actions;

export default plansSlice.reducer;
