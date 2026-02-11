import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionProps = {
    id?: string;
    className?: string;
    children: ReactNode;
};

export default function Section({ id, className, children }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto", className)}>
            {children}
        </section>
    );
}
