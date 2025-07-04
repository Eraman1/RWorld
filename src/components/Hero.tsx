// import { Button } from "@/components/ui/button"
// import { ArrowRight, Code, Zap, Users } from "lucide-react"

// export default function Hero() {
//     return (
//         <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

//             {/* Floating Elements */}
//             <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full blur-xl animate-float opacity-60"></div>
//             <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full blur-xl animate-float-delayed opacity-60"></div>
//             <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-200 rounded-full blur-xl animate-float opacity-60"></div>

//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//                 <div className="text-center max-w-4xl mx-auto">
//                     {/* Company Name */}
//                     <div className="mb-6 animate-fade-in-up">
//                         <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
//                             <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
//                                 r-world
//                             </span>
//                         </h1>
//                     </div>

//                     {/* Tagline */}
//                     <div className="mb-8 animate-fade-in-up animation-delay-200">
//                         <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed">
//                             Transforming Ideas into Digital Reality
//                         </p>
//                         <p className="text-lg sm:text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
//                             Your trusted partner for innovative IT projects and comprehensive digital services
//                         </p>
//                     </div>

//                     {/* Feature Icons */}
//                     <div className="flex justify-center gap-8 mb-12 animate-fade-in-up animation-delay-400">
//                         <div className="flex flex-col items-center group">
//                             <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
//                                 <Code className="w-8 h-8 text-purple-600" />
//                             </div>
//                             <span className="text-sm text-gray-600 font-medium">Development</span>
//                         </div>
//                         <div className="flex flex-col items-center group">
//                             <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
//                                 <Zap className="w-8 h-8 text-emerald-600" />
//                             </div>
//                             <span className="text-sm text-gray-600 font-medium">Innovation</span>
//                         </div>
//                         <div className="flex flex-col items-center group">
//                             <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
//                                 <Users className="w-8 h-8 text-orange-600" />
//                             </div>
//                             <span className="text-sm text-gray-600 font-medium">Partnership</span>
//                         </div>
//                     </div>

//                     {/* CTA Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
//                         <Button
//                             size="lg"
//                             className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
//                         >
//                             Start Your Project
//                             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                         </Button>
//                         <Button
//                             variant="outline"
//                             size="lg"
//                             className="border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
//                         >
//                             Our Services
//                         </Button>
//                     </div>

//                     {/* Stats */}
//                     <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up animation-delay-800">
//                         <div className="text-center">
//                             <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">100+</div>
//                             <div className="text-gray-600">Projects Delivered</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50+</div>
//                             <div className="text-gray-600">Happy Clients</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">5+</div>
//                             <div className="text-gray-600">Years Experience</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Scroll Indicator */}
//             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//                 <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//                     <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
//                 </div>
//             </div>
//         </section>
//     )
// }



import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Users } from "lucide-react"
import { Globe } from "./magicui/globe"

export default function Hero() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20"></div>

            {/* Floating Blobs */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float opacity-60" />
            <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/30 rounded-full blur-xl animate-float-delayed opacity-60" />
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/40 rounded-full blur-xl animate-float opacity-60" />

            {/* Main Container */}
            <div className="container mx-auto px-2 sm:px-4 lg:px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

                    {/* Content Section */}
                    <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                        {/* Headline and Tagline */}
                        <div className="animate-fade-in-up animation-delay-200">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                                <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-slate-200 dark:via-purple-400 dark:to-slate-200 text-transparent bg-clip-text">
                                    Transforming Ideas into Digital Reality
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                                Your trusted partner for innovative IT projects and comprehensive digital services.
                            </p>
                        </div>

                        {/* Feature Icons */}
                        <div className="flex justify-start gap-8 animate-fade-in-up animation-delay-400">
                            {[
                                { icon: Code, label: "Development" },
                                { icon: Zap, label: "Innovation" },
                                { icon: Users, label: "Partnership" }
                            ].map(({ icon: Icon, label }, idx) => (
                                <div key={idx} className="flex flex-col items-center group">
                                    <div className="w-16 h-16 bg-card border rounded-full shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <span className="text-sm text-muted-foreground font-medium">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-start items-start animate-fade-in-up animation-delay-600">
                            <Button
                                size="lg"
                                className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-8 py-4 text-lg font-semibold rounded-full bg-transparent hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                Get in touch
                            </Button>
                        </div>
                    </div>

                    {/* Globe Section */}
                    <div className="flex justify-center items-center relative h-[500px] lg:h-[600px] order-1 lg:order-2">
                        <Globe className="w-full max-w-[500px] lg:max-w-[600px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}