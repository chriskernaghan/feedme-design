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
} as const;

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

export function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function topicLabel(slug: string) {
  return slug.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
}
