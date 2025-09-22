import API from "./axios";

export interface BlogPostFormData {
  _id?: string;
  excerpt: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  date: string; // Publication date
  readTime: string;
  category: string;
  tags: string[];
  // tableOfContents: string[];
  // featured: boolean;
}

export const createBlog = async (blogData: BlogPostFormData) => {
  const response = await API.post("/stockit-blogs", blogData);
  return response.data;
};

// export const getAllBlogs = async () => {
//   const response = await API.get("/blogs?limit=5");
//   return response.data;
// };
export const getAllBlogs = async () => {
  const response = await API.get("/stockit-blogs");
  // ✅ Return only the array
  return response.data.blogs || response.data;
  // If the backend sends only array (no metadata), fallback to response.data
};

export const getBlogById = async (id: string) => {
  const response = await API.get(`/stockit-blogs/${id}`);
  return response.data;
};

export const getBlogBySlug = async (slug: string) => {
  const response = await API.get(`/stockit-blogs/slug/${slug}`);
  return response.data;
};

export const deleteBlog = async (id: string) => {
  const response = await API.delete(`/stockit-blogs/${id}`);
  return response.data;
};

export const updateBlog = async (id: string, blogData: BlogPostFormData) => {
  const response = await API.put(`/stockit-blogs/${id}`, blogData);
  return response.data;
};
