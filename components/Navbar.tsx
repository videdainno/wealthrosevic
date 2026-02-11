"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
            {/* Top bar */}
            <div className="bg-primary text-primary-foreground text-xs py-2 px-6 hidden md:flex justify-between items-center">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><Phone size={12} /> +123 456 7890</span>
                    <span className="flex items-center gap-1"><Mail size={12} /> info@wealthrose.com</span>
                </div>
                <div className="flex gap-4">
                    {/* Socials placeholder */}
                    <span>Follow Us</span>
                </div>
            </div>

            <nav className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
                <Link href="/" className="text-2xl font-bold text-primary">
                    Wealthrose
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium hover:text-accent transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "h-screen opacity-100" : "h-0 opacity-0"
                )}
            >
                <div className="flex flex-col gap-6 p-6 items-center pt-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium hover:text-accent"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
