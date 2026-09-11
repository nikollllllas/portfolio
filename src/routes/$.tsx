import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '#/components/not-found'
import { SITE } from '#/config/site'
import { seo } from '#/lib/seo'

export const Route = createFileRoute('/$')({
  head: () =>
    seo({
      title: `Página não encontrada / Page not found · ${SITE.name}`,
      description:
        "A página que você procura não existe ou foi movida. / The page you're looking for doesn't exist or was moved.",
      noIndex: true,
    }),
  component: NotFound,
})
