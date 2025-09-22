import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateBlog from "./CreateBlog";
import API from "@/api/axios"; // or wherever your axios instance is
import type { BlogPostFormData } from "@/api/blog";

const formatDateForInput = (isoDate: string): string => {
    if (!isoDate) return "";
    return isoDate.split("T")[0]; // take only YYYY-MM-DD
};

export default function CreateBlogWrapper() {
    const { id } = useParams<{ id: string }>();
    const [blogData, setBlogData] = useState<BlogPostFormData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchBlog = async () => {
            try {
                const res = await API.get(`/blogs/${id}`);
                setBlogData({
                    ...res.data,
                    date: formatDateForInput(res.data.date), // ✅ Step 2 applied here
                });
            } catch (err) {
                console.error(err);
                alert("Failed to load blog data");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) return <p>Loading blog data...</p>;
    if (!blogData) return <p>Blog not found</p>;

    return <CreateBlog blogData={blogData} isEdit={true} blogId={id} />;
}
