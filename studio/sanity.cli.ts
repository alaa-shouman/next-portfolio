import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8bkp4dkc',
    dataset: 'production',
  },

  /**
   * TypeGen reads GROQ queries out of the Next.js app that lives one level up
   * and writes the generated result types next to it, so `src/` can import
   * from `@/sanity.types` (or `../sanity.types`) without the Studio being a
   * runtime dependency of the site.
   *
   * `schema` is relative to this Studio folder and is produced by
   * `sanity schema extract` (run automatically by `sanity dev` / `sanity build`
   * while `enabled` is true).
   */
  typegen: {
    enabled: true,
    path: '../src/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../sanity.types.ts',
  },
})
