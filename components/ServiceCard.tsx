import Link from "next/link";
import * as Icons from "lucide-react";
import { Service } from "@/data/services";

type ServiceCardProps = {
    service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
    // Dynamically render icon
    const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

    return (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 flex flex-col h-full group">
            <div className="p-3 bg-primary/5 text-primary w-fit rounded-lg mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <IconComponent size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                {service.description}
            </p>
            <Link
                href={`/services/${service.slug}`}
                className="text-accent font-medium hover:underline inline-flex items-center gap-1"
            >
                Learn More <Icons.ArrowRight size={16} />
            </Link>
        </div>
    );
}
