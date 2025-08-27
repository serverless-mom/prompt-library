import { defineCollection, z } from 'astro:content';

const library = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().optional(),
    externalLink: z.string().optional(),
    sticker: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { library };