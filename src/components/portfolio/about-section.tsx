import { motion } from 'framer-motion'
import { useLocale } from '#/hooks/use-locale'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const STACK = ['React', 'TypeScript', 'Next.js', 'Node.js', 'NestJS']

export const AboutSection = () => {
  const { t } = useLocale()

  return (
    <section
      id="about"
      className="section-divider relative z-10 scroll-mt-24 px-4 py-20 sm:px-6"
      aria-labelledby="about-heading"
    >
      <motion.div
        className="page-wrap"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="kicker mb-3">{t.about.kicker}</p>
        <h2
          id="about-heading"
          className="mb-6 text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
        >
          {t.about.heading}
        </h2>

        <Card className="gap-0 overflow-hidden rounded-[14px] py-0 shadow-none">
          <CardContent className="grid gap-6 p-5 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-6">
            <img
              src="/nikollas-ohta.jpg"
              alt={t.about.photoAlt}
              width={144}
              height={144}
              loading="lazy"
              decoding="async"
              className="h-28 w-28 rounded-full object-cover ring-1 ring-black/10 sm:h-36 sm:w-36 dark:ring-white/10"
            />

            <div className="max-w-2xl space-y-4">
              <div className="space-y-4 leading-relaxed text-muted">
                {t.about.paragraphs.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul
                className="flex flex-wrap gap-1.5"
                aria-label={t.about.stackLabel}
              >
                {STACK.map(tech => (
                  <li key={tech}>
                    <Badge variant="outline">{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
