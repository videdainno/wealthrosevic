import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  // Get featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />

        {/* Services Section */}
        <Section id="services" className="bg-slate-50 dark:bg-slate-900/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We offer a comprehensive range of services tailored to meet your unique needs, from construction to creative production.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Section>

        {/* About Summary */}
        <Section id="about">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative h-96 rounded-2xl overflow-hidden shadow-xl">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                About Us Image
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Decades of Excellence in Every Project</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Wealthrose is more than just a construction company. We are your partners in building the future. With expertise spanning general contracts, printing, interior decoration, and large-scale construction, we deliver quality that stands the test of time.
              </p>
              <ul className="space-y-3">
                {[
                  "Certified Experts & Engineers",
                  "Premium Quality Materials",
                  "On-Time Project Delivery",
                  "Cost-Effective Solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary font-medium">
                    <CheckCircle2 className="text-accent" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                  Read More About Us <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Featured Projects */}
        <Section id="projects" className="bg-primary/5">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                Explore some of our recent work across various industries.
              </p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-accent font-semibold hover:underline">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative">
                <div className="text-accent text-6xl absolute top-4 left-6 opacity-20 font-serif">"</div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10 italic">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    {/* Placeholder Avatar */}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Whether it's a new building, a renovation, or a printing order, we are here to help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all shadow-lg transform hover:-translate-y-1"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
