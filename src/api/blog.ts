import API from "./axios";

export interface BlogPostFormData {
  excerpt: string;
  title: string;
  slug?: string;
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
  tableOfContents: string[];
}

export const createBlog = async (blogData: BlogPostFormData) => {
  const response = await API.post("/blogs", blogData);
  return response.data;
};

// export const getAllBlogs = async () => {
//   const response = await API.get("/blogs?limit=5");
//   return response.data;
// };
export const getAllBlogs = async () => {
  const response = await API.get("/blogs?limit=10");
  // ✅ Return only the array
  return response.data.blogs || response.data;
  // If the backend sends only array (no metadata), fallback to response.data
};

export const getBlogById = async (id: string) => {
  const response = await API.get(`/blogs/${id}`);
  return response.data;
};

export const getBlogBySlug = async (slug: string) => {
  const response = await API.get(`/blogs/slug/${slug}`);
  return response.data;
};
