import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './schemaTypes'
import {isSingletonType, structure} from './structure'

/**
 * Built-in document actions that would break singleton-ness if left enabled.
 * `action` is the identifier Sanity puts on its own built-in action components.
 */
const SINGLETON_FORBIDDEN_ACTIONS = ['duplicate', 'delete', 'unpublish'] as const

export default defineConfig({
  name: 'default',
  title: 'Alaa Portfolio',

  projectId: '8bkp4dkc',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },

  plugins: [structureTool({structure}), visionTool()],

  document: {
    /**
     * Singleton guard #1 — creation.
     *
     * Remove the three singleton types from the global "new document" menu so
     * an editor cannot mint a second `siteSettings` / `homePage` / `aboutPage`.
     * Only the global menu is filtered; inside the Structure panes the
     * singletons are reached via their pinned document ids anyway.
     */
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => !isSingletonType(templateItem.templateId))
      }
      return prev
    },

    /**
     * Singleton guard #2 — destruction / duplication.
     *
     * Strip `duplicate`, `delete` and `unpublish` from singleton documents so
     * the one canonical document cannot be copied or removed. Publish and
     * discard-changes stay available.
     */
    actions: (prev, {schemaType}) => {
      if (isSingletonType(schemaType)) {
        return prev.filter(
          (originalAction) =>
            !originalAction.action ||
            !(SINGLETON_FORBIDDEN_ACTIONS as readonly string[]).includes(originalAction.action),
        )
      }
      return prev
    },
  },
})
