export type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
};

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "John Doe",
        role: "CEO",
        company: "Tech Innovations",
        content: "Wealthrose transformed our office space into a modern, productive environment. Their attention to detail is unmatched.",
    },
    {
        id: "2",
        name: "Jane Smith",
        role: "Director",
        company: "Global Logistics",
        content: "The printing quality for our annual reports was exceptional. Delivered on time and within budget.",
    },
    {
        id: "3",
        name: "Robert Johnson",
        role: "Homeowner",
        company: "Private",
        content: "Our villa renovation was a huge success thanks to the Wealthrose team. Professional, skilled, and reliable.",
    },
];
