import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-elevated px-4 backdrop-blur-xl">
      <nav
        className="page-wrap flex flex-wrap items-center gap-x-4 gap-y-2 py-3.5 sm:py-4"
        aria-label="Principal"
      >
        <h2 className="m-0 shrink-0 text-sm font-semibold tracking-tight">
          <Link to="/" className="ui-brand-link">
            <span className="ui-brand-dot" aria-hidden />
            Nikollas
          </Link>
        </h2>

        <div className="ml-auto flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-semibold">
          <a href="/#projetos" className="nav-link">
            Projetos
          </a>
          <a href="/#sobre" className="nav-link">
            Sobre
          </a>
          <a href="/#contato" className="nav-link">
            Contato
          </a>
        </div>
      </nav>
    </header>
  )
}
