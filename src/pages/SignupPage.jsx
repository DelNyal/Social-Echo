import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/reducers/auth/authThunks";

const SignupPage = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
    email: "",
  });
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(credentials));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br">
      <div className="bg-white p-8 md:shadow-lg w-full max-w-md md:rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Join us today! It’s quick and easy.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={credentials.name}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 disabled:bg-gray-400 transition duration-300"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        {error && (
          <p className="mt-4 text-red-500 text-center text-sm">{error}</p>
        )}
        {message && (
          <p className="mt-4 text-green-500 text-center text-sm">{message}</p>
        )}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-700 hover:underline hover:text-purple-900"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
