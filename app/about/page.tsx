import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { team } from "@/data/team";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {/* Header */}
                <section className="bg-primary text-white py-20 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Wealthrose</h1>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            A legacy of excellence in construction, production, and design.
                        </p>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-white/5 opacity-20 transform -skew-y-6 origin-top-left scale-150" />
                </section>

                {/* Mission & Vision */}
                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                        <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                            <h2 className="text-2xl font-bold text-accent mb-4">Our Mission</h2>
                            <p className="text-slate-600 dark:text-slate-300">
                                To provide top-tier construction and production services that exceed client expectations through innovation, integrity, and operational excellence.
                            </p>
                        </div>
                        <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                            <h2 className="text-2xl font-bold text-accent mb-4">Our Vision</h2>
                            <p className="text-slate-600 dark:text-slate-300">
                                To be the leading partner in infrastructure development and creative production, setting new standards for quality and sustainability.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Story / History */}
                <Section className="bg-slate-50 dark:bg-slate-900/50">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl font-bold text-primary text-center">Our Story</h2>
                        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                Founded with a commitment to quality, Wealthrose has grown from a small contracting firm into a multi-disciplinary powerhouse. Over the years, we have successfully delivered countless projects, ranging from luxury residential builds to large-scale commercial printing jobs.
                            </p>
                            <p>
                                Our journey is defined by our core values: <strong>Integrity, Quality, and Innovation</strong>. We believe in building relationships as strong as our structures.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Team */}
                <Section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
                        <p className="text-slate-600 dark:text-slate-400">The experts behind our success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member) => (
                            <div key={member.id} className="group text-center">
                                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 shadow-lg group-hover:border-accent transition-colors">
                                    {/* Placeholder for team image */}
                                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                        {member.name.charAt(0)}
                                    </div>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                                <p className="text-accent font-medium mb-3">{member.role}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
