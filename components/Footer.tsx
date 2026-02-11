import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Wealthrose</h2>
                        <p className="text-sm opacity-80">
                            Building dreams, crafting excellence. Your partner in construction and creative production.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-accent">Services</Link></li>
                            <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
                            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link href="/services/general-contracts" className="hover:text-accent">General Contracts</Link></li>
                            <li><Link href="/services/printing-production" className="hover:text-accent">Printing & Production</Link></li>
                            <li><Link href="/services/interior-decoration" className="hover:text-accent">Interior Decoration</Link></li>
                            <li><Link href="/services/building-construction" className="hover:text-accent">Building Construction</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>123 Wealthrose Lane, Business City</li>
                            <li>info@wealthrose.com</li>
                            <li>+123 456 7890</li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="hover:text-accent"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-accent"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-accent"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-accent"><Linkedin size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm opacity-60">
                    © {new Date().getFullYear()} Wealthrose. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
