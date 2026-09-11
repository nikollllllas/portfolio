import { useLocale } from '#/hooks/use-locale'
import { Button } from '@/components/ui/button'

export function NotFound() {
  const { t, prefix } = useLocale()

  return (
    <main className="relative z-10 flex min-h-[60dvh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="kicker mb-3">{t.notFound.kicker}</p>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {t.notFound.heading}
      </h1>
      <p className="max-w-md text-muted">{t.notFound.description}</p>
      <Button asChild className="mt-8 rounded-full">
        <a href={`${prefix}/`}>{t.notFound.backHome}</a>
      </Button>
    </main>
  )
}
