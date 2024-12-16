import { API, handleApiError } from "./utils";

export const signIn = async (path,formData) => {
  try {
    const res = await API.post(path, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};
//send refreshToken to make refreshAccessToken
export const refreshAccessToken = async (formData) => {
  try {
    const res = await API.post("/refresh", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};
//
export const validateAccessToken = (accessToken) => {
  ///validateAccessToken function
  return true;
};
