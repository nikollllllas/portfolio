import { motion } from 'framer-motion'
import { useLocale } from '#/hooks/use-locale'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const ExperienceSection = () => {
  const { t } = useLocale()

  return (
    <section
      id="experience"
      className="section-divider relative z-10 scroll-mt-24 px-4 py-20 sm:px-6"
      aria-labelledby="experience-heading"
    >
      <div className="page-wrap">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="kicker mb-3">{t.experience.kicker}</p>
          <h2
            id="experience-heading"
            className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
          >
            {t.experience.heading}
          </h2>
        </motion.div>

        <ol className="space-y-8">
          {t.experience.roles.map((role, index) => (
            <motion.li
              key={role.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="gap-0 rounded-[14px] py-0 shadow-none">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-fg">
                      {role.role} · {role.company}
                    </h3>
                    <p className="text-xs font-medium text-muted">
                      {role.period}
                    </p>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {role.description}
                  </p>
                  <ul
                    className="mt-4 flex flex-wrap gap-1.5"
                    aria-label={t.projects.topics}
                  >
                    {role.tools.map(tool => (
                      <li key={tool}>
                        <Badge variant="outline">{tool}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
