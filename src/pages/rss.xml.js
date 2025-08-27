import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('library'))
    .filter(post => !post.data.draft);
  return rss({
    title: 'Monitoring Prompts by Checkly',
    description: 'Monitoring Prompts by Checkly',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}