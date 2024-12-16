import { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import store from "./redux/store";
import { Provider } from "react-redux";
import PublicPage from "./pages/PublicPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import { useSelector } from "react-redux";
import { validateAccessToken } from "./redux/api/authApi";
import FallbackLoading from "./components/loaders/FallbackLoading";

// Helper component to handle private routes
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<FallbackLoading />}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Private Routes */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
