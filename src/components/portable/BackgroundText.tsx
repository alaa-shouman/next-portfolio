"use client";
import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "next-sanity";

/**
 * Mirrors the markup the background bio used to carry inline: emphasised
 * phrases were `<span className="underline font-medium">`, and the final
 * paragraph had its own italic treatment. Those become an `underline`
 * decorator and a `closing` block style respectively.
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    closing: ({ children }) => (
      <p className="italic font-medium text-secondary-foreground">{children}</p>
    ),
  },
  marks: {
    underline: ({ children }) => (
      <span className="underline font-medium">{children}</span>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-medium hover:text-blue-joust transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export default function BackgroundText({
  value,
}: {
  value: PortableTextBlock[] | null | undefined;
}) {
  if (!value?.length) return null;
  return <PortableText value={value} components={components} />;
}
