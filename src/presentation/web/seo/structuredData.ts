import { PUBLIC_ENVIRONMENTS as E } from '../../../infrastructure/config/public-enviroments'

const COMPANY_LEGAL_NAME = 'DEVSJEC SRL'
const FOUNDING_DATE = '2024' // TODO: confirmar año real con el equipo
const PRICE_RANGE = '$$'

const OPENING_HOURS = [
    {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
    }
]

const SOCIAL_PROFILES = [
    'https://linkedin.com/company/devsjec',
    'https://twitter.com/devsjec'
]

const buildAbsolute = ( siteUrl: string, path: string ): string =>
    new URL( path.replace( /^\//, '' ), siteUrl ).href

interface CapabilityDef {
    name: string
    description: string
    serviceType: string
}

const CAPABILITIES: CapabilityDef[] = [
    {
        name: 'Desarrollo Web a Medida',
        description: 'Plataformas y aplicaciones web personalizadas, rápidas y optimizadas para Core Web Vitals.',
        serviceType: 'Custom Web Development'
    },
    {
        name: 'Sistemas a Medida',
        description: 'Sistemas empresariales diseñados desde cero según los procesos de cada organización.',
        serviceType: 'Bespoke Software Systems'
    },
    {
        name: 'E-commerce',
        description: 'Tiendas en línea y plataformas de comercio electrónico con pasarelas de pago e integración logística.',
        serviceType: 'E-commerce Development'
    },
    {
        name: 'Desarrollo de Videojuegos',
        description: 'Videojuegos y experiencias interactivas para web, escritorio y móvil.',
        serviceType: 'Game Development'
    },
    {
        name: 'Integraciones de Inteligencia Artificial a Medida',
        description: 'LLMs, chatbots, modelos predictivos y automatización inteligente integrados a sistemas existentes.',
        serviceType: 'Custom Artificial Intelligence Integration'
    }
]

function buildOfferCatalog( siteUrl: string ) {
    return {
        '@type': 'OfferCatalog',
        '@id': `${ siteUrl }#offer-catalog`,
        name: 'Servicios de Desarrollo de Software',
        itemListElement: CAPABILITIES.map( ( capability, index ) => ( {
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
                '@type': 'Service',
                name: capability.name,
                description: capability.description,
                serviceType: capability.serviceType,
                provider: { '@id': `${ siteUrl }#organization` },
                areaServed: { '@type': 'Country', name: 'Bolivia' }
            }
        } ) )
    }
}

export function buildOrganizationSchema( siteUrl: string ) {
    return {
        '@type': 'Organization',
        '@id': `${ siteUrl }#organization`,
        name: COMPANY_LEGAL_NAME,
        legalName: COMPANY_LEGAL_NAME,
        url: siteUrl,
        logo: {
            '@type': 'ImageObject',
            '@id': `${ siteUrl }#logo`,
            url: buildAbsolute( siteUrl, '/logo.png' ),
            contentUrl: buildAbsolute( siteUrl, '/logo.png' ),
            width: 512,
            height: 512,
            caption: COMPANY_LEGAL_NAME
        },
        image: { '@id': `${ siteUrl }#logo` },
        foundingDate: FOUNDING_DATE,
        description:
            'Consultora boliviana especializada en desarrollo de software a medida, IA, sistemas web y móviles, DevOps y arquitectura escalable.',
        slogan: 'Software que transforma tu negocio',
        sameAs: SOCIAL_PROFILES,
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: E.COMPANY_EMAIL,
                telephone: E.COMPANY_WHATSAPP,
                areaServed: 'BO',
                availableLanguage: [ 'es' ]
            },
            {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: E.COMPANY_EMAIL,
                areaServed: 'BO',
                availableLanguage: [ 'es' ]
            }
        ],
        knowsAbout: ( E.COMPANY_STACK || '' ).split( ',' ).map( ( s: string ) => s.trim() ).filter( Boolean )
    }
}

export function buildLocalBusinessSchema( siteUrl: string ) {
    return {
        '@type': 'ProfessionalService',
        '@id': `${ siteUrl }#localbusiness`,
        name: COMPANY_LEGAL_NAME,
        image: buildAbsolute( siteUrl, '/og-image.png' ),
        logo: { '@id': `${ siteUrl }#logo` },
        url: siteUrl,
        telephone: E.COMPANY_WHATSAPP,
        email: E.COMPANY_EMAIL,
        priceRange: PRICE_RANGE,
        currenciesAccepted: 'BOB, USD',
        paymentAccepted: 'Transferencia bancaria, Tarjeta de crédito',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'La Paz',
            addressRegion: 'La Paz',
            addressCountry: 'BO'
        },
        areaServed: [
            { '@type': 'Country', name: 'Bolivia' },
            { '@type': 'AdministrativeArea', name: 'La Paz' },
            { '@type': 'AdministrativeArea', name: 'Cochabamba' },
            { '@type': 'AdministrativeArea', name: 'Santa Cruz' }
        ],
        openingHoursSpecification: OPENING_HOURS,
        sameAs: SOCIAL_PROFILES,
        knowsAbout: [
            'Custom Web Development',
            'Bespoke Software Systems',
            'E-commerce Development',
            'Game Development',
            'Custom Artificial Intelligence Integration'
        ],
        hasOfferCatalog: buildOfferCatalog( siteUrl ),
        parentOrganization: { '@id': `${ siteUrl }#organization` }
    }
}

