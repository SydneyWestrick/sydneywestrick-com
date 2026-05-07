import { defineCollection, z } from 'astro:content';

const pillars = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    standfirst: z.string(),
    pillarNumber: z.string(),
    category: z.enum(['SBL', 'DAL']),
    publishedDate: z.string(),
    modifiedDate: z.string(),
    readingTime: z.string(),
    audience: z.string(),
    wordCount: z.number(),
    keywords: z.string(),
    aboutTopic: z.string(),
    aboutTopicSameAs: z.string().optional(),
    sections: z.array(z.string()),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    sources: z.array(z.string())
  })
});

export const collections = { pillars };
