import API from "./axios";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
}

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await API.post<LoginResponse>("/auth/login", data);

  // Save tokens after login
  localStorage.setItem("accessToken", response.data.token.accessToken);
  localStorage.setItem("refreshToken", response.data.token.refreshToken);

  return response.data;
};
