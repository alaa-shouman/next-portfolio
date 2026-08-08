import type { PortableTextBlock } from "next-sanity";
import type { ResolvedImage } from "@/sanity/image";

/**
 * The shape every presentational component consumes.
 *
 * Deliberately independent of where the data came from: the local TypeScript
 * data files and Sanity both get adapted into this before rendering. That is
 * what lets the data source swap without touching a single component — a
 * StaticImageData already carries src/width/height/blurDataURL, so it maps
 * onto ResolvedImage losslessly, and so does a Sanity asset with its metadata.
 */
export type { ResolvedImage };

export interface TechBadge {
  id: string;
  name: string;
  icon: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  description?: string;
  credits?: string;
  link?: string;
  googlePlay?: string;
  appStore?: string;
  image?: ResolvedImage | null;
  video?: string;
  technologies: TechBadge[];
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  link?: string;
  tag?: string;
  isCourse?: boolean;
}

export interface StackCategory {
  id: string;
  title: string;
  technologies: TechBadge[];
}

export interface SectionHeading {
  number: string;
  titleLine1: string;
  titleLine2: string;
}

export interface SiteSettings {
  name: string;
  role: string;
  timezone: string;
  avatar?: ResolvedImage | null;
  signature?: ResolvedImage | null;
  resumeUrl?: string;
}

export interface HomeContent {
  heroLines: string[];
  taglineLines: string[];
  featuredHeading: SectionHeading;
  aboutHeading: SectionHeading;
}

export interface AboutContent {
  pills: string[];
  portrait?: ResolvedImage | null;
  background: PortableTextBlock[];
  resumeIntro: string;
}

export interface PortfolioContent {
  site: SiteSettings;
  home: HomeContent;
  about: AboutContent;
  projects: Project[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
  certifications: TimelineEntry[];
  stackCategories: StackCategory[];
}
