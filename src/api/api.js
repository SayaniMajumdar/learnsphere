import axios from "axios";

const BACKEND_BASE_URL = "https://learnsphere-08mn.onrender.com";

const API = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    if (status === 401 && !originalRequest?._retry) {
      const refreshToken = localStorage.getItem("refresh_token");

      if (!refreshToken) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(
          `${BACKEND_BASE_URL}/api/auth/refresh`,
          { refresh_token: refreshToken },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const newAccessToken = refreshResponse.data?.access_token;
        const newRefreshToken = refreshResponse.data?.refresh_token;

        if (newAccessToken) {
          localStorage.setItem("access_token", newAccessToken);
          API.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }

        if (newRefreshToken) {
          localStorage.setItem("refresh_token", newRefreshToken);
        }

        return API(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
