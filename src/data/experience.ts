export interface ExperienceItem {
    date: string;
    title: string;
    subtitle: string;
    link?: string;
    tag?: string;
    isCourse?: boolean;
}

export const experienceData: ExperienceItem[] = [
    {
        date: "2025",
        title: "React, React Native and Electron Developer",
        subtitle: "3E-Tech",
        tag: "Current"
    },
    {
        date: "2024",
        title: "React Developer",
        subtitle: "KeyInHands",
    },
    {
        date: "2023",
        title: "IT Administrator",
        subtitle: "AlRawafid School",
    }
];