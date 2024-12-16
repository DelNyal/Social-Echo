import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import tokenMiddleware from "../middleware/tokenMiddleware";
import { initializeAuth, refreshAccessToken } from "./reducers/auth/authThunks";
import { thunk } from "redux-thunk";
const createAppStore = async () => {
  try {
    const store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tokenMiddleware),
    });

    await store.dispatch(initializeAuth());

    return store;
  } catch (err) {
    console.log(err);

    throw new Error("Some error occurred");
  }
};
export default createAppStore;
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(tokenMiddleware),
// });

// // Initialize authentication state
// (async () => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     try {
//       console.log("genaccess");
//       //await store.dispatch(refreshAccessToken());
//     } catch (error) {
//       console.error("Failed to initialize auth state", error);
//     }
//   }
// })();

// export default store;
