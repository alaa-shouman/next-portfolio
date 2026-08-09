"use client";
import {
    FaDribbble,
    FaEnvelope,
    FaExternalLinkAlt,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import type { SiteSettings, SocialLink } from "@/types/content";

/**
 * Picks an icon from the link's host so an editor only ever types a label and
 * a URL — no platform dropdown to keep in sync with the icons we ship.
 */
const ICONS: [RegExp, IconType][] = [
    [/(^|\.)github\.com$/i, FaGithub],
    [/(^|\.)linkedin\.com$/i, FaLinkedin],
    [/(^|\.)(twitter|x)\.com$/i, FaTwitter],
    [/(^|\.)instagram\.com$/i, FaInstagram],
    [/(^|\.)dribbble\.com$/i, FaDribbble],
];

function iconFor(url: string): IconType {
    try {
        const host = new URL(url).hostname;
        return ICONS.find(([pattern]) => pattern.test(host))?.[1] ?? FaExternalLinkAlt;
    } catch {
        // A malformed URL is an editor mistake, not a crash.
        return FaExternalLinkAlt;
    }
}

const SocialButton = ({ social }: { social: SocialLink }) => {
    const Icon = iconFor(social.url);
    return (
        <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className="group flex items-center gap-x-3 rounded-full border border-border bg-primary-background px-5 py-3 text-primary-foreground transition-colors hover:border-blue-joust/40 hover:bg-blue-joust/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-joust"
        >
            <Icon className="h-4 w-4 text-secondary-foreground transition-colors group-hover:text-blue-joust" />
            <span className="text-sm font-medium">{social.label}</span>
        </a>
    );
};

const Footer = ({ site }: { site: SiteSettings }) => {
    const hasContact = Boolean(site.email) || site.socials.length > 0;

    return (
        <footer className="pt-24 px-3 lg:px-8">
            <div className="rounded-2xl border border-border bg-secondary-background p-8 md:p-12 lg:p-16">
                {site.availability && (
                    <div className="mb-8 flex items-center gap-x-3">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-benzol opacity-60" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-benzol" />
                        </span>
                        <p className="text-sm uppercase tracking-[0.2em] text-secondary-foreground">
                            {site.availability}
                        </p>
                    </div>
                )}

                {/*
                  * The call to action only earns its place when there is
                  * somewhere for it to lead. With no contact details it would
                  * be an invitation to do nothing, so it is dropped entirely
                  * and only the closing bar remains.
                  */}
                {hasContact && (
                    <h2 className="font-oswald text-[13vw] leading-[90%] text-primary-foreground md:text-[7vw] lg:text-[5.5vw]">
                        Let&apos;s build
                        <span className="italic font-light"> something</span>
                    </h2>
                )}

                {hasContact && (
                    <div className="mt-10 flex flex-col gap-y-8">
                        {site.email && (
                            <a
                                href={`mailto:${site.email}`}
                                className="group flex w-fit items-center gap-x-4 text-primary-foreground transition-colors hover:text-blue-joust focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-joust"
                            >
                                <FaEnvelope className="h-5 w-5 text-secondary-foreground transition-colors group-hover:text-blue-joust" />
                                <span className="break-all text-xl font-medium underline decoration-secondary-foreground underline-offset-8 transition-colors group-hover:decoration-blue-joust md:text-3xl">
                                    {site.email}
                                </span>
                            </a>
                        )}

                        {site.socials.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                                {site.socials.map((social) => (
                                    <SocialButton key={social.key} social={social} />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-14 flex flex-col gap-y-3 border-t border-border pt-6 text-sm text-secondary-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        {site.name}
                        {site.role ? ` — ${site.role}` : ""}
                    </p>
                    {site.resumeUrl && (
                        <a
                            href={site.resumeUrl}
                            className="w-fit underline decoration-secondary-foreground/40 underline-offset-4 transition-colors hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-joust"
                        >
                            Download résumé
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
