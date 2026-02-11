import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Tag } from "lucide-react";

// Generate static params
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type Params = Promise<{ slug: string }>;

export default async function ProjectDetail(props: { params: Params }) {
    const params = await props.params;
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    const category = services.find(s => s.slug === project.category);

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {/* Banner with Image */}
                <section className="relative h-[60vh] md:h-[70vh] w-full">
                    <div className="absolute inset-0 bg-slate-900">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-50"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
                        <div className="max-w-7xl mx-auto">
                            <span className="bg-accent px-3 py-1 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
                                {category?.title || project.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
                            <div className="flex flex-wrap gap-6 text-white/80">
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} /> {project.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} /> {project.completedAt}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-3xl font-bold text-primary">Project Overview</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {project.description}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            {/* Gallery Placeholder */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="h-48 bg-slate-200 rounded-lg"></div>
                                <div className="h-48 bg-slate-200 rounded-lg"></div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl space-y-6 sticky top-24">
                                <h3 className="text-xl font-bold text-primary">Project Details</h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-500 uppercase">Client</h4>
                                        <p className="font-medium">Confidential Client</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-500 uppercase">Category</h4>
                                        <Link href={`/services/${project.category}`} className="text-accent hover:underline">
                                            {category?.title}
                                        </Link>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-500 uppercase">Year</h4>
                                        <p className="font-medium">{project.completedAt}</p>
                                    </div>
                                </div>

                                <Link href="/contact" className="block w-full text-center py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                                    Start a Project Like This
                                </Link>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
