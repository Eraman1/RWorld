"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    ArrowRight,
    Code2,
    Globe,
    Shield,
    Zap,
    Users,
    Heart,
} from "lucide-react"

const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
]

const services = [
    { name: "Web Development", href: "#web-dev" },
    { name: "Mobile Apps", href: "#mobile" },
    { name: "Cloud Solutions", href: "#cloud" },
    { name: "AI & ML", href: "#ai-ml" },
    { name: "DevOps", href: "#devops" },
    { name: "Consulting", href: "#consulting" },
]

const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
]

const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
]

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-background to-muted/30 border-t border-border/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10"></div>

            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        {/* Company Info */}
                        <div className="lg:col-span-1 animate-fade-in-up">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">
                                    <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                        r-world
                                    </span>
                                </h3>
                                <p className="text-sm text-muted-foreground font-mono">{"<IT_SOLUTIONS />"}</p>
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Transforming ideas into digital reality with innovative technology solutions that drive growth and
                                create meaningful experiences.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                    <a
                                        href="mailto:hello@r-world.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        hello@r-world.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                                        +1 (234) 567-8900
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">123 Tech Street, Digital City, DC 12345</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="animate-fade-in-up animation-delay-200">
                            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary" />
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="animate-fade-in-up animation-delay-400">
                            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-primary" />
                                Services
                            </h4>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href={service.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {service.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="animate-fade-in-up animation-delay-600">
                            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary" />
                                Stay Updated
                            </h4>
                            <p className="text-muted-foreground text-sm mb-4">
                                Subscribe to our newsletter for the latest tech insights and project updates.
                            </p>
                            <div className="space-y-3">
                                <div className="flex gap-2">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-card/50 border-primary/20 focus:border-primary/40"
                                    />
                                    <Button size="sm" className="px-3">
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
                            </div>

                            {/* Social Links */}
                            <div className="mt-6">
                                <h5 className="text-sm font-medium mb-3">Follow Us</h5>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className={`w-9 h-9 bg-card/50 border border-primary/20 rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary/40 ${social.color}`}
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="opacity-50" />

                {/* Bottom Footer */}
                <div className="py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
                        {/* Copyright */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>© 2024 r-world. Made with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                            <span>by our amazing team.</span>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Shield className="w-3 h-3" />
                                <span>Secure</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-3 h-3" />
                                <span>Fast</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-3 h-3" />
                                <span>Reliable</span>
                            </div>
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-4 text-sm">
                            {legalLinks.map((link, index) => (
                                <a key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="absolute bottom-8 right-8">
                    <Button
                        size="sm"
                        variant="outline"
                        className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:scale-110 transition-all duration-300"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
                    </Button>
                </div>
            </div>
        </footer>
    )
}
