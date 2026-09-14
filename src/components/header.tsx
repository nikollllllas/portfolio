import { useLocale } from '#/hooks/use-locale'
import { LanguageToggle } from './language-toggle'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  const { t, prefix } = useLocale()

  const links = [
    { href: `${prefix}/#projects`, label: t.nav.projects },
    { href: `${prefix}/#experience`, label: t.nav.experience },
    { href: `${prefix}/#about`, label: t.nav.about },
    { href: `${prefix}/#contact`, label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_85%,transparent)] px-4 backdrop-blur-xl">
      <nav
        className="page-wrap flex flex-wrap items-center gap-x-4 gap-y-2 py-3.5 sm:py-4"
        aria-label="Principal"
      >
        <a href={`${prefix}/`} className="brand-link">
          <span className="brand-dot" aria-hidden />
          Nikollas
        </a>

        <div className="ml-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
          {links.map(link => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
