import React, { useEffect, useState, useMemo } from "react";
import { Search, Download, Filter, X } from "lucide-react";
import { getAllEnquiry, type Enquiry } from "@/api/enquiry";

export default function RWorldEnquiry() {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [total, setTotal] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);



    // Filter states
    const [searchTerm, setSearchTerm] = useState("");
    const [serviceFilter, setServiceFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [page, setPage] = useState(1);
    const [limit] = useState(20); // fixed per page
    const [totalPages, setTotalPages] = useState(1);



    const fetchEnquiries = async (pageNumber: number) => {
        try {
            const data = await getAllEnquiry(pageNumber, limit);
            if (pageNumber === 1) {
                setEnquiries(data.enquiries); // fresh load
            } else {
                setEnquiries((prev) => [...prev, ...data.enquiries]); // append for "Load More"
            }
            setTotal(data.total);
            setTotalPages(data.pages);
            setPage(pageNumber);
        } catch (err: any) {
            setError(err.message || "Error fetching enquiries");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchEnquiries(1);
    }, []);

    const loadMore = async () => {
        if (page < totalPages) {
            setLoadingMore(true);
            await fetchEnquiries(page + 1);
            setLoadingMore(false);
        }
    };


    // Get unique services for filter dropdown
    const uniqueServices = useMemo(() => {
        return [...new Set(enquiries.map(enquiry => enquiry.service))];
    }, [enquiries]);

    // Filter enquiries based on search term, service, and date
    const filteredEnquiries = useMemo(() => {
        return enquiries.filter(enquiry => {
            const matchesSearch =
                searchTerm === "" ||
                (enquiry.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
                (enquiry.email?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
                (enquiry.company?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
                (enquiry.message?.toLowerCase() || "").includes(searchTerm.toLowerCase());

            const matchesService = serviceFilter === "" || enquiry.service === serviceFilter;

            const matchesDate =
                dateFilter === "" ||
                new Date(enquiry.timeStamp).toISOString().split("T")[0] === dateFilter;

            return matchesSearch && matchesService && matchesDate;
        });
    }, [enquiries, searchTerm, serviceFilter, dateFilter]);


    // Download function
    const downloadCSV = () => {
        const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Message', 'Date'];

        const csvContent = [
            headers.join(','),
            ...filteredEnquiries.map(enquiry => [
                `"${enquiry.name}"`,
                `"${enquiry.email}"`,
                `"${enquiry.phone}"`,
                `"${enquiry.company}"`,
                `"${enquiry.service}"`,
                `"${enquiry.message.replace(/"/g, '""')}"`,
                `"${new Date(enquiry.timeStamp).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                })}"`
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `enquiries-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setServiceFilter("");
        setDateFilter("");
    };

    const hasActiveFilters = searchTerm || serviceFilter || dateFilter;

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    R-World Software Enquiries
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                    >
                        <Filter size={16} />
                        Filters
                    </button>
                    <button
                        onClick={downloadCSV}
                        className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors"
                        disabled={filteredEnquiries.length === 0}
                    >
                        <Download size={16} />
                        Download CSV
                    </button>
                </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4 border border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search Filter */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
                                Search
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search name, email, company..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Service Filter */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
                                Service
                            </label>
                            <select
                                value={serviceFilter}
                                onChange={(e) => setServiceFilter(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">All Services</option>
                                {uniqueServices.map(service => (
                                    <option key={service} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>

                        {/* Date Filter */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
                                Date
                            </label>
                            <input
                                type="date"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Clear Filters */}
                    {hasActiveFilters && (
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={clearFilters}
                                className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                <X size={14} />
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Results Summary */}
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Showing {enquiries.length} of {total} enquiries
                {hasActiveFilters && (
                    <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                        Filtered
                    </span>
                )}
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
                                {["Name", "Email", "Phone", "Company", "Service", "Message", "Date"].map(header => (
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
                            {filteredEnquiries.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                                        {hasActiveFilters ? "No enquiries match your filters" : "No enquiries found"}
                                    </td>
                                </tr>
                            ) : (
                                filteredEnquiries.map((enquiry, index) => (
                                    <tr
                                        key={enquiry._id}
                                        className={index % 2 === 0
                                            ? "bg-white dark:bg-gray-900"
                                            : "bg-gray-50 dark:bg-gray-800"}
                                    >
                                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{enquiry.name}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{enquiry.email}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{enquiry.phone}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{enquiry.company}</td>
                                        <td className="px-4 py-3">
                                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                                                {enquiry.service}
                                            </span>
                                        </td>
                                        <td
                                            className="px-4 py-3 text-gray-700 dark:text-gray-300 max-w-xs truncate"
                                            title={enquiry.message}
                                        >
                                            {enquiry.message}
                                        </td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                                            {new Date(enquiry.timeStamp).toLocaleString("en-IN", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true,
                                            })}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
            {page < totalPages && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={loadMore}
                        disabled={loadingMore}
                        className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-lg shadow hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                        {loadingMore ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a12 12 0 00-12 12h4z"
                                    ></path>
                                </svg>
                                Loading...
                            </>
                        ) : (
                            "Load More"
                        )}
                    </button>
                </div>
            )}



        </div>
    );

}