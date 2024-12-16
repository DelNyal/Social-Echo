import axios from "axios";

// Ensure your BASE_URL is set correctly in the environment variables
const BASE_URL = import.meta.env.VITE_BASE_API;

if (!BASE_URL) {
  throw new Error("VITE_BASE_API environment variable is not defined");
}

// Axios request interceptor to add Authorization header
const authInterceptor = (req) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
};

// Create an Axios instance
export const API = axios.create({
  baseURL: BASE_URL,
});

// Apply the interceptor to include the Authorization header
API.interceptors.request.use(authInterceptor, (error) => {
  return Promise.reject(error); // Reject if there's an error during the request
});

// Handle API errors gracefully
export const handleApiError = async (error) => {
  const defaultErrorMessage = "An unexpected error occurred.";
  
  // Check if error response exists and contains useful data
  if (error.response) {
    const errorMessage = error.response?.data?.message || defaultErrorMessage;
    const errorData = error.response?.data || null;
    return { error: errorMessage, data: errorData };
  }
  
  // Fallback to a generic error message if no response exists
  console.error("API Error:", error);  // Log the full error object for debugging
  return { error: defaultErrorMessage, data: null };
};

// Optional: You could include a retry mechanism for certain error types (e.g., 5xx errors) if needed
