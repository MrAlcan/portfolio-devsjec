import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export const prerender = true

export async function GET( context: APIContext ) {
    const posts = ( await getCollection( 'blog', ( { data } ) => !data.draft ) )
        .sort( ( a, b ) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() )

    return rss( {
        title: 'Blog DEVSJEC SRL',
        description: 'Artículos técnicos sobre desarrollo de software, IA, DevOps y arquitectura desde Bolivia.',
        site: context.site ?? 'https://devsjec.com',
        items: posts.map( ( post ) => ( {
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: `/blog/${ post.id }/`,
            author: post.data.author,
            categories: post.data.tags
        } ) ),
        customData: '<language>es-BO</language>'
    } )
}
