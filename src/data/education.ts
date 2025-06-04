export interface EducationItem {
    date: string;
    title: string;
    subtitle: string;
    link?: string;
    tag?: string;
    isCourse?: boolean;
}

export const educationData: EducationItem[] = [
    {
        date: "2025",
        title: "Masters Degree in Computer Science",
        subtitle: "Lebanese University",
        tag: "In Progress",
    },
    {
        date: "2023",
        title: "Bachelor of Computer Science",
        subtitle: "Lebanese University",
    },
    {
        date: "2019",
        title: "General Science Diploma",
        subtitle: "Al Manara High School",
    }
];