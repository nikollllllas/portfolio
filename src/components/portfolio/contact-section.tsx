import { Github, Linkedin, Mail } from 'lucide-react'
import { SITE } from '@/config/site'

type ContactItem = {
  href: string
  label: string
  icon: typeof Github
  external: boolean
}

export const ContactSection = () => {
  const items: ContactItem[] = [
    {
      href: SITE.githubProfile,
      label: 'GitHub',
      icon: Github,
      external: true,
    },
  ]

  if (SITE.linkedin.trim()) {
    items.push({
      href: SITE.linkedin.trim(),
      label: 'LinkedIn',
      icon: Linkedin,
      external: true,
    })
  }

  if (SITE.email?.trim()) {
    items.push({
      href: `mailto:${SITE.email.trim()}`,
      label: 'E-mail',
      icon: Mail,
      external: false,
    })
  }

  return (
    <section
      id="contato"
      className="ui-section-divider relative z-10 scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <div className="page-wrap flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Contato
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
            Vamos conversar
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted">Links diretos — sem formulários.</p>
        </div>
        <nav aria-label="Redes e e-mail">
          <ul className="m-0 flex list-none flex-col gap-3 p-0 sm:items-end">
            {items.map(({ href, label, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="ui-link-contact"
                >
                  <Icon className="ui-icon-muted" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
