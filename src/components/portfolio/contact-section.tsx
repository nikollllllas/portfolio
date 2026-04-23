import { Github, Linkedin, Mail } from 'lucide-react'
import { SITE } from '@/config/site'

export const ContactSection = () => {
  const items = [
    { href: SITE.githubProfile, label: 'GitHub', icon: Github, external: true },
    SITE.linkedin.trim() && {
      href: SITE.linkedin.trim(),
      label: 'LinkedIn',
      icon: Linkedin,
      external: true,
    },
    SITE.email?.trim() && {
      href: `mailto:${SITE.email.trim()}`,
      label: 'E-mail',
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
      id="contato"
      className="section-divider relative z-10 scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <div className="page-wrap flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="kicker mb-3">Contato</p>
          <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Vamos conversar
          </h2>
          <p className="mt-2 max-w-md text-muted">Links diretos — sem formulários.</p>
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
      </div>
    </section>
  )
}
