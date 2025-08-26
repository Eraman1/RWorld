import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '../ui/card'
import { ArrowRight, Calendar, Clock, Eye, Heart, User } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from "@/components/ui/badge"
import { getAllBlogs } from "@/api/blog" // 👈 import your API function
import { Link } from 'react-router-dom'

export default function LetestBlog() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [blogPosts, setBlogPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true)
                const data = await getAllBlogs()
                setBlogPosts(data) // API should return an array of blogs
            } catch (error) {
                console.error("Error fetching blogs:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchBlogs()
    }, [])

    const filteredPosts = blogPosts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory =
            selectedCategory === "All" || post.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    if (loading) {
        return <p className="text-center mt-10">Loading blogs...</p>
    }

    return (
        <div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">Latest Articles</h2>
                    <p className="text-muted-foreground">{filteredPosts.length} articles found</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <Card
                            key={post._id || index}
                            className="group overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/20"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Link
                                to={`/blog/${post.slug}`}
                                state={{ id: post._id }} // 👈 Pass id here
                                className="block"
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
                                            {new Date(post.date).toLocaleDateString("en-IN", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                        {post.excerpt?.length > 250
                                            ? post.excerpt.substring(0, 250) + "..."
                                            : post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                                <User className="h-3 w-3" />
                                            </div>
                                            <span className="text-xs font-medium">{post.author?.name}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Eye className="h-3 w-3" />
                                                {post.views || 0}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Heart className="h-3 w-3" />
                                                {post.likes || 0}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Link>
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
    )
}
