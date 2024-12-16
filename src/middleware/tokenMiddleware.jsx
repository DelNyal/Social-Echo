// tokenMiddleware.js

import { refreshAccessToken } from "../redux/reducers/auth/authThunks";
import { isTokenValid } from "../redux/utils/authUtils";

const tokenMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  console.log("State before action:", store.getState());

  const result = next(action);

  console.log("State after action:", store.getState());
  const state = store.getState();
  const token = state.auth?.accessToken;
  const refreshToken = state.auth?.refreshToken;

  if (!token) {
    if (action.type == "auth/initializeAuth/fulfilled") {
      console.log("Work!");
      try {
        store.dispatch(refreshAccessToken(refreshToken));
      } catch (error) {
        console.log(error);
        //store.dispatch({ type: "logout" });
      }
    }
  }
  return result;
};

export default tokenMiddleware;
