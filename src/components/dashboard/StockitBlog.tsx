import React, { useEffect, useState, useMemo } from "react";
import { Search, Download, Filter, X } from "lucide-react";
import {
  getAllBlogs,
  deleteBlog,
  type BlogPostFormData,
} from "@/api/stockitBlog";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function StockitBlog() {
  const [blogs, setBlogs] = useState<BlogPostFormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null); // store id for modal
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Filter states
  // const [searchTerm, setSearchTerm] = useState("");
  // const [serviceFilter, setServiceFilter] = useState("");
  // const [dateFilter, setDateFilter] = useState("");
  // const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs();
        setBlogs(data);
      } catch (err: any) {
        setError(err.message || "Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const confirmDelete = (id?: string) => {
    if (!id) return;
    setDeleteId(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteBlog(deleteId);
      setBlogs((prev) => prev.filter((blog) => blog._id !== deleteId));
      toast.success("Blog deleted successfully!");
    } catch (err: any) {
      toast.error(err?.message || "Failed to delete blog");
    } finally {
      setShowModal(false);
      setDeleteId(null);
    }
  };

  // Get unique services for filter dropdown
  // const uniqueServices = useMemo(() => {
  //     return [...new Set(enquiries.map(enquiry => enquiry.service))];
  // }, [enquiries]);

  // Filter enquiries based on search term, service, and date
  // const filteredEnquiries = useMemo(() => {
  //     return enquiries.filter(enquiry => {
  //         const matchesSearch = searchTerm === "" ||
  //             enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //             enquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //             enquiry.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //             enquiry.message.toLowerCase().includes(searchTerm.toLowerCase());

  //         const matchesService = serviceFilter === "" || enquiry.service === serviceFilter;

  //         const matchesDate = dateFilter === "" ||
  //             new Date(enquiry.timeStamp).toISOString().split('T')[0] === dateFilter;

  //         return matchesSearch && matchesService && matchesDate;
  //     });
  // }, [enquiries, searchTerm, serviceFilter, dateFilter]);

  // const clearFilters = () => {
  //     setSearchTerm("");
  //     setServiceFilter("");
  //     setDateFilter("");
  // };

  // const hasActiveFilters = searchTerm || serviceFilter || dateFilter;

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Stock It Blogs
        </h2>
        <button
          onClick={() => navigate("/create-stockit-blog")}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <span>+ Create Blog</span>
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
          <span className="ml-2 text-gray-700 dark:text-gray-200">
            Loading...
          </span>
        </div>
      ) : error ? (
        <div className="text-red-500 dark:text-red-400 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-700">
          {error}
        </div>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                {[
                  "title",
                  "excerpt",
                  "author",
                  "date",
                  "category",
                  "edit",
                  "delete",
                ].map((header) => (
                  <th
                    key={header}
                    className="text-left px-4 py-3 font-medium text-gray-900 dark:text-gray-100"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {blogs.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-8 text-center text-gray-500 dark:text-gray-400"
                  >
                    No blogs found
                  </td>
                </tr>
              ) : (
                blogs.map((blog, index) => (
                  <tr
                    key={blog.slug || index}
                    className={
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800"
                    }
                  >
                    {/* ✅ Title clickable → navigate with slug */}
                    <td
                      className="px-4 py-3 font-medium text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                      onClick={() => navigate(`/blog/${blog.slug}`)}
                    >
                      {blog.title.length > 30
                        ? blog.title.substring(0, 30) + "..."
                        : blog.title}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 max-w-xs truncate">
                      {blog.excerpt
                        ? blog.excerpt.length > 30
                          ? blog.excerpt.substring(0, 30) + "..."
                          : blog.excerpt
                        : "No excerpt"}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      {blog.author?.name}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      {new Date(blog.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                        {blog.category}
                      </span>
                    </td>
                    <td
                      className="px-4 py-3 text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                      onClick={() =>
                        navigate(`/update-stockit-blog/${blog._id}`)
                      }
                    >
                      Edit
                    </td>
                    <td
                      className="px-4 py-3 text-red-600 dark:text-red-400 cursor-pointer hover:underline"
                      onClick={() => confirmDelete(blog._id)} // pass _id here
                    >
                      Delete
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* ✅ Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Confirm Delete
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Are you sure you want to delete this blog? This action cannot be
              undone.
            </p>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border cursor-pointer border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg border cursor-pointer border-red-600 bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
