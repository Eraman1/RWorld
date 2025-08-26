import React, {
  useState,
  useEffect,
  useRef,
  type ChangeEvent,
  type KeyboardEvent,
  type JSX,
} from "react";
import { Plus, X, Save, Eye } from "lucide-react";
import { createBlog } from "@/api/blog";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { toast } from "react-toastify";

interface Author {
  name: string;
  bio: string;
  avatar: string;
}

interface BlogPostFormData {
  title: string;
  slug: string;
  content: string; // HTML from Quill
  excerpt: string;
  image: string;
  author: Author;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  tableOfContents: string[];
  featured: boolean;
}

const initialFormData: BlogPostFormData = {
  title: "",
  slug: "",
  content: "",
  excerpt: "",
  image: "",
  author: {
    name: "",
    bio: "",
    avatar: "",
  },
  date: "",
  readTime: "",
  category: "",
  tags: [],
  tableOfContents: [],
  featured: false,
};

export default function CreateBlog(): JSX.Element {
  const [formData, setFormData] = useState<BlogPostFormData>(initialFormData);
  const [currentTag, setCurrentTag] = useState<string>("");
  const [currentToc, setCurrentToc] = useState<string>("");
  const [loading, setLoading] = useState(false);


  // --- Quill setup ---
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;
    if (quillRef.current) return; // prevent double init in StrictMode dev

    quillRef.current = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ align: [] }],
          ["link", "image", "video"],
          ["clean"],
        ],
      },
      placeholder: "Write your blog post content here...",
    });

    // Give the editing area a minimum height
    quillRef.current.root.style.minHeight = "240px";

    // If we already have content (e.g., edit mode), load it once
    if (formData.content) {
      quillRef.current.clipboard.dangerouslyPasteHTML(formData.content);
    }

    const onChange = () => {
      const html = quillRef.current!.root.innerHTML;
      setFormData((prev) => ({ ...prev, content: html }));
    };

    quillRef.current.on("text-change", onChange);

    return () => {
      if (!quillRef.current) return;
      quillRef.current.off("text-change", onChange);
      quillRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // --- end Quill setup ---

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    if (name.startsWith("author.")) {
      const authorField = name.split(".")[1] as keyof Author;
      setFormData((prev) => ({
        ...prev,
        author: { ...prev.author, [authorField]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addTag = (): void => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }));
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string): void => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const addTocItem = (): void => {
    if (
      currentToc.trim() &&
      !formData.tableOfContents.includes(currentToc.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        tableOfContents: [...prev.tableOfContents, currentToc.trim()],
      }));
      setCurrentToc("");
    }
  };

  const removeTocItem = (tocToRemove: string): void => {
    setFormData((prev) => ({
      ...prev,
      tableOfContents: prev.tableOfContents.filter((toc) => toc !== tocToRemove),
    }));
  };

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    // Validate content: prefer getText to avoid empty <p><br/></p> cases
    const textLen = quillRef.current?.getText().trim().length ?? 0;

    if (!formData.title || textLen === 0 || !formData.author.name) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
      const data = await createBlog(formData); // content is HTML
      toast.success(data.message || "Blog created successfully!");
      // alert("Blog created successfully!");
      setFormData(initialFormData);
      // clear editor UI
      if (quillRef.current) {
        quillRef.current.setText("");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = (): void => {
    console.log("Preview data:", formData);
    alert("Preview mode - check console for current data");
  };

  const handleKeyPress = (
    e: KeyboardEvent<HTMLInputElement>,
    action: () => void
  ): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="max-w-4xl my-12 mx-auto p-6  min-h-screen">
      <div className=" rounded-lg shadow-md p-8 bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Create New Blog Post
          </h1>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handlePreview}
              className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Title and Slug */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleTitleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter blog post title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="url-friendly-slug"
              />
            </div>
          </div>

          {/* Content (Quill) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Content *
            </label>
            <div
              ref={editorRef}
              className="border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Excerpt *
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter blog post excerpt"
            />
          </div>

          {/* Image and Category */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Date and Read Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Publication Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Read Time
              </label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="5 min read"
              />
            </div>
          </div>

          {/* Author Information */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
              Author Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Author Name *
                </label>
                <input
                  type="text"
                  name="author.name"
                  value={formData.author.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Author name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700  dark:text-gray-300 mb-2">
                  Author Avatar URL
                </label>
                <input
                  type="url"
                  name="author.avatar"
                  value={formData.author.avatar}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Author Bio
                </label>
                <input
                  type="text"
                  name="author.bio"
                  value={formData.author.bio}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Short bio about the author"
                />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={currentTag}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCurrentTag(e.target.value)
                }
                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) =>
                  handleKeyPress(e, addTag)
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Add a tag"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-blue-600 cursor-pointer hover:text-blue-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Table of Contents */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Table of Contents
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={currentToc}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCurrentToc(e.target.value)
                }
                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) =>
                  handleKeyPress(e, addTocItem)
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Add table of contents item"
              />
              <button
                type="button"
                onClick={addTocItem}
                className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {formData.tableOfContents.map((toc: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded-md"
                >
                  <span className="text-sm text-gray-700">
                    {index + 1}. {toc}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeTocItem(toc)}
                    className="text-red-600 cursor-pointer hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end items-center gap-4 pt-6 border-t">
            {/* Featured Toggle */}
            <div className="flex items-center gap-2">
              <label htmlFor="featured" className="text-sm font-medium text-gray-300">
                Featured:
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, featured: e.target.checked }))
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-colors"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
              </label>

              {/* Debug: show current value */}
              <span className="text-sm text-gray-400">
                {formData.featured ? "true" : "false"}
              </span>
            </div>


            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium cursor-pointer transition-colors ${loading
                ? "bg-blue-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
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
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Creating...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Create Blog Post
                </>
              )}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
