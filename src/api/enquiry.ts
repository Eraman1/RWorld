import API from "./axios"; // 👈 Your pre-configured Axios instance

// TypeScript interface for a single enquiry
// Form data interface (what you collect from the user)
export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  path?: string;
}

// API response interface (what the server returns)
export interface Enquiry extends EnquiryFormData {
  _id: string;
  timeStamp: string;
}

// Function to fetch all enquiries with Authorization
export const getAllEnquiry = async (): Promise<Enquiry[]> => {
  const response = await API.get<Enquiry[]>("/enquiry");
  return response.data;
};

export const sendEnquiry = async (data: EnquiryFormData): Promise<Enquiry> => {
  const response = await API.post<Enquiry>("/enquiry", data);
  return response.data;
};
