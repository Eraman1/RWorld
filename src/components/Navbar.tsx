// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { ScrollProgress } from "./magicui/scroll-progress";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-background border-b shadow-sm">
            <ScrollProgress className="top-[60px]" />
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold text-foreground">
                    R-World Software
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-primary hover:text-mute transition-colors duration-500 underline-offset-4 hover:underline"

                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="ml-4">
                        <ModeToggle />
                    </div>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />
                    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                        <SheetTrigger asChild>
                            <button>
                                <Menu className="w-6 h-6 text-foreground" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <div className="flex flex-col mt-12">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-base  p-3 border font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
