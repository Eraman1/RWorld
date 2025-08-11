import API from "./axios"; // 👈 Your pre-configured Axios instance

// TypeScript interface for a single enquiry
export interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  timeStamp: string | number | Date;
}

// Function to fetch all enquiries with Authorization
export const getAllStockEnquiry = async (): Promise<Enquiry[]> => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found in localStorage. Please login.");
  }

  const response = await API.get<Enquiry[]>("/stock-enquiry", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
