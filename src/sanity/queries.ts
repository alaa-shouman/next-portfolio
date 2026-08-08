import { defineQuery } from "next-sanity";

// Everything the single-page site renders, in one round trip. Splitting this
// into per-section queries would mean six sequential requests for a page that
// always shows all six sections.
const IMAGE_PROJECTION = `{
  alt,
  asset->{
    url,
    metadata { lqip, dimensions { width, height } }
  }
}`;

const BADGE_PROJECTION = `{ _id, name, icon, color }`;

export const HOME_QUERY = defineQuery(`{
  "siteSettings": *[_type == "siteSettings"][0]{
    name,
    role,
    timezone,
    avatar ${IMAGE_PROJECTION},
    signature ${IMAGE_PROJECTION},
    "resumeUrl": resumeFile.asset->url
  },
  "homePage": *[_type == "homePage"][0]{
    heroLines,
    taglineLines,
    featuredHeading { number, titleLine1, titleLine2 },
    aboutHeading { number, titleLine1, titleLine2 }
  },
  "aboutPage": *[_type == "aboutPage"][0]{
    pills,
    portrait ${IMAGE_PROJECTION},
    background,
    resumeIntro
  },
  "projects": *[_type == "project"] | order(order asc){
    _id,
    title,
    tag,
    description,
    video,
    credits,
    link,
    googlePlay,
    appStore,
    image ${IMAGE_PROJECTION},
    technologies[]->${BADGE_PROJECTION}
  },
  "experience": *[_type == "experience"] | order(order asc){
    _id, date, title, subtitle, link, tag
  },
  "education": *[_type == "education"] | order(order asc){
    _id, date, title, subtitle, link, tag
  },
  "certifications": *[_type == "certification"] | order(order asc){
    _id, date, title, subtitle, link, tag, isCourse
  },
  "stackCategories": *[_type == "stackCategory"] | order(order asc){
    _id,
    title,
    technologies[]->${BADGE_PROJECTION}
  }
}`);

// Metadata is fetched separately so it can run with stega disabled — encoded
// editing markers in <head> or JSON-LD would corrupt what crawlers read.
export const SITE_METADATA_QUERY = defineQuery(`*[_type == "siteSettings"][0]{
  name,
  role,
  seo {
    title,
    description,
    ogDescription,
    shortDescription,
    keywords,
    ogImage { asset->{ url } }
  },
  "avatarUrl": avatar.asset->url
}`);
