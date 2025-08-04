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

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Back Button */}
                <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
                    <Button variant="ghost" className="group hover:bg-muted transition-all duration-300">
                        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to Blog
                    </Button>
                </div>

                {/* Article Header */}
                <div className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="mb-6">
                        <Badge className="mb-4">{blogPost.category}</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{blogPost.title}</h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{blogPost.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{blogPost.readTime}</span>
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
                                src={blogPost.author.avatar || "/placeholder.svg"}
                                alt={blogPost.author.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold">{blogPost.author.name}</h3>
                                <p className="text-sm text-muted-foreground">{blogPost.author.bio}</p>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative overflow-hidden rounded-lg mb-8">
                        <img
                            src="https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg"
                            alt={blogPost.title}
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
                                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                            />
                        </Card>

                        {/* Tags */}
                        <div className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                            <div className="flex items-center gap-2 mb-4">
                                <Tag className="h-4 w-4" />
                                <span className="font-semibold">Tags:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {blogPost.tags.map((tag, index) => (
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
                                    <a
                                        href="#ai-tools"
                                        className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        1. AI-Powered Development Tools
                                    </a>
                                    <a
                                        href="#pwa"
                                        className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        2. Progressive Web Apps Evolution
                                    </a>
                                    <a
                                        href="#webassembly"
                                        className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        3. WebAssembly Adoption
                                    </a>
                                    <a
                                        href="#serverless"
                                        className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        4. Serverless Architecture
                                    </a>
                                    <a
                                        href="#security"
                                        className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        5. Enhanced Security Measures
                                    </a>
                                </nav>
                            </Card>

                            {/* Newsletter Signup */}
                            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
                                <h3 className="font-semibold mb-2">Stay Updated</h3>
                                <p className="text-sm text-muted-foreground mb-4">Get the latest articles delivered to your inbox.</p>
                                <Button className="w-full">Subscribe</Button>
                            </Card>
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
