import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import usersRecuder from "./user/userSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  users: usersRecuder,
  // Additional reducers can be added here
});

export default rootReducer;
