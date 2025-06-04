export interface CertificationItem {
    date: string;
    title: string;
    subtitle: string;
    link?: string;
    tag?: string;
    isCourse?: boolean;
}

export const certificationsData: CertificationItem[] = [
    {
        date: "2024",
        title: "React Native - The Practical Guide",
        subtitle: "Udemy",
        isCourse: true,
        link: "https://www.udemy.com/course/react-native-the-practical-guide"
    },
    {
        date: "2023",
        title: "Training of Trainers (ToT)",
        subtitle: "Robogeeks",
        isCourse: true,
        tag: "18hr",
    },
    {
        date: "2022",
        title: "The Ultimate React Course",
        subtitle: "Udemy",
        isCourse: true,
        link: "https://www.udemy.com/course/the-ultimate-react-course/"
    },
    {
        date: "2022",
        title: "Laravel From Scratch",
        subtitle: "Udemy",
        isCourse: true,
        link: "https://www.udemy.com/course/laravel-from-scratch"
    }
    
];