export interface FeaturedProject {
  title: string;
  logo: string;
  tag: string;
  video?: string;
  image?: string;
  credits: string;
  link: string;
  description?: string;
  technologies?: string[];
}

export const featuredData: FeaturedProject[] = [
  {
    title: "Deal App",
    logo: "",
    tag: "React Native - 2024",
    image: "/assets/images/DealApp.png", // You'll need to add these images
    credits: "Alaa",
    link: "#", // Replace with your actual link
    description: "A modern React Native application built with Expo for deal management and discovery",
    technologies: ["React Native", "Expo", "TypeScript", "MongoDB"]
  },
  {
    title: "Adhan App",
    logo: "",
    tag: "React Native - 2024",
    image: "/assets/images/AdhanApp.png", // You'll need to add these images
    credits: "Alaa",
    link: "#", 
    description: "An Islamic prayer time application built with React Native and Expo",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"]
  },
  // Original Dribbble projects
  {
    title: "Okarys Brand Identity",
    logo: "",
    tag: "Design - Feb 2024",
    video: "https://cdn.dribbble.com/userupload/3743863/file/original-ed64ce215ecf5f86ead7fedaca82c84c.mp4",
    credits: "Julia Dmitrievna",
    link: "https://dribbble.com/shots/19587956-Okarys-Brand-Identity",
    description: "Complete brand identity design for Okarys",
    technologies: ["Adobe Illustrator", "Figma", "Brand Design"]
  },
  {
    title: "Social Media Video App UI",
    logo: "",
    tag: "UI/UX - Dec 2023",
    video: "https://cdn.dribbble.com/userupload/13004443/file/original-abd310aef7e5503eb49ec96040be757d.mp4",
    credits: "Julia Dmitrievna",
    link: "https://dribbble.com/shots/23626219-Social-Media-Video-App",
    description: "Modern social media application interface design",
    technologies: ["Figma", "Prototyping", "Mobile Design"]
  },
  {
    title: "Frontline Creative Studio",
    logo: "",
    tag: "Web Design - Sep 2023",
    video: "https://cdn.dribbble.com/userupload/12997464/file/original-a24f5765b5ac067c91523d94848da540.mp4",
    credits: "Julia Dmitrievna",
    link: "https://dribbble.com/shots/22408347-Frontline-Creative-Studio-Website",
    description: "Creative studio website with interactive elements",
    technologies: ["Figma", "Web Design", "Animation"]
  }
];