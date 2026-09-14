import { motion } from 'framer-motion'
import { useLocale } from '#/hooks/use-locale'

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
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          {t.about.paragraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
