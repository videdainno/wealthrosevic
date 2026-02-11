import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import Link from "next/link";

// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

type Params = Promise<{ slug: string }>;

export default async function ServiceDetail(props: { params: Params }) {
    const params = await props.params;
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    // Filter related projects
    const relatedProjects = projects.filter((p) => p.category === service.slug);

    // Icon
    const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {/* Banner */}
                <section className="bg-primary text-white py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="inline-block p-3 bg-white/10 rounded-lg mb-6 backdrop-blur-sm">
                            <IconComponent size={40} className="text-accent" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                        <p className="text-xl opacity-90 max-w-2xl">
                            {service.description}
                        </p>
                    </div>
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 transform skew-x-12" />
                </section>

                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-3xl font-bold text-primary">Overview</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                We provide top-tier {service.title.toLowerCase()} services designed to meet international standards. Our team of experts ensures precision, quality, and timely delivery for every project.
                            </p>

                            <h3 className="text-2xl font-bold text-primary pt-4">Key Features</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                                        <Icons.Check className="text-accent flex-shrink-0" />
                                        <span className="font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 mt-8">
                                <h3 className="text-2xl font-bold text-primary mb-2">Interested in this service?</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Let's discuss how we can help you achieve your goals.
                                </p>
                                <Link href="/contact" className="inline-block px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-colors">
                                    Request a Quote
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar / Related */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                                <h3 className="text-lg font-bold mb-4">Other Services</h3>
                                <ul className="space-y-3">
                                    {services.filter(s => s.slug !== service.slug).map(s => (
                                        <li key={s.slug}>
                                            <Link href={`/services/${s.slug}`} className="block p-3 rounded-lg hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm transition-all text-slate-600 dark:text-slate-300 hover:text-accent">
                                                {s.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <Section className="bg-slate-50 dark:bg-slate-900/50">
                        <h2 className="text-3xl font-bold text-primary mb-8">Related Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProjects.map(project => (
                                <ProjectCard key={project.slug} project={project} />
                            ))}
                        </div>
                    </Section>
                )}
            </main>
            <Footer />
        </>
    );
}
