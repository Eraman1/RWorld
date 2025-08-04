"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, Eye, Heart, MessageCircle } from "lucide-react"

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions", "Tech Trends"]

    const featuredPost = {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt:
            "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps and beyond.",
        image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
        author: "Sarah Johnson",
        date: "Dec 15, 2024",
        readTime: "8 min read", 
        category: "Web Development",
        views: 2400,
        likes: 156,
        comments: 23,
        featured: true,
    }

    const blogPosts = [
        {
            id: 2,
            title: "Building Scalable Mobile Applications with React Native",
            excerpt: "Learn best practices for creating mobile apps that can grow with your business needs.",
            image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
            author: "Mike Chen",
            date: "Dec 12, 2024",
            readTime: "6 min read",
            category: "Mobile Apps",
            views: 1800,
            likes: 89,
            comments: 15,
        },
        {
            id: 3,
            title: "UI/UX Design Principles for Better User Experience",
            excerpt: "Discover the fundamental principles that make interfaces intuitive and user-friendly.",
            image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
            author: "Emma Davis",
            date: "Dec 10, 2024",
            readTime: "5 min read",
            category: "UI/UX Design",
            views: 2100,
            likes: 134,
            comments: 28,
        },
        {
            id: 4,
            title: "Cloud Migration Strategies for Modern Businesses",
            excerpt: "A comprehensive guide to moving your infrastructure to the cloud safely and efficiently.",
            image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
            author: "David Wilson",
            date: "Dec 8, 2024",
            readTime: "10 min read",
            category: "Cloud Solutions",
            views: 1650,
            likes: 92,
            comments: 19,
        },
        {
            id: 5,
            title: "AI Integration in Web Applications: A Practical Guide",
            excerpt: "How to incorporate artificial intelligence features into your web applications effectively.",
            image: "/placeholder.svg?height=300&width=400",
            author: "Lisa Rodriguez",
            date: "Dec 5, 2024",
            readTime: "7 min read",
            category: "Tech Trends",
            views: 2800,
            likes: 201,
            comments: 45,
        },
        {
            id: 6,
            title: "Optimizing Website Performance: Advanced Techniques",
            excerpt: "Deep dive into performance optimization strategies that can dramatically improve your site speed.",
            image: "/placeholder.svg?height=300&width=400",
            author: "Alex Thompson",
            date: "Dec 3, 2024",
            readTime: "9 min read",
            category: "Web Development",
            views: 1950,
            likes: 118,
            comments: 31,
        },
        {
            id: 7,
            title: "The Rise of Progressive Web Apps (PWAs)",
            excerpt: "Understanding how PWAs are bridging the gap between web and mobile applications.",
            image: "/placeholder.svg?height=300&width=400",
            author: "Rachel Kim",
            date: "Nov 30, 2024",
            readTime: "6 min read",
            category: "Web Development",
            views: 1720,
            likes: 95,
            comments: 22,
        },
    ]

    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            {/* Hero Section */}
            <section className="py-20 px-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="max-w-4xl mx-auto">
                    <Badge
                        variant="outline"
                        className="mb-6 px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        Our Blog
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                        Insights & Innovation
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Stay updated with the latest trends, tips, and insights from the world of technology and software
                        development.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-20">
                {/* Search and Filter */}
                <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 hover:border-primary/50 focus:border-primary transition-colors duration-300"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className="hover:scale-105 transition-all duration-300"
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Featured Post */}
                <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                    <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary/20">
                        <div className="grid lg:grid-cols-2 gap-0">
                            <div className="relative overflow-hidden">
                                <img
                                    src={featuredPost.image || "/placeholder.svg"}
                                    alt={featuredPost.title}
                                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <Badge variant="secondary">{featuredPost.category}</Badge>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {featuredPost.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {featuredPost.readTime}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                                    {featuredPost.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <span className="text-sm font-medium">{featuredPost.author}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Eye className="h-4 w-4" />
                                            {featuredPost.views}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Heart className="h-4 w-4" />
                                            {featuredPost.likes}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageCircle className="h-4 w-4" />
                                            {featuredPost.comments}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Blog Posts Grid */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold">Latest Articles</h2>
                        <p className="text-muted-foreground">{filteredPosts.length} articles found</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <Card
                                key={post.id}
                                className="group overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/20"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                                            {post.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                                <User className="h-3 w-3" />
                                            </div>
                                            <span className="text-xs font-medium">{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Eye className="h-3 w-3" />
                                                {post.views}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Heart className="h-3 w-3" />
                                                {post.likes}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            variant="outline"
                            className="group hover:scale-105 transition-all duration-300 bg-transparent"
                        >
                            Load More Articles
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
