import { ArrowDown, FileDown } from 'lucide-react'
import { useLocale } from '#/hooks/use-locale'
import { Button } from '@/components/ui/button'

export const HeroSection = () => {
  const { t } = useLocale()

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[min(100dvh,900px)] flex-col justify-center px-4 pb-16 pt-20 sm:min-h-[78vh] sm:px-6 sm:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="page-wrap mx-auto flex w-full flex-col items-center text-center">
        <h1
          id="hero-heading"
          className="mb-4 max-w-[22ch] text-3xl font-semibold leading-tight tracking-tight text-fg sm:max-w-none sm:text-5xl md:text-6xl"
        >
          {t.hero.heading}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t.hero.subheading}
        </p>
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button asChild className="rounded-full">
            <a href="#projects">
              {t.hero.viewProjects}
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href="#contact">{t.hero.contact}</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href={t.hero.resumeFile} download>
              {t.hero.downloadResume}
              <FileDown className="h-4 w-4" aria-hidden />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