export function buildWebSiteSchema( siteUrl: string ) {
    return {
        '@type': 'WebSite',
        '@id': `${ siteUrl }#website`,
        url: siteUrl,
        name: COMPANY_LEGAL_NAME,
        description: 'Sitio oficial de DEVSJEC SRL — desarrollo de software en La Paz, Bolivia.',
        inLanguage: 'es-BO',
        publisher: { '@id': `${ siteUrl }#organization` }
    }
}

interface ServiceDef {
    name: string
    description: string
    serviceType: string
    slug: string
}

const SERVICES: ServiceDef[] = [
    {
        name: 'Desarrollo de Software a Medida',
        description: 'Arquitecturas robustas diseñadas desde cero para resolver problemas operativos complejos en empresas e instituciones bolivianas.',
        serviceType: 'Custom Software Development',
        slug: 'desarrollo-software-a-medida'
    },
    {
        name: 'Desarrollo Web y Móvil',
        description: 'Aplicaciones web y móviles de alto rendimiento, accesibles y optimizadas para Core Web Vitals.',
        serviceType: 'Web and Mobile Development',
        slug: 'desarrollo-web-y-movil'
    },
    {
        name: 'Inteligencia Artificial y Automatización',
        description: 'Implementación de LLMs, chatbots, modelos predictivos y automatización de procesos de negocio.',
        serviceType: 'AI and Automation',
        slug: 'inteligencia-artificial-y-automatizacion'
    },
    {
        name: 'Consultoría IT',
        description: 'Asesoría estratégica en transformación digital, modernización de sistemas legacy y arquitectura empresarial.',
        serviceType: 'IT Consulting',
        slug: 'consultoria-it'
    },
    {
        name: 'Sistemas Institucionales',
        description: 'ERPs, sistemas de gestión y soluciones de alto cumplimiento para sector público y privado.',
        serviceType: 'Enterprise Systems Development',
        slug: 'sistemas-institucionales'
    },
    {
        name: 'DevOps y Cloud',
        description: 'Despliegue continuo (CI/CD), escalabilidad automática, observabilidad y seguridad cloud.',
        serviceType: 'DevOps and Cloud Engineering',
        slug: 'devops-y-cloud'
    }
]

export function buildServicesSchema( siteUrl: string ) {
    return SERVICES.map( ( service ) => ( {
        '@type': 'Service',
        '@id': `${ siteUrl }servicios/${ service.slug }#service`,
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
        url: `${ siteUrl }servicios/${ service.slug }`,
        provider: { '@id': `${ siteUrl }#organization` },
        areaServed: { '@type': 'Country', name: 'Bolivia' },
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${ siteUrl }servicios/${ service.slug }`,
            servicePhone: E.COMPANY_WHATSAPP,
            availableLanguage: [ 'es' ]
        }
    } ) )
}

export function buildTeamSchema( siteUrl: string ) {
    return [ 1, 2, 3 ].map( ( i ) => {
        const name = E[ `MEMBER${ i }_NAME` as keyof typeof E ] as string
        const role = E[ `MEMBER${ i }_ROLE_ES` as keyof typeof E ] as string
        const bio = E[ `MEMBER${ i }_BIO_ES` as keyof typeof E ] as string
        const photo = E[ `MEMBER${ i }_PHOTO` as keyof typeof E ] as string
        return {
            '@type': 'Person',
            '@id': `${ siteUrl }#person-${ i }`,
            name,
            jobTitle: role,
            description: bio,
            image: buildAbsolute( siteUrl, photo ),
            worksFor: { '@id': `${ siteUrl }#organization` },
            knowsLanguage: [ 'es' ]
        }
    } )
}

export interface BreadcrumbItem {
    name: string
    url: string
}

export function buildBreadcrumbSchema( siteUrl: string, items: BreadcrumbItem[] ) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: items.map( ( item, index ) => ( {
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url.startsWith( 'http' ) ? item.url : buildAbsolute( siteUrl, item.url )
        } ) )
    }
}

export function buildHomeGraph( siteUrl: string ) {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            buildOrganizationSchema( siteUrl ),
            buildLocalBusinessSchema( siteUrl ),
            buildWebSiteSchema( siteUrl ),
            ...buildServicesSchema( siteUrl ),
            ...buildTeamSchema( siteUrl )
        ]
    }
}

export function buildGraph( siteUrl: string, extraSchemas: object[] = [] ) {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            buildOrganizationSchema( siteUrl ),
            buildWebSiteSchema( siteUrl ),
            ...extraSchemas
        ]
    }
}

export { SERVICES }
