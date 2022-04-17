import { createSlice } from "@reduxjs/toolkit";

export const flashSlice = createSlice({
  name: "flash",
  initialState: {
    isFlash: false,
    message: null,
    type: null,
    change: false,
  },
  reducers: {
    flashAlert: (state, action) => {
      state.isFlash = true;
      state.message = action.payload.message;
      state.type = action.payload.type ?? "success";
      state.change = !state.change;
    },

    resetAlert: (state) => {
      state.isFlash = false;
      state.message = null;
      state.type = null;
    },
  },
});

export const { flashAlert, resetAlert } = flashSlice.actions;

export default flashSlice.reducer;
