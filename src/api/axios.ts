import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-4ope.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token dynamically for each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // store separately from refresh token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for auto-refresh
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    // Check if error is 401 or 403 and the request hasn't been retried
    if ((status === 401 || status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // Call refresh token endpoint
        const { data } = await axios.post(
          "https://backend-4ope.onrender.com/api/auth/refresh",
          { refreshToken },
          { headers: { "Content-Type": "application/json" } }
        );

        // Save new tokens
        localStorage.setItem("accessToken", data.tokens.accessToken);
        localStorage.setItem("refreshToken", data.tokens.refreshToken);

        // Update the original request's Authorization header
        originalRequest.headers.Authorization = `Bearer ${data.tokens.accessToken}`;

        // Retry the original request with new token
        return API(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        localStorage.clear(); // Clear tokens and logout
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default API;
