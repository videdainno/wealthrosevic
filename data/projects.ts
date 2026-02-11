export type Project = {
    slug: string;
    title: string;
    description: string;
    category: "general-contracts" | "printing-production" | "interior-decoration" | "building-construction";
    image: string;
    completedAt: string;
    location: string;
    gallery?: string[];
};

export const projects: Project[] = [
    {
        slug: "luxury-villa-renovation",
        title: "Luxury Villa Renovation",
        description: "Complete interior and structural renovation of a premium villa in the city center.",
        category: "interior-decoration",
        image: "/images/project-1.jpg",
        completedAt: "2023-11",
        location: "City Center, Metropolis",
    },
    {
        slug: "corporate-hq-construction",
        title: "Corporate HQ Construction",
        description: "Ground-up construction of a 5-story office building for a tech giant.",
        category: "building-construction",
        image: "/images/project-2.jpg",
        completedAt: "2024-02",
        location: "Tech Park, Innovation City",
    },
    {
        slug: "annual-report-printing",
        title: "Annual Report Production",
        description: "High-volume printing and binding of annual reports for a major financial institution.",
        category: "printing-production",
        image: "/images/project-3.jpg",
        completedAt: "2023-04",
        location: "Financial District",
    },
    {
        slug: "government-office-supply",
        title: "Government Office Supply",
        description: "Procurement and supply of office equipment and furniture for a government agency.",
        category: "general-contracts",
        image: "/images/project-4.jpg",
        completedAt: "2023-08",
        location: "Capital City",
    },
];
