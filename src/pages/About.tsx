"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Lightbulb, Users, Target, Rocket, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function AboutSection() {
  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Solutions",
    "API Development",
    "Database Design",
  ]

  const values = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Innovation",
      description: "We leverage cutting-edge technologies to deliver modern solutions.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Quality",
      description: "We maintain the highest standards in every project we deliver.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Growth",
      description: "We help businesses scale and achieve their digital transformation goals.",
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Hero Introduction */}
      <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
          Crafting Digital Excellence
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We transform innovative ideas into powerful digital solutions that drive business growth and success.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        {/* Company Story */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="hover:text-foreground transition-colors duration-300">
                A forward-thinking technology company dedicated to creating exceptional digital experiences. We
                specialize in building robust, scalable software solutions that help businesses thrive in the digital
                age.
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                Our team combines technical expertise with creative vision to deliver solutions that not only meet your
                requirements but exceed your expectations.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-3 py-1 hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-400">
          <Card className="group p-8 border-l-4 border-l-blue-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:border-l-blue-600">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  To empower businesses with innovative software solutions that drive growth, efficiency, and success in
                  an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </Card>

          <Card className="group p-8 border-l-4 border-l-purple-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:border-l-purple-600">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  To be the leading software development partner, recognized for delivering world-class solutions that
                  transform businesses globally.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our core values shape everything we do and guide us in delivering exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/20 hover:from-primary/5 hover:to-primary/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    {value.icon}
                  </div>
                </div>
                <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="group relative overflow-hidden p-10 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-cyan-950/20 border-0 hover:shadow-2xl transition-all duration-700 animate-in fade-in slide-in-from-bottom-8 delay-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative text-center">
          <h2 className="text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how we can help bring your vision to life and transform your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="group/btn gap-2 px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Mail className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              Get In Touch
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 cursor-pointer">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 cursor-pointer">
                <MapPin className="h-4 w-4" />
                <span>Global Services</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
