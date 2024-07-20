import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context){
    const posts = await getCollection('tips');
    return rss ({
        title: 'AstroBuild.tips',
        description: 'My first page',
        site: context.site,
        items: posts.map((post)=>({
            ...post.data,
            link: `/post/${post.slug}`,
        })),
    });
}