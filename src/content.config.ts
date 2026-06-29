import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection( {
    loader: glob( { pattern: '**/*.{md,mdx}', base: './src/content/blog' } ),
    schema: ( { image } ) =>
        z.object( {
            title: z.string().min( 5 ).max( 120 ),
            description: z.string().min( 30 ).max( 200 ),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            author: z.string().default( 'Equipo DEVSJEC' ),
            tags: z.array( z.string() ).default( [] ),
            heroImage: image().optional(),
            heroImageAlt: z.string().optional(),
            draft: z.boolean().default( false )
        } )
} )

export const collections = { blog }
