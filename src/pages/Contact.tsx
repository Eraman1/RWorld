"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Globe,
    Linkedin,
    Twitter,
    Github,
    ArrowRight,
    CheckCircle,
    Users,
    Headphones,
    Briefcase,
} from "lucide-react"
import axios from "axios"
import { toast } from "react-toastify"
import { sendEnquiry, type Enquiry, type EnquiryFormData } from "@/api/enquiry"

export default function Contact() {
    // Update the initial state to match the Enquiry interface
    const [formData, setFormData] = useState<EnquiryFormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        path: window.location.pathname,
    });
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await sendEnquiry({
                ...formData,
                // Add missing fields that the API expects
              
            });

            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                message: "",
                path: window.location.pathname,
            });
            setTimeout(() => setIsSubmitted(false), 3000);

        } catch (error) {
            console.error("Submission failed:", error);
            toast.error("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const contactMethods = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email Us",
            description: "Send us an email anytime",
            contact: "hello@rworldsoftware.com",
            action: "mailto:hello@rworldsoftware.com",
            color: "blue",
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Call Us",
            description: "Mon-Fri from 8am to 5pm",
            contact: "+1 (555) 123-4567",
            action: "tel:+15551234567",
            color: "green",
        },
        {
            icon: <MessageSquare className="h-6 w-6" />,
            title: "Live Chat",
            description: "Chat with our team",
            contact: "Start conversation",
            action: "#",
            color: "purple",
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Visit Us",
            description: "Come say hello",
            contact: "123 Tech Street, Digital City",
            action: "#",
            color: "orange",
        },
    ]

    const offices = [
        {
            city: "New York",
            address: "123 Tech Street, NY 10001",
            phone: "+1 (555) 123-4567",
            email: "ny@rworldsoftware.com",
        },
        {
            city: "San Francisco",
            address: "456 Innovation Ave, CA 94102",
            phone: "+1 (555) 987-6543",
            email: "sf@rworldsoftware.com",
        },
        {
            city: "London",
            address: "789 Digital Lane, London EC1A",
            phone: "+44 20 1234 5678",
            email: "london@rworldsoftware.com",
        },
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
                        Get In Touch
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                        Let's Build Something Amazing Together
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your ideas into reality? We're here to help you every step of the way.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-20">
                {/* Contact Methods */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    {contactMethods.map((method, index) => (
                        <Card
                            key={index}
                            className="group p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/20"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="pt-6">
                                <div className="flex justify-center mb-4">
                                    <div
                                        className={`p-3 rounded-full bg-${method.color}-100 dark:bg-${method.color}-900/20 group-hover:bg-${method.color}-500 group-hover:text-white transition-all duration-300 group-hover:scale-110`}
                                    >
                                        {method.icon}
                                    </div>
                                </div>
                                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                    {method.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                                <a
                                    href={method.action}
                                    className="text-sm font-medium text-primary hover:underline transition-all duration-300"
                                >
                                    {method.contact}
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 animate-in fade-in slide-in-from-left-8 duration-1000 delay-400">
                        <Card className="p-8 hover:shadow-xl transition-all duration-500">
                            <CardHeader className="px-0 pt-0">
                                <CardTitle className="text-2xl font-bold mb-2">Send us a message</CardTitle>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </CardHeader>
                            <CardContent className="px-0">
                                {isSubmitted ? (
                                    <div className="text-center py-12 animate-in fade-in scale-in duration-500">
                                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                        <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                                    placeholder="John Doe"
                                                    required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number *</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                                    placeholder="+1 234 567 8901"
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="company">Company</Label>
                                                <Input
                                                    id="company"
                                                    value={formData.company}
                                                    onChange={(e) => handleInputChange("company", e.target.value)}
                                                    placeholder="Your Company"
                                                    className="hover:border-primary/50 focus:border-primary transition-colors duration-300 w-full"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="service">Service Interested In</Label>
                                                <Select onValueChange={(value) => handleInputChange("service", value)} >
                                                    <SelectTrigger className="w-full hover:border-primary/50 focus:border-primary transition-colors duration-300">
                                                        <SelectValue placeholder="Select a service" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="web-development">Web Development</SelectItem>
                                                        <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
                                                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                                        <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                                                        <SelectItem value="api-development">API Development</SelectItem>
                                                        <SelectItem value="consulting">Consulting</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => handleInputChange("message", e.target.value)}
                                                placeholder="Tell us about your project..."
                                                rows={5}
                                                required
                                                className="hover:border-primary/50 focus:border-primary transition-colors duration-300 resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="w-full group hover:scale-[1.02] transition-all duration-300"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                                    Send Message
                                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-600">
                        {/* Quick Info */}
                        <Card className="p-6 hover:shadow-lg transition-all duration-300">
                            <CardHeader className="px-0 pt-0">
                                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-primary" />
                                    Business Hours
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-0 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Monday - Friday</span>
                                    <span>8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Saturday</span>
                                    <span>9:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Why Choose Us */}
                        <Card className="p-6 hover:shadow-lg transition-all duration-300">
                            <CardHeader className="px-0 pt-0">
                                <CardTitle className="text-lg font-semibold">Why Choose Us?</CardTitle>
                            </CardHeader>
                            <CardContent className="px-0 space-y-4">
                                <div className="flex items-start gap-3">
                                    <Users className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h4 className="font-medium">Expert Team</h4>
                                        <p className="text-sm text-muted-foreground">Experienced developers and designers</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Headphones className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h4 className="font-medium">24/7 Support</h4>
                                        <p className="text-sm text-muted-foreground">Round-the-clock assistance</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h4 className="font-medium">Proven Results</h4>
                                        <p className="text-sm text-muted-foreground">100+ successful projects delivered</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>


                    </div>
                </div>

                {/* Office Locations */}
                <div className="mt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            With offices around the world, we're always close to our clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {offices.map((office, index) => (
                            <Card
                                key={index}
                                className="group p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                                        {office.city}
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start gap-2">
                                            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                                            <span className="text-muted-foreground">{office.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            <a
                                                href={`tel:${office.phone}`}
                                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                            >
                                                {office.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <a
                                                href={`mailto:${office.email}`}
                                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                            >
                                                {office.email}
                                            </a>
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
