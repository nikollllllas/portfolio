import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useLocale } from '#/hooks/use-locale'
import { SITE } from '@/config/site'

export const ContactSection = () => {
  const { t } = useLocale()

  const items = [
    {
      href: SITE.githubProfile,
      label: t.contact.github,
      icon: Github,
      external: true,
    },
    SITE.linkedin.trim() && {
      href: SITE.linkedin.trim(),
      label: t.contact.linkedin,
      icon: Linkedin,
      external: true,
    },
    SITE.email?.trim() && {
      href: `mailto:${SITE.email.trim()}`,
      label: t.contact.email,
      icon: Mail,
      external: false,
    },
  ].filter(Boolean) as Array<{
    href: string
    label: string
    icon: typeof Github
    external: boolean
  }>

  return (
    <section
      id="contact"
      className="section-divider relative z-10 scroll-mt-24 px-4 py-20 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <motion.div
        className="page-wrap flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p className="kicker mb-3">{t.contact.kicker}</p>
          <h2
            id="contact-heading"
            className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
          >
            {t.contact.heading}
          </h2>
          <p className="mt-2 max-w-md text-muted">{t.contact.subheading}</p>
        </div>
        <ul className="flex flex-col gap-3 sm:items-end">
          {items.map(({ href, label, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
              >
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
