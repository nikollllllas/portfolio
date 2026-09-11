import { SITE } from '#/config/site'

type SeoOptions = {
  title: string
  description: string
  path?: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article' | 'profile'
  noIndex?: boolean
  locale?: 'pt' | 'en'
}

const OG_LOCALE = { pt: 'pt_BR', en: 'en_US' } as const

const absoluteUrl = (path: string): string => new URL(path, SITE.url).toString()

export const seo = ({
  title,
  description,
  path = '/',
  image = SITE.ogImage,
  imageAlt = SITE.ogImageAlt,
  type = 'website',
  noIndex = false,
  locale,
}: SeoOptions) => {
  const canonical = absoluteUrl(path)
  const absoluteImage = absoluteUrl(image)

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      {
        name: 'robots',
        content: noIndex ? 'noindex, nofollow' : 'index, follow',
      },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: SITE.name },
      {
        property: 'og:locale',
        content: locale ? OG_LOCALE[locale] : SITE.locale,
      },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      ...(noIndex ? [] : [{ property: 'og:url', content: canonical }]),
      { property: 'og:image', content: absoluteImage },
      { property: 'og:image:alt', content: imageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: absoluteImage },
    ],
    // Pages marked noindex (e.g. the 404 catch-all) skip canonical/hreflang:
    // pairing them with noindex on a route whose real path we don't know
    // here would wrongly point crawlers at the homepage.
    links: noIndex
      ? []
      : [
          { rel: 'canonical', href: canonical },
          { rel: 'alternate', hrefLang: 'pt-BR', href: absoluteUrl('/') },
          { rel: 'alternate', hrefLang: 'en', href: absoluteUrl('/en') },
          { rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl('/') },
        ],
  }
}
