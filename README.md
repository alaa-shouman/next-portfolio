# Portfolio

A [Next.js](https://nextjs.org) portfolio site. All content — copy, projects,
timeline entries, images, and SEO metadata — is edited in Sanity rather than
committed to this repo.

## Running the site

```bash
yarn dev
```

Then open http://localhost:3000. The site reads published content from Sanity,
so it needs `.env.local` (see below) even in development.

## Environment

`.env.local` is gitignored and must exist locally. The same four values go into
Vercel's project settings before deploying:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project (`8bkp4dkc`) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API date, currently `2026-08-01` |
| `SANITY_API_READ_TOKEN` | **Server only.** Never prefix this with `NEXT_PUBLIC_` — that would publish a token able to read unpublished drafts. |

## Editing content

Content lives in the `studio/` folder as a standalone Sanity Studio. It is not
mounted inside this app, so editing it never triggers a site rebuild.

```bash
cd studio
yarn install     # first time only
yarn dev         # http://localhost:3333
yarn deploy      # publishes a hosted Studio you can use from anywhere
```

Published edits appear on the running site without a redeploy — the page
subscribes to Sanity's live content API.

If you change anything under `studio/schemaTypes/`, run `yarn schema:deploy`
from `studio/` so the deployed schema stays in step with the code.

## How content reaches the page

```
Sanity ──HOME_QUERY──> src/sanity/content.ts ──PortfolioContent──> components
```

Every component consumes the `PortfolioContent` view model defined in
[`src/types/content.ts`](src/types/content.ts), and knows nothing about Sanity.
`src/app/page.tsx` is a Server Component that fetches; `src/app/HomeClient.tsx`
holds the browser-only pieces (the viewport check and the WebGL background).

Images are served straight from Sanity's CDN via the loader in
[`src/sanity/imageLoader.ts`](src/sanity/imageLoader.ts) rather than being
proxied through Next's image optimizer, which would re-download and re-encode
work Sanity has already done.

## Known follow-ups

- `swiper` is still listed in `package.json` but nothing imports it. Run
  `yarn remove swiper` when convenient — it rebuilds the whole dependency tree.
- CORS origins are registered for `localhost:3000`, `localhost:3457` and
  `https://alaashouman.me`. Add any new preview domain in the Sanity project
  settings, otherwise live updates silently stop working on that host.
