export type Service = {
    slug: string;
    title: string;
    description: string;
    icon: string; // We can use Lucide icon names or similar
    features: string[];
};

export const services: Service[] = [
    {
        slug: "general-contracts",
        title: "General Contracts",
        description: "Comprehensive contracting services for diverse project needs, ensuring quality and timely delivery.",
        icon: "Briefcase",
        features: ["Project Management", "Supply Chain Management", "Vendor Coordination", "Quality Assurance"],
    },
    {
        slug: "printing-production",
        title: "Printing & Production",
        description: "High-quality printing and large-scale production solutions for businesses and creative projects.",
        icon: "Printer",
        features: ["Large Format Printing", "Offset Printing", "Branding Materials", "Packaging Solutions"],
    },
    {
        slug: "interior-decoration",
        title: "Interior Decoration",
        description: "Transforming spaces with modern, aesthetic, and functional interior design solutions.",
        icon: "LayoutTemplate",
        features: ["Space Planning", "Furniture Selection", "Lighting Design", "Color Consultation"],
    },
    {
        slug: "building-construction",
        title: "Building Construction",
        description: "Expert construction services for residential, commercial, and industrial projects.",
        icon: "HardHat",
        features: ["Residential Construction", "Commercial Development", "Renovation & Remodeling", "Structural Engineering"],
    },
];
