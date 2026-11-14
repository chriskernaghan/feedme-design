import { getCollection } from 'astro:content';

export const SITE = {
  name: 'feedme.design',
  tagline: 'E-commerce UX, broken down.',
  description:
    'Original breakdowns of e-commerce user experience, backed by data you can cite.',
  url: 'https://feedme.design',
};

export const TYPE_LABELS = {
  breakdown: 'Breakdown',
  data: 'Data study',
  guide: 'Guide',
  insight: 'Insight',
} as const;

// Colour carries meaning on this site: raspberry = breakdown, mint = data study, lilac = guide, custard = insight.
export const TYPE_TONE = {
  breakdown: 'berry',
  data: 'mint',
  guide: 'lilac',
  insight: 'custard',
} as const;

export const TYPE_PATH = {
  breakdown: '/breakdowns/',
  data: '/data/',
  guide: '/guides/',
  insight: '/insights/',
} as const;

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

// Stable colour per writer, so a pseudonym always gets the same disc.
export function avatarTone(name: string) {
  const tones = ['berry', 'mint', 'lilac', 'custard'] as const;
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return tones[h % tones.length];
}

// Drafts and future-dated pieces show in dev, and in a build only when SHOW_DRAFTS=1 (handy for previews).
// Otherwise a piece goes live on the first build on or after its pubDate, which is what lets a daily
// scheduled build publish the queue without anyone touching the repo.
const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === '1';

export async function getArticles() {
  const now = new Date();
  const all = await getCollection(
    'articles',
    ({ data }) => showDrafts || (!data.draft && data.pubDate <= now),
  );
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

// Articles carried over from the original feedme.design. They were published at the root of the
// site (/<slug>/), and other sites still link to those addresses, so they keep them. Add a filename
// (without .md) here to keep any other old article at its original root address.
const ROOT_URL_IDS = new Set([
  'apples-ipad-pro-ad-hits-a-cultural-wall-in-japan',
  'canvas-price-hike-a-risky-bet-that-could-alienate-its-core-users',
  'design-cuts-shuts-down-overnight-what-went-wrong',
  'how-the-nuance-audio-glasses-are-changing-hearing-aid-technology',
  'tesla-has-a-design-problem',
  'the-iconic-vaio-logo-a-study-in-minimalist-perfection',
  'the-motorola-razr-v3-a-cool-phone-before-smartphones-took-over',
  'the-power-of-a-yellow-rectangle-how-national-geographics-logo-became-a-window-to-the-world',
  'the-war-on-visual-smog-decluttering-public-spaces-in-europe',
  'ux-design-trends-to-watch-in-2025',
]);

// Where an article lives. A `path` in the front matter wins, then the root address for carried-over
// articles, otherwise /articles/<filename>/.
export function articleUrl(article: { id: string; data: { path?: string } }) {
  const custom = article.data.path?.replace(/^\/+|\/+$/g, '');
  if (custom) return `/${custom}/`;
  if (ROOT_URL_IDS.has(article.id)) return `/${article.id}/`;
  return `/articles/${article.id}/`;
}

export function readingTime(body: string | undefined) {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

export function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function topicLabel(slug: string) {
  return slug.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
}
