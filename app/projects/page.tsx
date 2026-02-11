"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/data/projects";
import { services } from "@/data/services"; // for categories
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Projects() {
    const [filter, setFilter] = useState<string>("all");

    const categories = [
        { slug: "all", title: "All Projects" },
        ...services.map(s => ({ slug: s.slug, title: s.title }))
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <section className="bg-primary text-white py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        A showcase of our finest work across all industries.
                    </p>
                </section>

                <Section>
                    {/* Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map(cat => (
                            <button
                                key={cat.slug}
                                onClick={() => setFilter(cat.slug)}
                                className={cn(
                                    "px-6 py-2 rounded-full font-medium transition-all",
                                    filter === cat.slug
                                        ? "bg-accent text-white shadow-md"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                                )}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-slate-500">
                            No projects found in this category.
                        </div>
                    )}
                </Section>
            </main>
            <Footer />
        </>
    );
}
