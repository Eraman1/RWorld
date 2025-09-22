import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ added Link
import {
    LogOut,
    MessageSquare,
    ChevronDown,
    ChevronRight,
    ClipboardList,
    Globe
} from "lucide-react";
import { toast } from "react-toastify";

interface SidebarIconProps {
    icon: React.ComponentType<{ size: number }>;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon: Icon }) => (
    <Icon size={20} />
);

export default function Sidebar() {
    const [isStockItOpen, setIsStockItOpen] = useState(false);
    const [isRWorldOpen, setIsRWorldOpen] = useState(false);
    const navigate = useNavigate();

    const isActiveTab = (tab: string) => {
        return window.location.search.includes(`tab=${tab}`);
    };

    const toggleStockIt = () => setIsStockItOpen(!isStockItOpen);
    const toggleRWorld = () => setIsRWorldOpen(!isRWorldOpen);

    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.success("Logged out");
        navigate("/login");
    };

    return (
        <div className="w-full h-full mt-6 md:w-50 lg:w-60 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto">
            <div className="flex flex-col gap-2 p-2">

                {/* Stock It Section */}
                <div className="mt-4">
                    <div
                        onClick={toggleStockIt}
                        className="flex items-center justify-between p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer group"
                    >
                        <div className="flex items-center">
                            <SidebarIcon icon={ClipboardList} />
                            <span className="ml-3 text-sm font-medium">Stock It</span>
                        </div>
                        {isStockItOpen ? (
                            <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
                        ) : (
                            <ChevronRight size={16} className="text-gray-500 dark:text-gray-400" />
                        )}
                    </div>

                    {isStockItOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                            <Link to="/dashboard?tab=blog" className="block">
                                <div className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${isActiveTab("blog") ? "bg-green-200 dark:bg-green-800" : "text-gray-700 dark:text-gray-300"}`}>
                                    <SidebarIcon icon={MessageSquare} />
                                    <span className="ml-3 text-sm font-medium">Blog</span>
                                </div>
                            </Link>

                            <Link to="/dashboard?tab=enquiry" className="block">
                                <div className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${isActiveTab("enquiry") ? "bg-green-200 dark:bg-green-800" : "text-gray-700 dark:text-gray-300"}`}>
                                    <SidebarIcon icon={MessageSquare} />
                                    <span className="ml-3 text-sm font-medium">Enquiry</span>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>

                {/* RWorld Section */}
                <div className="mt-4">
                    <div
                        onClick={toggleRWorld}
                        className="flex items-center justify-between p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer group"
                    >
                        <div className="flex items-center">
                            <SidebarIcon icon={Globe} />
                            <span className="ml-3 text-sm font-medium">RWorld</span>
                        </div>
                        {isRWorldOpen ? (
                            <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
                        ) : (
                            <ChevronRight size={16} className="text-gray-500 dark:text-gray-400" />
                        )}
                    </div>

                    {isRWorldOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                            <Link to="/dashboard?tab=rworld-blog" className="block">
                                <div className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${isActiveTab("rworld-blog") ? "bg-green-200 dark:bg-green-800" : "text-gray-700 dark:text-gray-300"}`}>
                                    <SidebarIcon icon={MessageSquare} />
                                    <span className="ml-3 text-sm font-medium">Blog</span>
                                </div>
                            </Link>

                            <Link to="/dashboard?tab=rworld-enquiry" className="block">
                                <div className={`flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${isActiveTab("rworld-enquiry") ? "bg-green-200 dark:bg-green-800" : "text-gray-700 dark:text-gray-300"}`}>
                                    <SidebarIcon icon={MessageSquare} />
                                    <span className="ml-3 text-sm font-medium">Enquiry</span>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>

                <hr className="my-4 border-gray-200 dark:border-gray-600" />

                <div
                    onClick={handleLogout}
                    className="flex items-center cursor-pointer p-2 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                    <SidebarIcon icon={LogOut} />
                    <span className="ml-3 text-sm font-medium">Sign Out</span>
                </div>
            </div>
        </div>
    );
}
