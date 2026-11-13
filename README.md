# feedme.design

Astro static site for feedme.design, an e-commerce UX publication with several pseudonymous writers.

## Run it

```sh
npm install
npm run dev        # drafts are visible in dev
npm run build      # drafts are excluded
SHOW_DRAFTS=1 npm run build   # include drafts, for a preview build
```

Astro 7 needs Node 22.23.4 or newer (see `.nvmrc`).

## Design notes

A light, conventional blog layout with playful touches. Colour carries meaning: raspberry marks breakdowns, mint marks data studies, lilac marks guides and custard is the accent. Every article gets a generated cover (`src/components/Cover.astro`): data studies lead with a headline number set in the `cover` front matter (`stat` and `caption`), other pieces lead with their title, and an article with its own `image` uses that instead. The mascot is the logo only. Tokens live at the top of `src/styles/global.css`; fonts are self-hosted through Fontsource (Bricolage Grotesque for headings, Atkinson Hyperlegible Next for text).

### Previewing drafts

Run `SHOW_DRAFTS=1 npm run build` (or set `SHOW_DRAFTS` to `1` as a build variable on Cloudflare) to include drafts and future-dated posts.

## Previewing drafts

Drafts and future-dated pieces are hidden from production builds. To see the sample content on a preview deployment, add a build variable `SHOW_DRAFTS` set to `1` in Cloudflare, and remove it before launch.

## Adding content

**A writer:** add `src/content/authors/<slug>.md`. The `name` is the pseudonym shown on the site, and the page lives at `/authors/<slug>/`. The two included authors are placeholders.

**An article:** add `src/content/articles/<slug>.md`. The two `template-*.md` files show the frontmatter for a breakdown and a data study. Copy one, set `draft: false`, and replace every placeholder. The schema lives in `src/content.config.ts` and the build fails if a field is missing or the wrong type, which helps keep sources and dataset details consistent.

Types: `breakdown` (teardown of a real flow), `data` (original numbers), `guide` (how-to built on the first two). Topics are free-form slugs such as `checkout`, `product-page`, `search`, `navigation`, `mobile`, `trust`, and each gets a page at `/topics/<slug>/`.

## What each article gets automatically

- `Article` and `BreadcrumbList` JSON-LD, plus `Dataset` JSON-LD when the `dataset` block is present
- A key finding callout, a "Cite this" block, a dated sources list and an author box
- Entries in the sitemap and RSS feed, with canonical URLs
- `noindex` on draft pages in preview builds

## Scheduled publishing

An article goes live on the first build on or after its `pubDate`, provided `draft` is `false`. To queue a week of posts, review each one, set `draft: false` and give it its future date. The workflow in `.github/workflows/daily-publish.yml` triggers a Cloudflare Pages build at 06:15 UTC each day, so the queue publishes itself.

Setup: in Cloudflare Pages, open the project's Settings, then Builds, and create a deploy hook. Save its URL in the GitHub repo as a secret named `CF_PAGES_DEPLOY_HOOK`.

Images: put files in `public/images/` and fill in the `image` block in the frontmatter (alt text, credit and licence are required). Use your own dated screenshots and charts where you can, and record the licence for any stock photo.

## Deploying to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. In Cloudflare, go to Workers and Pages, create a Pages project and connect the repo.
3. Build command `npm run build`, output directory `dist`.
4. Add the environment variable `NODE_VERSION` set to `22.23.4`. If Cloudflare's build image doesn't offer that version yet, use the newest 22.x it lists and check that Astro still builds.
5. Add `feedme.design` as a custom domain.

**Remove the old redirect first.** The domain currently sends visitors to WP Base, so delete that rule (Redirect Rules, Bulk Redirects, a Page Rule or registrar forwarding, whichever was used) before attaching the domain. Otherwise it will keep winning over the new site.

## Before launch

- Replace both placeholder authors and the template articles.
- Add a contact route on `/about/`.
- Check the copy on `/about/` and `/methodology/` and edit it into your own voice.
- Submit `https://feedme.design/sitemap-index.xml` in Search Console, and consider the Search Console and GA4 tags at that point.
- Sort out the old URLs. If the previous site had indexed pages that earned links, map them in `public/_redirects` (format: `/old-path/ /new-path/ 301`).
