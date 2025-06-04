export const featuredData = [
    {
      title: "Okarys",
      logo: "",
      tag: "Feb 2024",
      video: "https://cdn.dribbble.com/userupload/3743863/file/original-ed64ce215ecf5f86ead7fedaca82c84c.mp4",
      credits: "Julia Dmitrievna",
      link: "https://dribbble.com/shots/19587956-Okarys-Brand-Identity",
    },
    {
      title: "Social Media Video App",
      logo: "",
      tag: "Dec 2023",
      video: "https://cdn.dribbble.com/userupload/13004443/file/original-abd310aef7e5503eb49ec96040be757d.mp4",
      credits: "Julia Dmitrievna",
      link: "https://dribbble.com/shots/23626219-Social-Media-Video-App",
    },
    {
      title: "Frontline Creative Studio Website",
      logo: "",
      tag: "Sep 2023",
      video: "https://cdn.dribbble.com/userupload/12997464/file/original-a24f5765b5ac067c91523d94848da540.mp4",
      credits: "Julia Dmitrievna",
      link: "https://dribbble.com/shots/22408347-Frontline-Creative-Studio-Website",
    },
  ];
  
  // TypeScript interface for the data structure
  export interface FeaturedProject {
    title: string;
    logo: string;
    tag: string;
    video: string;
    credits: string;
    link: string;
  }