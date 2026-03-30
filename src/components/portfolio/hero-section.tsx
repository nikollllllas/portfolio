import { ArrowDown } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative z-10 flex min-h-[min(100dvh,900px)] flex-col justify-center px-4 pb-12 pt-20 sm:min-h-[78vh] sm:px-6 sm:pb-16 sm:pt-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="page-wrap mx-auto flex w-full max-w-[min(100%,42rem)] flex-col items-center text-center sm:max-w-4xl md:max-w-5xl">
        <h1
          id="hero-heading"
          className="mb-3 max-w-[22ch] text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-fg sm:mb-4 sm:max-w-none sm:text-4xl sm:leading-[1.08] md:text-5xl lg:text-6xl"
        >
          Código claro. Produtos que importam.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
          Front-end e mobile com foco em experiências rápidas, acessíveis e bem arquitetadas — da
          interface ao que o usuário sente no dia a dia.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <a href="#projetos" className="ui-btn-hero-primary">
            Ver projetos
            <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
          </a>
          <a href="#contato" className="ui-btn-hero-secondary">
            Contato
          </a>
        </div>
      </div>
    </section>
  )
}
