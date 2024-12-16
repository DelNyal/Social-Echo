import axios from "../../api/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAccessToken, setRefreshToken, setUserData } from "./authSlice";
import { isTokenValid } from "../../utils/authUtils";

export const initializeAuth = createAsyncThunk(
  "auth/initializeAuth",
  async (_, { rejectWithValue }) => {
    try {
      const profile = JSON.parse(localStorage.getItem("profile"));
      const accessToken = profile?.accessToken;
      const refreshToken = profile?.refreshToken;
      const user = profile?.user;
      const expires = profile?.expires_at;
      console.log(profile);
      console.log(expires);
      console.log(isTokenValid(expires));

      if (accessToken && refreshToken) {
        if (isTokenValid(expires)) {
          console.log("Still valid!");
          return { user, accessToken, refreshToken };
        } else {
          console.log("refresh");
          const acc = null;
          return { user, acc, refreshToken };
        }
      }
      return { user, accessToken, refreshToken };
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to login"
      );
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/login`, credentials);
      const { accessToken, refreshToken, user, expires_at } = response.data;
      const profile = {
        user,
        accessToken,
        refreshToken,
        expires_at,
      };
      localStorage.setItem("profile", JSON.stringify(profile));
      return { user, accessToken, refreshToken };
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to login"
      );
    }
  }
);
//
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/register`, credentials);
      const { message } = response.data;

      return { message };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to signup"
      );
    }
  }
);
//
export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (refreshToken, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/refreshToken`, { refreshToken });
      const { user, accessToken, expires_at } = response.data;
      const profile = JSON.parse(localStorage.getItem("profile")) || {};

      localStorage.setItem(
        "profile",
        JSON.stringify({ ...profile, accessToken, expires_at })
      );
      console.log("New AccessToken:", localStorage.getItem("profile"));
      return { user, accessToken };
    } catch (error) {
      console.error("Error refreshing access token:", error);
      if (error.response) {
        console.error("API Response Error:", error.response.data);
      }
      return rejectWithValue(
        error.response?.data?.message || "Failed to refresh access token"
      );
    }
  }
);
