export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
    };
};

export const team: TeamMember[] = [
    {
        id: "1",
        name: "Alex Rose",
        role: "Founder & CEO",
        image: "/images/team-1.jpg",
        bio: "With over 20 years of experience in construction and production, Alex leads Wealthrose with a vision for excellence.",
    },
    {
        id: "2",
        name: "Sarah Lee",
        role: "Head of Interiors",
        image: "/images/team-2.jpg",
        bio: "Sarah brings a creative flair and a keen eye for design, ensuring every space tells a unique story.",
    },
    {
        id: "3",
        name: "Michael Chen",
        role: "Operations Manager",
        image: "/images/team-3.jpg",
        bio: "Michael ensures all projects run smoothly, on time, and within budget, coordinating teams effectively.",
    },
];
