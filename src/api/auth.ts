import API from "./axios";

// ✅ Define types locally
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

// ✅ Login API call with types
export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await API.post<LoginResponse>("/auth/login", data);
  return response.data;
};
