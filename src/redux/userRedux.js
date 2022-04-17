import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    token: null,
    isFetching: false,
    isError: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isError = false;
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.isLogin = true;
      state.token = action.payload.access_token;
    },
    loginFailure: (state, action) => {
      state.isLogin = false;
      state.isFetching = false;
      state.isError = true;
      state.error = action.payload;
      console.log(state.error);
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
