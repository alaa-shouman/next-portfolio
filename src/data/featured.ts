import HMS from "@/assets/images/hms.png";
import DrApp from "@/assets/images/DrApp.png";
import Jobify from "@/assets/images/JOBIFY.png";
import DealApp from "@/assets/images/DealApp.png";
import AdhanApp from "@/assets/images/AdhanApp.png";
import { StaticImageData } from "next/image";

export interface Technology {
  name: string;
  icon: string;
}

export interface FeaturedProject {
  title: string;
  logo: string;
  tag: string;
  video?: string;
  image?: string | StaticImageData;
  credits: string;
  link: string;
  googlePlay?: string;
  appStore?: string;
  description?: string;
  technologies?: Technology[];
}

export const featuredData: FeaturedProject[] = [
  {
    title: "Hotel Management System",
    logo: "",
    tag: "Electron React - 2025",
    image: HMS,
    credits: "Alaa",
    link: "https://github.com/alaa-shouman",
    description: "A modern hotel management system built with Electron React and CASL for permission managing and role-based access control",
    technologies: [
      {
        name: "Electron",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Postgresql",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "DrApp Application 'CureLink'",
    logo: "",
    tag: "React Native Cli - 2025",
    image: DrApp,
    credits: "Alaa",
    link: "https://chatsrx.webflow.io/",
    description: "A comprehensive healthcare application built with React Native CLI for both patients and doctors, featuring appointment scheduling, medical records management, and real-time chat functionality",
    technologies: [
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Expo",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
      },
      {
        name: "Expo",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Postgresql",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "Jobify",
    logo: "",
    tag: "React - 2025",
    image: Jobify,
    credits: "Alaa",
    link: "https://jobify-frontend-eight.vercel.app/",
    description: "A modern job search platform built with React and TypeScript",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    title: "Deal App",
    logo: "",
    tag: "React Native - 2024",
    image: DealApp,
    credits: "Alaa",
    link: "https://github.com/alaa-shouman",
    googlePlay: "https://play.google.com/store/apps/details?id=com.rida.deal",
    appStore: "https://apps.apple.com/lb/app/dealsy/id6743057671",
    description: "A modern React Native application built with Expo for deal management and discovery",
    technologies: [
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Expo",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    title: "Adhan App",
    logo: "",
    tag: "React Native - 2024",
    image: AdhanApp,
    credits: "Alaa",
    link: "https://github.com/alaa-shouman/Prayer",
    description: "An Islamic prayer time application built with React Native and Expo",
    technologies: [
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Expo",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
    ],
  },
  // {
  //   title: "Okarys Brand Identity",
  //   logo: "",
  //   tag: "Design - Feb 2024",
  //   video: "https://cdn.dribbble.com/userupload/3743863/file/original-ed64ce215ecf5f86ead7fedaca82c84c.mp4",
  //   credits: "Julia Dmitrievna",
  //   link: "https://dribbble.com/shots/19587956-Okarys-Brand-Identity",
  //   description: "Complete brand identity design for Okarys",
  //   technologies: [
  //     {
  //       name: "Adobe Illustrator",
  //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg"
  //     },
  //     {
  //       name: "Figma",
  //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
  //     },
  //     {
  //       name: "Photoshop",
  //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
  //     }
  //   ]
  // },
  // {
  //   title: "Social Media Video App UI",
  //   logo: "",
  //   tag: "UI/UX - Dec 2023",
  //   video: "https://cdn.dribbble.com/userupload/13004443/file/original-abd310aef7e5503eb49ec96040be757d.mp4",
  //   credits: "Julia Dmitrievna",
  //   link: "https://dribbble.com/shots/23626219-Social-Media-Video-App",
  //   description: "Modern social media application interface design",
  //   technologies: [
  //     {
  //       name: "Figma",
  //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
  //     },
  //     {
  //       name: "Sketch",
  //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg"
  //     },
  //     {
  //       name: "Adobe XD",
  //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg"
  //     }
  //   ]
  // },
  {
    title: "Frontline Creative Studio",
    logo: "",
    tag: "Web Design - Sep 2023",
    video: "https://cdn.dribbble.com/userupload/12997464/file/original-a24f5765b5ac067c91523d94848da540.mp4",
    credits: "Julia Dmitrievna",
    link: "https://dribbble.com/shots/22408347-Frontline-Creative-Studio-Website",
    description: "Creative studio website with interactive elements",
    technologies: [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
    ],
  },
];