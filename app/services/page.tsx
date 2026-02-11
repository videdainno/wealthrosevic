import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import { services } from "@/data/services";

export default function Services() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <section className="bg-primary text-white py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your needs.
                    </p>
                </section>

                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.slug} service={service} />
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
