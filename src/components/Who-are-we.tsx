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
    Star,
    Sparkles,
    Brain,
    Coffee,
    Clock,
    Trophy,
    Palette,
    Database,
    Smartphone,
    Cloud,
    Bot
} from "lucide-react"

const coreValues = [
    {
        icon: Brain,
        title: "Innovation Excellence",
        description: "We push boundaries with cutting-edge AI, blockchain, and emerging technologies to create tomorrow's solutions today.",
        color: "text-emerald-500",
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        icon: Shield,
        title: "Uncompromising Quality",
        description: "Every pixel, every line of code is crafted with precision. We don't just deliver projects—we deliver masterpieces.",
        color: "text-blue-500",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: Heart,
        title: "Human-Centered Design",
        description: "Technology serves people, not the other way around. We create experiences that feel intuitive and delightful.",
        color: "text-rose-500",
        gradient: "from-rose-500/20 to-pink-500/20"
    },
    {
        icon: Rocket,
        title: "Lightning Fast Delivery",
        description: "Time is precious. Our agile methodology and expert team ensure rapid delivery without compromising excellence.",
        color: "text-purple-500",
        gradient: "from-purple-500/20 to-violet-500/20"
    },
]

const services = [
    {
        icon: Code2,
        title: "Web Development Mastery",
        description: "From stunning landing pages to complex enterprise applications, we craft web experiences that convert and captivate.",
        technologies: ["React", "Next.js 14", "TypeScript", "Node.js", "TailwindCSS"],
        color: "text-orange-500",
        bgGradient: "from-orange-500/10 to-amber-500/10"
    },
    {
        icon: Smartphone,
        title: "Mobile App Innovation",
        description: "Native iOS and Android apps, plus cross-platform solutions that feel native on every device.",
        technologies: ["React Native", "Flutter", "SwiftUI", "Kotlin", "Firebase"],
        color: "text-green-500",
        bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
        icon: Cloud,
        title: "Cloud Architecture",
        description: "Scalable, secure, and cost-effective cloud solutions that grow with your business needs.",
        technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
        color: "text-sky-500",
        bgGradient: "from-sky-500/10 to-blue-500/10"
    },
    {
        icon: Bot,
        title: "AI & Machine Learning",
        description: "Intelligent automation, predictive analytics, and AI-powered features that give you a competitive edge.",
        technologies: ["Python", "TensorFlow", "OpenAI GPT", "Computer Vision", "NLP"],
        color: "text-violet-500",
        bgGradient: "from-violet-500/10 to-purple-500/10"
    },
    {
        icon: Palette,
        title: "UI/UX Design Excellence",
        description: "Beautiful interfaces that users love, backed by research and optimized for conversion.",
        technologies: ["Figma", "Adobe Suite", "Framer", "Principle", "User Research"],
        color: "text-pink-500",
        bgGradient: "from-pink-500/10 to-rose-500/10"
    },
    {
        icon: Database,
        title: "Data & Analytics",
        description: "Turn your data into actionable insights with custom dashboards and advanced analytics.",
        technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Apache Spark"],
        color: "text-indigo-500",
        bgGradient: "from-indigo-500/10 to-purple-500/10"
    },
]

const achievements = [
    { number: "250+", label: "Projects Delivered", icon: Trophy, description: "Successful launches" },
    { number: "98%", label: "Client Satisfaction", icon: Heart, description: "Happy partnerships" },
    { number: "7+", label: "Years of Excellence", icon: Award, description: "Industry experience" },
    { number: "24/7", label: "Global Support", icon: Globe, description: "Always available" },
]

const teamHighlights = [
    {
        role: "Senior Full-Stack Developers",
        count: "15+",
        description: "Master craftsmen in modern web technologies with 5+ years each",
        icon: Code2,
        color: "text-blue-500"
    },
    {
        role: "UI/UX Design Experts",
        count: "8+",
        description: "Award-winning designers creating pixel-perfect experiences",
        icon: Palette,
        color: "text-pink-500"
    },
    {
        role: "DevOps & Cloud Architects",
        count: "6+",
        description: "Infrastructure wizards ensuring 99.9% uptime and scalability",
        icon: Cloud,
        color: "text-emerald-500"
    },
    {
        role: "AI/ML Specialists",
        count: "4+",
        description: "Data scientists and AI engineers building the future",
        icon: Brain,
        color: "text-purple-500"
    },
]

