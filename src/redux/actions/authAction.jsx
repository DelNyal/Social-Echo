import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/authConstants";
import { refreshAccessToken } from "../api/authApi";
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
export const logout = () => ({ type: LOGOUT });

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/login`,
      credentials
    );
    const { accessToken, refreshToken, user } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || "Failed to login"));
  }
};

export const refreshAccessTokenAction = () => async (dispatch) => {
    try {
      const newAccessToken = await refreshAccessToken();
      localStorage.setItem("accessToken", newAccessToken);
    } catch (error) {
      dispatch(logout());
    }
  };
