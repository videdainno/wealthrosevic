import Link from "next/link";
import Section from "./Section";

export default function Hero() {
    return (
        <div className="relative bg-primary text-white overflow-hidden min-h-[80vh] flex items-center">
            {/* Background Image Placeholder or Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-10" />
            <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />

            <Section className="relative z-20 w-full">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
                        Building Excellence, <br />
                        <span className="text-accent">Delivering Quality.</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                        From expert construction to premium printing and interior design.
                        We provide comprehensive solutions for all your project needs.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent/90 transition-colors"
                        >
                            Get a Quote
                        </Link>
                        <Link
                            href="/projects"
                            className="px-8 py-3 border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
