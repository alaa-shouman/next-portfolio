import type { PortableTextBlock } from "next-sanity";

import { sanityFetch } from "./live";
import { HOME_QUERY } from "./queries";
import { resolveImage } from "./image";
import type {
  PortfolioContent,
  SectionHeading,
  StackCategory,
  TechBadge,
  TimelineEntry,
} from "@/types/content";

/**
 * Adapts the GROQ result into the same view model the components already
 * consume. Nothing downstream knows the data came from Sanity.
 */

interface RawImage {
  alt?: string | null;
  asset?: {
    url?: string | null;
    metadata?: {
      lqip?: string | null;
      dimensions?: { width?: number | null; height?: number | null } | null;
    } | null;
  } | null;
}

interface RawBadge {
  _id: string;
  name?: string | null;
  icon?: string | null;
  color?: string | null;
}

interface RawTimeline {
  _id: string;
  date?: string | null;
  title?: string | null;
  subtitle?: string | null;
  link?: string | null;
  tag?: string | null;
  isCourse?: boolean | null;
}

interface RawHeading {
  number?: string | null;
  titleLine1?: string | null;
  titleLine2?: string | null;
}

interface RawProject {
  _id: string;
  title?: string | null;
  tag?: string | null;
  description?: string | null;
  credits?: string | null;
  link?: string | null;
  googlePlay?: string | null;
  appStore?: string | null;
  image?: RawImage | null;
  technologies?: RawBadge[] | null;
}

/**
 * Written out by hand rather than generated. Running Sanity TypeGen would
 * produce the same thing from HOME_QUERY, but that couples typechecking the
 * app to having the Studio installed; this keeps `tsc` self-sufficient.
 * If TypeGen is adopted later, swap this for the generated HOME_QUERYResult.
 */
interface HomeQueryResult {
  siteSettings?: {
    name?: string | null;
    role?: string | null;
    timezone?: string | null;
    avatar?: RawImage | null;
    signature?: RawImage | null;
    resumeUrl?: string | null;
  } | null;
  homePage?: {
    heroLines?: string[] | null;
    taglineLines?: string[] | null;
    featuredHeading?: RawHeading | null;
    aboutHeading?: RawHeading | null;
  } | null;
  aboutPage?: {
    pills?: string[] | null;
    portrait?: RawImage | null;
    background?: PortableTextBlock[] | null;
    resumeIntro?: string | null;
  } | null;
  projects?: RawProject[] | null;
  experience?: RawTimeline[] | null;
  education?: RawTimeline[] | null;
  certifications?: RawTimeline[] | null;
  stackCategories?:
    | { _id: string; title?: string | null; technologies?: RawBadge[] | null }[]
    | null;
}

const badges = (input: RawBadge[] | null | undefined): TechBadge[] =>
  (input ?? [])
    .filter((badge) => badge?.name && badge?.icon)
    .map((badge) => ({
      id: badge._id,
      name: badge.name!,
      icon: badge.icon!,
      color: badge.color ?? undefined,
    }));

const timeline = (input: RawTimeline[] | null | undefined): TimelineEntry[] =>
  (input ?? []).map((item) => ({
    id: item._id,
    date: item.date ?? "",
    title: item.title ?? "",
    subtitle: item.subtitle ?? "",
    link: item.link ?? undefined,
    tag: item.tag ?? undefined,
    isCourse: item.isCourse ?? undefined,
  }));

const heading = (input: RawHeading | null | undefined): SectionHeading => ({
  number: input?.number ?? "",
  titleLine1: input?.titleLine1 ?? "",
  titleLine2: input?.titleLine2 ?? "",
});

export async function getPortfolioContent(): Promise<PortfolioContent> {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  const result = data as HomeQueryResult | null;

  if (!result) {
    throw new Error(
      "Sanity returned no content for HOME_QUERY. Check the dataset has been populated.",
    );
  }

  const site = result.siteSettings;
  const home = result.homePage;
  const about = result.aboutPage;

  return {
    site: {
      name: site?.name ?? "",
      role: site?.role ?? "",
      timezone: site?.timezone ?? "Asia/Beirut",
      avatar: resolveImage(site?.avatar),
      signature: resolveImage(site?.signature),
      resumeUrl: site?.resumeUrl ?? undefined,
    },
    home: {
      heroLines: home?.heroLines ?? [],
      taglineLines: home?.taglineLines ?? [],
      featuredHeading: heading(home?.featuredHeading),
      aboutHeading: heading(home?.aboutHeading),
    },
    about: {
      pills: about?.pills ?? [],
      portrait: resolveImage(about?.portrait),
      background: (about?.background ?? []) as PortableTextBlock[],
      resumeIntro: about?.resumeIntro ?? "",
    },
    projects: (result.projects ?? []).map((project) => ({
      id: project._id,
      title: project.title ?? "",
      tag: project.tag ?? "",
      description: project.description ?? undefined,
      credits: project.credits ?? undefined,
      link: project.link ?? undefined,
      googlePlay: project.googlePlay ?? undefined,
      appStore: project.appStore ?? undefined,
      image: resolveImage(project.image),
      technologies: badges(project.technologies),
    })),
    experience: timeline(result.experience),
    education: timeline(result.education),
    certifications: timeline(result.certifications),
    stackCategories: (result.stackCategories ?? []).map(
      (category): StackCategory => ({
        id: category._id,
        title: category.title ?? "",
        technologies: badges(category.technologies),
      }),
    ),
  };
}
