import React, { useEffect, useState, useMemo } from "react";
import { Search, Download, Filter, X } from "lucide-react";
import { getAllBlogs, type BlogPostFormData } from "@/api/blog";


export default function RWorldBlog() {
    const [blogs, setBlogs] = useState<BlogPostFormData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


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
                    R-World Software Blogs
                </h2>

            </div>



            {loading ? (
                <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
                    <span className="ml-2 text-gray-700 dark:text-gray-200">Loading...</span>
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
                                {["title", "excerpt", "author", "date", "category", "edit", "delete"].map(header => (
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
                                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                                        No blogs found
                                    </td>
                                </tr>
                            ) : (
                                blogs.map((blog, index) => (
                                    <tr
                                        key={blog.slug || index}
                                        className={index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}
                                    >
                                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                                            {blog.title}
                                        </td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300 max-w-xs truncate">
                                            {blog.excerpt}
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
                                        <td className="px-4 py-3 text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                                            Edit
                                        </td>
                                        <td className="px-4 py-3 text-red-600 dark:text-red-400 cursor-pointer hover:underline">
                                            Delete
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

}