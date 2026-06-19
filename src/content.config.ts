import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { posts };

