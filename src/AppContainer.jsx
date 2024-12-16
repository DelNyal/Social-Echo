import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import App from "./App";

import createAppStore from "./redux/store";
import {
  BeatLoading,
  BounceLoading,
  CircularLoading,
  ClockLoading,
  RotateLoading,
  SpinLoading,
  WaveLoading,
  DashLoading,
  CopperLoading,
} from "respinner";
import CommonLoading from "./components/loaders/CommonLoading";
const ErrorComponent = ({ errorMessage }) => (
  <div className="text-red-500 font-bold text-center">{errorMessage}</div>
);
const AppContainer = () => {
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const initializeStore = async () => {
      try {
        const appStore = await createAppStore();
        setStore(appStore);
      } catch (err) {
        setError(`Error initializing the app: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    initializeStore();
  }, []);
  if (loading || error) {
    return (
      <div className="flex items-center justify-center h-screen">
        {loading ? <CommonLoading /> : <ErrorComponent errorMessage={error} />}
      </div>
    );
  }
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
