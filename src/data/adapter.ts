import type { StaticImageData } from "next/image";
import type { PortableTextBlock } from "next-sanity";

import { experienceData } from "./experience";
import { educationData } from "./education";
import { certificationsData } from "./certifications";
import { stackData } from "./stack";
import { featuredData } from "./featured";

import Portrait from "@/assets/images/gallery/Alaa.png";
import Avatar from "@/assets/images/gallery/profile.jpg";
import Signature from "@/assets/images/signature.png";

import type {
  PortfolioContent,
  ResolvedImage,
  TechBadge,
  TimelineEntry,
} from "@/types/content";

/**
 * Temporary bridge: serves the existing hardcoded data through the same
 * view-model the Sanity queries will produce. It exists so the server/client
 * boundary can be moved and verified on its own, before the data source
 * changes. Deleted once the Sanity wiring is proven.
 */

const fromStatic = (img: StaticImageData): ResolvedImage => ({
  url: img.src,
  width: img.width,
  height: img.height,
  blurDataURL: img.blurDataURL,
});

const slug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const badge = (name: string, icon: string, color?: string): TechBadge => ({
  id: slug(name),
  name,
  icon,
  color,
});

const timeline = (
  items: {
    date: string;
    title: string;
    subtitle: string;
    link?: string;
    tag?: string;
    isCourse?: boolean;
  }[],
): TimelineEntry[] =>
  items.map((item, index) => ({ id: `${slug(item.title)}-${index}`, ...item }));

// Mirrors the JSX that BackgroundCard renders inline today: emphasised phrases
// carried `underline font-medium`, and the final paragraph its own italic style.
const span = (text: string, underline = false) => ({
  _type: "span" as const,
  _key: `s${Math.abs(hash(text))}`,
  text,
  marks: underline ? ["underline"] : [],
});

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i) | 0;
  return h;
}

const block = (
  children: ReturnType<typeof span>[],
  style: "normal" | "closing" = "normal",
) => ({
  _type: "block" as const,
  _key: `b${Math.abs(hash(children.map((c) => c.text).join("")))}`,
  style,
  markDefs: [],
  children,
});

const background: PortableTextBlock[] = [
  block([
    span("My journey in technology began with a passion for problem-solving and innovation. As a "),
    span("Computer Science graduate from the Lebanese University", true),
    span(", I built a strong foundation in software engineering principles and modern development practices."),
  ]),
  block([
    span("My professional career took off when I joined "),
    span("Key in Hands in Baalbek, Lebanon", true),
    span(" as a "),
    span("React Developer", true),
    span("I refined my "),
    span("front-end development", true),
    span("abilities during my six-month stay by working on dynamic web applications and user interfaces that produced outstanding user experiences."),
  ]),
  block([
    span("Building on this foundation, I advanced my career at "),
    span("3E Tech", true),
    span(" where I expanded my expertise into "),
    span("React Native and Electron development", true),
    span(". This role allowed me to dive deep into "),
    span("cross-platform mobile applications", true),
    span(" and "),
    span("desktop application development", true),
    span(", greatly expanding my technical skill set."),
  ]),
  block([
    span("Throughout my journey, I've been passionate about "),
    span("full-stack development", true),
    span(", continuously learning and adapting to new technologies. My experience spans from "),
    span("web development with React", true),
    span(" to "),
    span("mobile app development with React Native", true),
    span(" and "),
    span("desktop applications with Electron", true),
    span("."),
  ]),
  block(
    [
      span("I work to develop significant software solutions that address practical issues and improve user experiences on all platforms, propelled by creativity and a dedication to quality."),
    ],
    "closing",
  ),
] as unknown as PortableTextBlock[];

export const localContent: PortfolioContent = {
  site: {
    name: "Alaa Shouman",
    role: "Software Engineer",
    timezone: "Asia/Beirut",
    avatar: fromStatic(Avatar),
    signature: fromStatic(Signature),
    resumeUrl: "/assets/Alaa Shouman Resume.pdf",
  },
  home: {
    heroLines: ["Code", "Crafting", "Brilliance"],
    taglineLines: [
      "Empowering innovation",
      "Through inspire Design",
      "where Challenges spark creativity",
      "and every line of code tells a story",
    ],
    featuredHeading: { number: "01", titleLine1: "Featured", titleLine2: "Work" },
    aboutHeading: { number: "02", titleLine1: "About", titleLine2: "Me" },
  },
  about: {
    pills: [
      "Hello, universe 👋",
      "Full Stack Developer 💻",
      "React Native Expert 📱",
      "Problem Solver 🚀",
      "Tea Enthusiast ☕",
    ],
    portrait: fromStatic(Portrait),
    background,
    resumeIntro:
      "Greetings! I'm Alaa Shouman, a graduate of Lebanese University with a degree in computer science, and I'm excited to start a new and exciting journey in the tech industry. I've developed a broad range of skills across multiple technologies thanks to my strong foundation in computer science principles and my insatiable curiosity.",
  },
  projects: featuredData.map((project, index) => ({
    id: `${slug(project.title)}-${index}`,
    title: project.title,
    tag: project.tag,
    description: project.description,
    credits: project.credits,
    link: project.link,
    googlePlay: project.googlePlay,
    appStore: project.appStore,
    video: project.video,
    image:
      typeof project.image === "string"
        ? { url: project.image, width: 1200, height: 800 }
        : project.image
          ? fromStatic(project.image)
          : null,
    technologies: (project.technologies ?? []).map((tech) =>
      badge(tech.name, tech.icon),
    ),
  })),
  experience: timeline(experienceData),
  education: timeline(educationData),
  certifications: timeline(certificationsData),
  stackCategories: stackData.map((category, index) => ({
    id: `${slug(category.category)}-${index}`,
    title: category.category,
    technologies: category.items.map((item) =>
      badge(item.name, item.icon, item.color),
    ),
  })),
};
