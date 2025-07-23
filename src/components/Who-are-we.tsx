import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Code2,
    Rocket,
    Users,
    Target,
    Lightbulb,
    Shield,
    ArrowRight,
    CheckCircle,
    Globe,
    Zap,
    Heart,
    Award,
} from "lucide-react"
import { ShineBorder } from "./magicui/shine-border"

const coreValues = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
        color: "text-yellow-500",
    },
    {
        icon: Shield,
        title: "Reliability",
        description: "Our commitment to quality and dependability ensures your projects are delivered on time.",
        color: "text-green-500",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "We work closely with our clients as partners, not just service providers.",
        color: "text-blue-500",
    },
    {
        icon: Target,
        title: "Excellence",
        description: "We strive for perfection in every line of code and every project we deliver.",
        color: "text-purple-500",
    },
]

const services = [
    {
        title: "Web Development",
        description: "Modern, responsive websites and web applications",
        technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    },
    {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications",
        technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment",
        technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    },
    {
        title: "AI & ML",
        description: "Intelligent solutions powered by machine learning",
        technologies: ["Python", "TensorFlow", "OpenAI", "Data Science"],
    },
]

const achievements = [
    { number: "100+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Heart },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Globe },
]

const teamHighlights = [
    {
        role: "Full-Stack Developers",
        count: "10+",
        description: "Expert developers proficient in modern tech stacks",
    },
    {
        role: "UI/UX Designers",
        count: "5+",
        description: "Creative designers focused on user experience",
    },
    {
        role: "DevOps Engineers",
        count: "3+",
        description: "Infrastructure specialists ensuring scalability",
    },
    {
        role: "Project Managers",
        count: "4+",
        description: "Experienced managers ensuring smooth delivery",
    },
]

export default function WhoAreWe() {

    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Code2 className="w-4 h-4" />
                        About r-world
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-amber-400 dark:bg-amber-500 bg-clip-text text-transparent">
                            Who Are We?
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We are a passionate team of technology enthusiasts dedicated to transforming your digital dreams into
                        reality. With expertise spanning across modern web technologies, mobile development, and cloud solutions.
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="mb-20 animate-fade-in-up animation-delay-200">
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg">
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                        <CardContent className="p-8 text-center">
                            <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                                To empower businesses and individuals with innovative technology solutions that drive growth, enhance
                                efficiency, and create meaningful digital experiences. We believe in the power of technology to
                                transform ideas into impactful realities.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Core Values */}
                <div className="mb-20 animate-fade-in-up animation-delay-400">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
                        <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((value, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-all duration-300 bg-card/70 backdrop-blur-sm border-primary/10 hover:border-primary/20"
                            >

                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className={`w-8 h-8 ${value.color}`} />
                                    </div>
                                    <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Services Overview */}
                <div className="mb-20 animate-fade-in-up animation-delay-600">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">What We Do</h3>
                        <p className="text-muted-foreground text-lg">Comprehensive IT solutions tailored to your needs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-xl transition-all duration-300 bg-card/70 backdrop-blur-sm border-primary/10 hover:border-primary/20"
                            >

                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Zap className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                                            <p className="text-muted-foreground mb-4">{service.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="secondary" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-20 animate-fade-in-up animation-delay-800">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
                        <p className="text-muted-foreground text-lg">Numbers that speak for our commitment</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={index}
                                className="text-center group hover:shadow-lg transition-all duration-300 bg-card/70 backdrop-blur-sm border-primary/10 hover:border-primary/20"
                            >

                                <CardContent className="p-6">
                                    <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                                    <div className="text-3xl font-bold text-foreground mb-2 font-mono">{achievement.number}</div>
                                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Team Highlights */}
                <div className="mb-20 animate-fade-in-up animation-delay-1000">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">Our Team</h3>
                        <p className="text-muted-foreground text-lg">Talented professionals driving innovation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamHighlights.map((team, index) => (
                            <Card
                                key={index}
                                className="text-center group hover:shadow-lg transition-all duration-300 bg-card/70 backdrop-blur-sm border-primary/10 hover:border-primary/20"
                            >
                                <CardContent className="p-6">
                                    <div className="text-2xl font-bold text-primary mb-2 font-mono">{team.count}</div>
                                    <h4 className="text-lg font-semibold mb-3">{team.role}</h4>
                                    <p className="text-sm text-muted-foreground">{team.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center animate-fade-in-up animation-delay-1200">
                    <Card className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-slate-200 dark:via-purple-400 dark:to-slate-200 text-transparent bg-clip-text  shadow-xl">
                        <CardContent className="p-12">
                            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Let's collaborate and bring your vision to life with our expertise and passion for technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-full group">
                                    Get Started Today
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                                >
                                    View Our Portfolio
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
