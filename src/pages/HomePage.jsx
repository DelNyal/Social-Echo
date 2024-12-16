// src/components/UsersPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/reducers/user/userSlice";
import { logout } from "../redux/reducers/auth/authSlice"; // Import logout action
import { useNavigate } from "react-router"; // For redirecting after logout

const UsersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to navigate the user

  const { users, status, error } = useSelector((state) => state.users);
  const { accessToken } = useSelector((state) => state.auth);

  // Fetch users when the component mounts or when status/accessToken changes
  useEffect(() => {
    if (status === "idle" || status === "failed") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status, accessToken]);

  // Logout handler
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate("/login"); // Redirect to the login page
  };

  // Render a loading state while data is being fetched
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  // Render an error message if fetching data fails
  if (status === "failed") {
    return (
      <div className="flex justify-center items-center h-screen bg-red-100">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  // Render the user list with a logout button
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logout Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User List</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* User List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="mt-4 flex justify-center items-center space-x-4">
                <a
                  href={`https://www.linkedin.com/in/${user.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/${user.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Twitter
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
