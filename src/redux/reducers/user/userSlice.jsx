// src/redux/usersSlice.js
import axios from "../../api/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Asynchronous thunk to fetch users from an API (replace URL with actual API endpoint)
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await axios.get(`/api/users`);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response?.data?.message || "Failed to login");
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle", // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
