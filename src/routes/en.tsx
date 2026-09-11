import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '#/components/portfolio/home-page'
import { content } from '#/i18n/content'
import { seo } from '#/lib/seo'

export const Route = createFileRoute('/en')({
  head: () =>
    seo({
      title: content.en.seo.title,
      description: content.en.seo.description,
      path: '/en',
      locale: 'en',
    }),
  component: HomePage,
})
