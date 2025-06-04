export interface StackItem {
    name: string;
    icon: string;
    color?: string;
}

export interface StackCategory {
    category: string;
    items: StackItem[];
}

export const stackData: StackCategory[] = [
    {
        category: "Basics",
        items: [
            {
                name: "HTML5",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
                color: "#E34F26"
            },
            {
                name: "CSS3",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
                color: "#1572B6"
            },
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                color: "#F7DF1E"
            },
            {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                color: "#3178C6"
            }
        ]
    },
    {
        category: "Frontend FWs",
        items: [
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                color: "#61DAFB"
            },
            {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                color: "#000000"
            }
        ]
    },
    {
        category: "Styling / FWs",
        items: [
            
            {
                name: "Tailwind CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
                color: "#06B6D4"
            },
            {
                name: "Bootstrap CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
                color: "#06B6D4"
            },
            {
                name: "ReactStrap",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
                color: "#06B6D4"
            }
        ]
    },
    {
        category: "Animation",
        items: [
            {
                name: "Framer Motion",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
                color: "#0055FF"
            }
        ]
    },
    {
        category: "Backend / FWs",
        items: [
            {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                color: "#339933"
            },
            {
                name: "Express",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
                color: "#000000"
            },
            {
                name: "Laravel",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                color: "#FF3E00"
            }
        ]
    }
];