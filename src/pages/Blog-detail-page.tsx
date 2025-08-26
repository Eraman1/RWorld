"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Calendar,
    Clock,
    ArrowLeft,
    Eye,
    Heart,
    MessageCircle,
    Twitter,
    Facebook,
    Linkedin,
    Link,
    BookOpen,
    Tag,
} from "lucide-react"
import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getBlogById, getBlogBySlug } from "@/api/blog"

export default function BlogDetailPage() {
    const blogPost = {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2024",
        content: `
      <p>The world of web development is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications. In this comprehensive guide, we'll explore the most significant trends that developers and businesses should be aware of.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process. From code completion tools like GitHub Copilot to automated testing and bug detection, AI is making developers more productive than ever before.</p>

      <h2>2. Progressive Web Apps (PWAs) Evolution</h2>
      <p>PWAs continue to bridge the gap between web and native applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs are becoming the preferred choice for many businesses.</p>

      <h2>3. WebAssembly (WASM) Adoption</h2>
      <p>WebAssembly is enabling high-performance applications in the browser, allowing developers to run code written in languages like C++, Rust, and Go directly in web browsers with near-native performance.</p>

      <h2>4. Serverless Architecture</h2>
      <p>The serverless paradigm is gaining momentum, allowing developers to focus on code rather than infrastructure management. This trend is particularly strong with edge computing and distributed systems.</p>

      <h2>5. Enhanced Security Measures</h2>
      <p>With increasing cyber threats, security-first development approaches are becoming standard. Zero-trust architectures and advanced authentication methods are now essential components of modern web applications.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of opportunities. By staying informed about these trends and continuously learning, developers can build better, more efficient, and more secure applications that meet the evolving needs of users and businesses.</p>
    `,
        image: "/placeholder.svg?height=400&width=800",
        author: {
            name: "Sarah Johnson",
            bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
            avatar: "/placeholder.svg?height=100&width=100",
        },
        date: "December 15, 2024",
        readTime: "8 min read",
        category: "Web Development",
        tags: ["JavaScript", "React", "AI", "PWA", "WebAssembly"],
        views: 2400,
        likes: 156,
        comments: 23,
        shares: 45,
    }

    const relatedPosts = [
        {
            id: 2,
            title: "Building Scalable Mobile Applications with React Native",
            image: "/placeholder.svg?height=200&width=300",
            date: "Dec 12, 2024",
            readTime: "6 min read",
        },
        {
            id: 3,
            title: "AI Integration in Web Applications: A Practical Guide",
            image: "/placeholder.svg?height=200&width=300",
            date: "Dec 5, 2024",
            readTime: "7 min read",
        },
        {
            id: 4,
            title: "Optimizing Website Performance: Advanced Techniques",
            image: "/placeholder.svg?height=200&width=300",
            date: "Dec 3, 2024",
            readTime: "9 min read",
        },
    ]

    const { slug } = useParams();
    const location = useLocation();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                if (location.state?.id) {
                    // ✅ User navigated inside app
                    const data = await getBlogById(location.state.id);
                    setBlog(data);
                } else if (slug) {
                    // ✅ Direct page load → fetch by slug
                    const data = await getBlogBySlug(slug);
                    setBlog(data);
                }
            } catch (err) {
                console.error("Error fetching blog:", err);
                setBlog(null);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [location.state, slug]);

    if (loading) return <p>Loading...</p>;
    if (!blog) return <p>Blog not found</p>;

    return (
        <div className="min-h-screen mt-10 bg-gradient-to-br from-background via-background to-muted/20">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Back Button */}
                <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
                    <Button variant="ghost" className="group hover:bg-muted cursor-pointer transition-all duration-300">
                        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to Blog
                    </Button>
                </div>

                {/* Article Header */}
                <div className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="mb-6">
                        <Badge className="mb-4">{blog.category}</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(blog.date).toLocaleDateString("en-In", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{blog.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Eye className="h-4 w-4" />
                                <span>{blogPost.views} views</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                <span>{blogPost.comments} comments</span>
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                            <img
                                src={blog.author.avatar || "/placeholder.svg"}
                                alt={blog.author.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold">{blog.author.name}</h3>
                                <p className="text-sm text-muted-foreground">{blog.author.bio}</p>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative overflow-hidden rounded-lg mb-8">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Article Content */}
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                        <Card className="p-8 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            <div
                                className="prose prose-lg max-w-none dark:prose-invert"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </Card>

                        {/* Tags */}
                        <div className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                            <div className="flex items-center gap-2 mb-4">
                                <Tag className="h-4 w-4" />
                                <span className="font-semibold">Tags:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag: string, index: number) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Social Actions */}
                        <Card className="p-6 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="group hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-300 bg-transparent"
                                    >
                                        <Heart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                                        {blogPost.likes} Likes
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="group hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 bg-transparent"
                                    >
                                        <MessageCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                                        {blogPost.comments} Comments
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground mr-2">Share:</span>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                                    >
                                        <Twitter className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                                    >
                                        <Facebook className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="hover:bg-gray-50 hover:text-gray-600 transition-all duration-300"
                                    >
                                        <Link className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            {/* Table of Contents */}
                            <Card className="p-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                                <h3 className="font-semibold mb-4">Table of Contents</h3>
                                <nav className="space-y-2 text-sm">
                                    {blog.tableOfContents?.length > 0 ? (
                                        blog.tableOfContents.map((title: string, index: number) => {
                                            const slug = title
                                                .toLowerCase()
                                                .replace(/[^a-z0-9\s]/g, "") // remove special chars
                                                .replace(/\s+/g, "-");      // replace spaces with dashes

                                            return (
                                                <a
                                                    key={index}
                                                    href={`#${slug}`}
                                                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                                                >
                                                    {index + 1}. {title}
                                                </a>
                                            );
                                        })
                                    ) : (
                                        <p className="text-muted-foreground">Loading sections...</p>
                                    )}
                                </nav>
                            </Card>

                            {/* Newsletter Signup */}
                            {/* <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
                                <h3 className="font-semibold mb-2">Stay Updated</h3>
                                <p className="text-sm text-muted-foreground mb-4">Get the latest articles delivered to your inbox.</p>
                                <Button className="w-full">Subscribe</Button>
                            </Card> */}
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
                    <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedPosts.map((post, index) => (
                            <Card
                                key={post.id}
                                className="group overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
