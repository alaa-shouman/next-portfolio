# Alaa Portfolio — Sanity Studio

Standalone Sanity Studio for the Next.js portfolio in the parent directory.

| | |
| --- | --- |
| Project ID | `8bkp4dkc` |
| Dataset | `production` |
| Studio title | Alaa Portfolio |

The Next.js app reads from **this same project and dataset**, so anything published here appears on the site. The Studio is a separate npm package with its own `node_modules` — it is not part of the site's build.

## Install

Run from inside this folder (requires Node 22.12+):

```bash
cd studio
npm install
```

## Run locally

```bash
npm run dev
```

Opens the Studio on <http://localhost:3333>.

## Deploy

Deploy the hosted Studio to `<your-hostname>.sanity.studio`:

```bash
npm run deploy
```

Deploy the schema to the Content Lake (needed for schema-aware tooling such as the Sanity MCP server and Create):

```bash
npm run schema:deploy
```

## Content model

Three **singletons** — `siteSettings`, `homePage`, `aboutPage` — are pinned to fixed document ids equal to their type name. They cannot be duplicated, deleted, unpublished, or created a second time from the "new document" menu.

Everything else is a normal collection, grouped in the Studio sidebar:

- **Work** — Projects
- **Timeline** — Experience, Education, Certifications
- **Tech** — Stack Categories, Tech Badges

Collections with an `order` field (`project`, `experience`, `education`, `certification`, `stackCategory`) are listed in ascending `order` so the Studio matches the order on the site. Lower numbers appear first.

## Generated types

`sanity.cli.ts` enables TypeGen. During `npm run dev` and `npm run build` it scans `../src/**/*.{ts,tsx}` for GROQ queries and writes `../sanity.types.ts` for the Next.js app.

Only queries assigned to a variable via `defineQuery(...)` or the `groq` template tag are picked up, and each query variable name must be unique across the app. Inline queries passed straight to `client.fetch()` are skipped.

The root `tsconfig.json` already covers the generated file (`include: ["**/*.ts", ...]`) and excludes `studio`, so no root config change is needed.

To regenerate manually:

```bash
npx sanity schema extract && npx sanity typegen generate
```
