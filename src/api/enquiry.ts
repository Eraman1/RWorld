import API from "./axios";

// Type for a single enquiry
export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  path?: string;
}

export interface Enquiry extends EnquiryFormData {
  _id: string;
  timeStamp: string;
}

// 👇 New type for paginated response
export interface PaginatedEnquiries {
  enquiries: Enquiry[];
  total: number;
  page: number;
  pages: number;
}

// Fetch paginated enquiries
export const getAllEnquiry = async (
  page: number = 1,
  limit: number = 20
): Promise<PaginatedEnquiries> => {
  const response = await API.get<PaginatedEnquiries>(
    `/enquiry?page=${page}&limit=${limit}`
  );
  return response.data;
};

// Send enquiry
export const sendEnquiry = async (data: EnquiryFormData): Promise<Enquiry> => {
  const response = await API.post<Enquiry>("/enquiry", data);
  return response.data;
};
