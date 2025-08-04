"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    MapPin,
    Clock,
    DollarSign,
    Users,
    Search,
    Briefcase,
    GraduationCap,
    Heart,
    Coffee,
    Zap,
    Globe,
    TrendingUp,
    Award,
    ArrowRight,
    Building,
    Calendar,
    Target,
} from "lucide-react"

export default function CareerPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("All")
    const [selectedLocation, setSelectedLocation] = useState("All")
    const [selectedType, setSelectedType] = useState("All")

    const departments = ["All", "Engineering", "Design", "Product", "Marketing", "Sales", "Operations"]
    const locations = ["All", "Remote", "New York", "San Francisco", "London", "Hybrid"]
    const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Internship"]

    const benefits = [
        {
            icon: <Heart className="h-6 w-6" />,
            title: "Health & Wellness",
            description: "Comprehensive health insurance, mental health support, and wellness programs",
            color: "red",
        },
        {
            icon: <Coffee className="h-6 w-6" />,
            title: "Work-Life Balance",
            description: "Flexible hours, remote work options, and unlimited PTO policy",
            color: "orange",
        },
        {
            icon: <GraduationCap className="h-6 w-6" />,
            title: "Learning & Growth",
            description: "Professional development budget, conferences, and skill-building programs",
            color: "blue",
        },
        {
            icon: <DollarSign className="h-6 w-6" />,
            title: "Competitive Package",
            description: "Market-leading salary, equity options, and performance bonuses",
            color: "green",
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Amazing Team",
            description: "Collaborative culture with talented professionals from diverse backgrounds",
            color: "purple",
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Innovation Focus",
            description: "Work on cutting-edge projects with the latest technologies and tools",
            color: "yellow",
        },
    ]

    const jobOpenings = [
        {
            id: 1,
            title: "Senior Full-Stack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            experience: "5+ years",
            salary: "$120k - $160k",
            description:
                "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
            requirements: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
            posted: "2 days ago",
            applicants: 45,
        },
        {
            id: 2,
            title: "UI/UX Designer",
            department: "Design",
            location: "New York",
            type: "Full-time",
            experience: "3+ years",
            salary: "$90k - $120k",
            description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
            requirements: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
            posted: "1 week ago",
            applicants: 32,
        },
        {
            id: 3,
            title: "DevOps Engineer",
            department: "Engineering",
            location: "San Francisco",
            type: "Full-time",
            experience: "4+ years",
            salary: "$130k - $170k",
            description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
            requirements: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
            posted: "3 days ago",
            applicants: 28,
        },
        {
            id: 4,
            title: "Product Manager",
            department: "Product",
            location: "Hybrid",
            type: "Full-time",
            experience: "4+ years",
            salary: "$110k - $140k",
            description:
                "Drive product strategy and work with cross-functional teams to deliver exceptional user experiences.",
            requirements: ["Product Strategy", "Analytics", "Agile", "User Research", "Roadmap Planning"],
            posted: "5 days ago",
            applicants: 38,
        },
        {
            id: 5,
            title: "Frontend Developer Intern",
            department: "Engineering",
            location: "Remote",
            type: "Internship",
            experience: "0-1 years",
            salary: "$25 - $35/hour",
            description: "Learn and contribute to our frontend development team while working on real projects.",
            requirements: ["JavaScript", "React", "HTML/CSS", "Git", "Learning Mindset"],
            posted: "1 week ago",
            applicants: 67,
        },
        {
            id: 6,
            title: "Marketing Specialist",
            department: "Marketing",
            location: "London",
            type: "Full-time",
            experience: "2+ years",
            salary: "£45k - £60k",
            description: "Develop and execute marketing campaigns to grow our brand and customer base.",
            requirements: ["Digital Marketing", "Content Creation", "SEO", "Analytics", "Social Media"],
            posted: "4 days ago",
            applicants: 23,
        },
    ]

    const filteredJobs = jobOpenings.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
        const matchesLocation = selectedLocation === "All" || job.location === selectedLocation
        const matchesType = selectedType === "All" || job.type === selectedType
        return matchesSearch && matchesDepartment && matchesLocation && matchesType
    })

    const stats = [
        { label: "Team Members", value: "150+", icon: <Users className="h-6 w-6" /> },
        { label: "Countries", value: "12", icon: <Globe className="h-6 w-6" /> },
        { label: "Growth Rate", value: "200%", icon: <TrendingUp className="h-6 w-6" /> },
        { label: "Employee Rating", value: "4.8/5", icon: <Award className="h-6 w-6" /> },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            {/* Hero Section */}
            <section className="py-20 px-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="max-w-4xl mx-auto">
                    <Badge
                        variant="outline"
                        className="mb-6 px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        Join Our Team
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                        Build Your Future With Us
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                        Join a team of passionate innovators who are shaping the future of technology. We're looking for talented
                        individuals who want to make a real impact.
                    </p>
                    <Button size="lg" className="group hover:scale-105 transition-all duration-300 hover:shadow-lg">
                        <Briefcase className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        View Open Positions
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-20">
                {/* Company Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="group p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-background via-background to-muted/50"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="pt-6">
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                                        {stat.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                    {stat.label}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We believe in creating an environment where our team can thrive, grow, and do their best work.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card
                                key={index}
                                className="group p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-background via-background to-muted/20"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="pt-6">
                                    <div className="flex justify-center mb-4">
                                        <div
                                            className={`p-3 rounded-full bg-gradient-to-br ${benefit.color === "red"
                                                    ? "from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 group-hover:from-red-500 group-hover:to-red-600"
                                                    : benefit.color === "orange"
                                                        ? "from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 group-hover:from-orange-500 group-hover:to-orange-600"
                                                        : benefit.color === "blue"
                                                            ? "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 group-hover:from-blue-500 group-hover:to-blue-600"
                                                            : benefit.color === "green"
                                                                ? "from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 group-hover:from-green-500 group-hover:to-green-600"
                                                                : benefit.color === "purple"
                                                                    ? "from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 group-hover:from-purple-500 group-hover:to-purple-600"
                                                                    : "from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 group-hover:from-yellow-500 group-hover:to-yellow-600"
                                                } group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-lg`}
                                        >
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 text-center group-hover:text-primary transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Job Search and Filters */}
                <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
                        <p className="text-muted-foreground">Find your next opportunity and join our growing team.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                placeholder="Search positions..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 hover:border-primary/50 focus:border-primary transition-colors duration-300"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <Select onValueChange={setSelectedDepartment}>
                                <SelectTrigger className="w-40 hover:border-primary/50 focus:border-primary transition-colors duration-300">
                                    <SelectValue placeholder="Department" />
                                </SelectTrigger>
                                <SelectContent>
                                    {departments.map((dept) => (
                                        <SelectItem key={dept} value={dept}>
                                            {dept}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select onValueChange={setSelectedLocation}>
                                <SelectTrigger className="w-32 hover:border-primary/50 focus:border-primary transition-colors duration-300">
                                    <SelectValue placeholder="Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    {locations.map((location) => (
                                        <SelectItem key={location} value={location}>
                                            {location}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select onValueChange={setSelectedType}>
                                <SelectTrigger className="w-32 hover:border-primary/50 focus:border-primary transition-colors duration-300">
                                    <SelectValue placeholder="Job Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {jobTypes.map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {type}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-muted-foreground">
                            {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""} found
                        </p>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
                    {filteredJobs.map((job, index) => (
                        <Card
                            key={job.id}
                            className="group p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-background via-background to-muted/20"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="pt-6">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                                                    <div className="flex items-center gap-1">
                                                        <Building className="h-4 w-4" />
                                                        <span>{job.department}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="h-4 w-4" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <GraduationCap className="h-4 w-4" />
                                                        <span>{job.experience}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <DollarSign className="h-4 w-4" />
                                                        <span>{job.salary}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Badge variant="secondary" className="ml-4">
                                                {job.type}
                                            </Badge>
                                        </div>

                                        <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                                            {job.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {job.requirements.map((req, reqIndex) => (
                                                <Badge
                                                    key={reqIndex}
                                                    variant="outline"
                                                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                                                >
                                                    {req}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>Posted {job.posted}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users className="h-3 w-3" />
                                                    <span>{job.applicants} applicants</span>
                                                </div>
                                            </div>
                                            <Button className="group/btn hover:scale-105 transition-all duration-300" size="sm">
                                                Apply Now
                                                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <Card className="group relative overflow-hidden p-10 mt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-cyan-950/20 border-0 hover:shadow-2xl transition-all duration-700 animate-in fade-in slide-in-from-bottom-8 delay-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative text-center">
                        <h2 className="text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                            Don't See the Right Role?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
                            opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="group/btn gap-2 px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                            >
                                <Target className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                                Send Your Resume
                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="group/btn gap-2 px-8 py-3 hover:scale-105 transition-all duration-300 bg-transparent"
                            >
                                <Users className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                                Join Our Talent Network
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
