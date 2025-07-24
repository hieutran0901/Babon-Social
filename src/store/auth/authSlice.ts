import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { getMeThunk, loginThunk } from "./thunk";
import { setToken } from "@/request";

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loadUserInfo: (state, action: PayloadAction<any>) => {
      // state.isAuthenticated = true;
      // state.userInfo = action.payload;
    },

    updateUserInfo: (state, action: PayloadAction<any>) => {
      // state.userInfo = { ...state.userInfo, ...action.payload };
    },

    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(loginThunk.fulfilled, (state, action) => {
      // setToken(action?.payload);
      localStorage.setItem("token", action?.payload?.token);
    });

    builder.addCase(getMeThunk.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getMeThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.userInfo = action.payload;
    });

    builder.addCase(getMeThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });
  },
});

export const { loadUserInfo, logout, updateUserInfo } = authSlice.actions;

export default authSlice;
