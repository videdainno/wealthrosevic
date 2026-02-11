import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <section className="bg-primary text-white py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl opacity-90">We'd love to hear from you.</p>
                </section>

                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                Have a project in mind? Reach out to us for a consultation or quote.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 text-accent rounded-lg">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Phone</h3>
                                        <p className="text-slate-600">+123 456 7890</p>
                                        <p className="text-slate-600">+098 765 4321</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 text-accent rounded-lg">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Email</h3>
                                        <p className="text-slate-600">info@wealthrose.com</p>
                                        <p className="text-slate-600">support@wealthrose.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 text-accent rounded-lg">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Office</h3>
                                        <p className="text-slate-600">
                                            123 Wealthrose Lane,<br />
                                            Business District, City, Country
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                action="/success" // Optional custom success page (not implemented yet)
                                className="space-y-4"
                            >
                                <input type="hidden" name="form-name" value="contact" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <input required type="text" id="name" name="name" className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input required type="email" id="email" name="email" className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="your@email.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <input required type="text" id="subject" name="subject" className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="Project Inquiry" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea required id="message" name="message" rows={5} className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="Tell us about your project..." />
                                </div>

                                <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </Section>

                {/* Map Placeholder */}
                <div className="h-96 w-full bg-slate-200 flex items-center justify-center text-slate-500">
                    Google Maps Embed Placeholder
                </div>
            </main>
            <Footer />
        </>
    );
}
