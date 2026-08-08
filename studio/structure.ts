import {BookIcon} from '@sanity/icons/Book'
import {CaseIcon} from '@sanity/icons/Case'
import {CodeBlockIcon} from '@sanity/icons/CodeBlock'
import {CogIcon} from '@sanity/icons/Cog'
import {ComponentIcon} from '@sanity/icons/Component'
import {HomeIcon} from '@sanity/icons/Home'
import {RocketIcon} from '@sanity/icons/Rocket'
import {StackIcon} from '@sanity/icons/Stack'
import {StarIcon} from '@sanity/icons/Star'
import {ClockIcon} from '@sanity/icons/Clock'
import {UserIcon} from '@sanity/icons/User'
import type {ComponentType} from 'react'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

/**
 * Document types that must only ever have ONE instance.
 *
 * The document id is deliberately identical to the schema type name, because
 * that is what the content migration writes and what the Next.js app queries.
 *
 * Exported so `sanity.config.ts` can use the exact same list when filtering
 * `document.newDocumentOptions` and `document.actions` — one source of truth.
 */
export const SINGLETON_TYPES = ['siteSettings', 'homePage', 'aboutPage'] as const

export type SingletonType = (typeof SINGLETON_TYPES)[number]

/** Runtime membership test that also narrows the type. */
export function isSingletonType(type: string | undefined): type is SingletonType {
  return typeof type === 'string' && (SINGLETON_TYPES as readonly string[]).includes(type)
}

/**
 * Document types that carry a numeric `order` field and should therefore be
 * listed in site order rather than by "last edited".
 */
const ORDERED_TYPES = [
  'project',
  'experience',
  'education',
  'certification',
  'stackCategory',
] as const

/** Every type that gets an explicit place in the structure below. */
const EXPLICITLY_PLACED_TYPES: readonly string[] = [
  ...SINGLETON_TYPES,
  ...ORDERED_TYPES,
  'techBadge',
]

/**
 * A singleton list item: always opens the SAME document id, so the editor can
 * never accidentally create a second "Site Settings".
 */
function singletonListItem(
  S: StructureBuilder,
  type: SingletonType,
  title: string,
  icon: ComponentType,
) {
  return S.listItem()
    .id(type)
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(type).documentId(type).title(title))
}

/**
 * A document list sorted by the `order` field ascending, matching how the
 * Next.js app renders the collection.
 */
function orderedListItem(
  S: StructureBuilder,
  type: (typeof ORDERED_TYPES)[number],
  title: string,
  icon: ComponentType,
) {
  return S.listItem()
    .id(type)
    .title(title)
    .icon(icon)
    .child(
      S.documentTypeList(type)
        .title(title)
        .defaultOrdering([{field: 'order', direction: 'asc'}]),
    )
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio')
    .items([
      // ---------------------------------------------------------------
      // Singletons — pinned to fixed document ids
      // ---------------------------------------------------------------
      singletonListItem(S, 'siteSettings', 'Site Settings', CogIcon),
      singletonListItem(S, 'homePage', 'Home Page', HomeIcon),
      singletonListItem(S, 'aboutPage', 'About Page', UserIcon),

      S.divider(),

      // ---------------------------------------------------------------
      // Work
      // ---------------------------------------------------------------
      S.listItem()
        .id('group-work')
        .title('Work')
        .icon(RocketIcon)
        .child(
          S.list()
            .id('work')
            .title('Work')
            .items([orderedListItem(S, 'project', 'Projects', RocketIcon)]),
        ),

      S.divider(),

      // ---------------------------------------------------------------
      // Timeline
      // ---------------------------------------------------------------
      S.listItem()
        .id('group-timeline')
        .title('Timeline')
        .icon(ClockIcon)
        .child(
          S.list()
            .id('timeline')
            .title('Timeline')
            .items([
              orderedListItem(S, 'experience', 'Experience', CaseIcon),
              orderedListItem(S, 'education', 'Education', BookIcon),
              orderedListItem(S, 'certification', 'Certifications', StarIcon),
            ]),
        ),

      S.divider(),

      // ---------------------------------------------------------------
      // Tech
      // ---------------------------------------------------------------
      S.listItem()
        .id('group-tech')
        .title('Tech')
        .icon(ComponentIcon)
        .child(
          S.list()
            .id('tech')
            .title('Tech')
            .items([
              orderedListItem(S, 'stackCategory', 'Stack Categories', StackIcon),
              // techBadge has no `order` field — sort alphabetically by name.
              S.listItem()
                .id('techBadge')
                .title('Tech Badges')
                .icon(CodeBlockIcon)
                .child(
                  S.documentTypeList('techBadge')
                    .title('Tech Badges')
                    .defaultOrdering([{field: 'name', direction: 'asc'}]),
                ),
            ]),
        ),

      // ---------------------------------------------------------------
      // Anything added to the schema later, minus everything placed above.
      // Singletons are filtered out here so they never appear twice.
      // ---------------------------------------------------------------
      ...(() => {
        const rest = S.documentTypeListItems().filter(
          (listItem) => !EXPLICITLY_PLACED_TYPES.includes(listItem.getId() as string),
        )
        return rest.length ? [S.divider(), ...rest] : []
      })(),
    ])

export default structure
