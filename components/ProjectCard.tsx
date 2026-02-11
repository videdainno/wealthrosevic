import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="relative h-64 w-full overflow-hidden">
                {/* Placeholder for actual image if not available or failure */}
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                    <span>Image: {project.title}</span>
                </div>

                {/* Actual Image component */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {project.category.replace("-", " ")}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>
                <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>{project.location}</span>
                    <span>{project.completedAt}</span>
                </div>
            </div>
        </Link>
    );
}
