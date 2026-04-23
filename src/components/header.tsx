import { Link } from '@tanstack/react-router'
import { ThemeToggle } from './theme-toggle'

const links = [
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#contato', label: 'Contato' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_85%,transparent)] px-4 backdrop-blur-xl">
      <nav
        className="page-wrap flex items-center gap-4 py-3.5 sm:py-4"
        aria-label="Principal"
      >
        <Link to="/" className="brand-link">
          <span className="brand-dot" aria-hidden />
          Nikollas
        </Link>

        <div className="ml-auto flex items-center gap-5 text-sm font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
