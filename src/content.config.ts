import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    // One line, used in cards and JSON-LD.
    short: z.string(),
    // Optional links. Keep these pseudonym-safe.
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

const source = z.object({
  title: z.string(),
  publisher: z.string(),
  url: z.string().url(),
  // ISO date the source was last checked. Matters for citable work.
  accessed: z.coerce.date(),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: reference('authors'),
    // breakdown: teardown of a real flow. data: original numbers. guide: how-to built on the first two.
    type: z.enum(['breakdown', 'data', 'guide']),
    // Topic slugs, kept small and stable: product-page, checkout, search, navigation, mobile, trust, etc.
    topics: z.array(z.string()).default([]),
    // Optional lead image. Put the file in public/images/ and always record who made it and on what terms.
    image: z
      .object({
        src: z.string().startsWith('/'),
        alt: z.string(),
        credit: z.string(),
        // 'own screenshot', 'chart', or the stock licence such as 'Unsplash licence'.
        licence: z.string(),
        sourceUrl: z.string().url().optional(),
      })
      .optional(),
    // The headline finding, shown at the top and reused for social cards and citations.
    keyFinding: z.string().optional(),
    // Third-party sources the piece relies on.
    sources: z.array(source).default([]),
    // Only for type: data. Describes the dataset so it can be cited and marked up as schema.org Dataset.
    dataset: z
      .object({
        name: z.string(),
        method: z.string(),
        sampleSize: z.string(),
        collected: z.string(),
        downloadUrl: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { authors, articles };
