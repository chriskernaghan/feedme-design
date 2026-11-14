import type { APIRoute, GetStaticPaths } from 'astro';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import { TYPE_LABELS, TYPE_TONE, getArticles } from '../../lib/site';
import { articleCard, defaultCard } from '../../lib/og';

// One social preview image per article, plus /og/default.png for everything else.
export const getStaticPaths = (async () => {
  const articles = await getArticles();
  return [
    { params: { slug: 'default' }, props: { article: undefined } },
    ...articles.map((article) => ({ params: { slug: article.id }, props: { article } })),
  ];
}) satisfies GetStaticPaths;

const fontFiles = ['bricolage-800.ttf', 'atkinson-700.ttf'].map((f) => resolve('src/assets/fonts', f));

export const GET: APIRoute = ({ props }) => {
  const { article } = props as { article?: Awaited<ReturnType<typeof getArticles>>[number] };
  const svg = article
    ? articleCard({
        type: article.data.type,
        tone: TYPE_TONE[article.data.type],
        label: TYPE_LABELS[article.data.type],
        title: article.data.title,
        stat: article.data.cover?.stat,
        caption: article.data.cover?.caption,
      })
    : defaultCard();
  const png = new Resvg(svg, {
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'Atkinson Hyperlegible Next' },
  })
    .render()
    .asPng();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};