const companyStats = [
    { label: "Coffee Cups", value: "10,000+", icon: Coffee },
    { label: "Code Commits", value: "50,000+", icon: Code2 },
    { label: "Design Iterations", value: "25,000+", icon: Palette },
    { label: "Hours Coded", value: "100,000+", icon: Clock },
]

export default function WhoAreWe() {
    return (
        <section className="relative py-5 overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_110%)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        Meet the R-World Team
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Who Are We?
                    </h2>
                    <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                        We're not just another tech company. We're digital architects, innovation catalysts, and your partners in
                        building the extraordinary. Every project is a canvas, every challenge an opportunity to create magic.
                    </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-24 animate-fade-in-up animation-delay-200">
                    <Card className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                        <CardContent className="p-10 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <Rocket className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To transform ambitious ideas into digital realities that not only meet expectations but exceed them.
                                    We're here to make technology feel less like technology and more like magic.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                        <CardContent className="p-10 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <Target className="w-8 h-8 text-blue-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To be the creative force behind the next generation of digital experiences, where innovation
                                    meets intuition, and where every user interaction sparks joy and drives results.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Core Values */}
                <div className="mb-24 animate-fade-in-up animation-delay-400">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Our DNA</h3>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">The core values that drive every decision, every line of code, and every creative breakthrough</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <Card key={index} className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1">
                                <CardContent className="p-8 text-center relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-r from-background to-muted rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                                            <value.icon className={`w-8 h-8 ${value.color}`} />
                                        </div>
                                        <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="mb-24 animate-fade-in-up animation-delay-600">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">What We Create</h3>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">From concept to deployment, we handle every aspect of digital product development</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <CardContent className="p-8 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <div className="relative z-10">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-r from-background to-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 shadow-lg">
                                                <service.icon className={`w-6 h-6 ${service.color}`} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech, techIndex) => (
                                                <Badge key={techIndex} variant="secondary" className="text-xs bg-background/80 hover:bg-background transition-colors duration-300">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-24 animate-fade-in-up animation-delay-800">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Proof of Excellence</h3>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Numbers don't lie—here's what we've accomplished together</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <Card key={index} className="group text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                                <CardContent className="p-8">
                                    <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2 font-mono">
                                        {achievement.number}
                                    </div>
                                    <div className="font-semibold text-foreground mb-1">{achievement.label}</div>
                                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div className="mb-24 animate-fade-in-up animation-delay-1000">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Meet Our Superstars</h3>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">The brilliant minds behind every successful project</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {teamHighlights.map((team, index) => (
                            <Card key={index} className="group text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-background to-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg">
                                        <team.icon className={`w-8 h-8 ${team.color}`} />
                                    </div>
                                    <div className="text-3xl font-bold text-primary mb-2 font-mono">{team.count}</div>
                                    <h4 className="text-lg font-bold mb-3">{team.role}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{team.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Fun Stats */}
                    <Card className="bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 dark:from-slate-100/10 dark:via-purple-100/10 dark:to-slate-100/10 backdrop-blur-xl border-0 shadow-2xl">
                        <CardContent className="p-12">
                            <h4 className="text-2xl font-bold text-center mb-8 text-white dark:text-foreground">Behind the Scenes</h4>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {companyStats.map((stat, index) => (
                                    <div key={index} className="text-center group">
                                        <stat.icon className="w-8 h-8 text-purple-300 dark:text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                                        <div className="text-2xl font-bold text-white dark:text-foreground mb-1 font-mono">{stat.value}</div>
                                        <div className="text-sm text-purple-200 dark:text-muted-foreground">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>


            </div>

            {/* Custom Animations */}
            <style >{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                
                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-400 { animation-delay: 0.4s; }
                .animation-delay-600 { animation-delay: 0.6s; }
                .animation-delay-800 { animation-delay: 0.8s; }
                .animation-delay-1000 { animation-delay: 1s; }
                .animation-delay-1200 { animation-delay: 1.2s; }
                .animation-delay-2000 { animation-delay: 2s; }
            `}</style>
        </section>
    )
}