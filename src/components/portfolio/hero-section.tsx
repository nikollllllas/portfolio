import { ArrowDown } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative z-10 flex min-h-[min(100dvh,900px)] flex-col justify-center px-4 pb-16 pt-20 sm:min-h-[78vh] sm:px-6 sm:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="page-wrap mx-auto flex w-full flex-col items-center text-center">
        <h1
          id="hero-heading"
          className="mb-4 max-w-[22ch] text-3xl font-semibold leading-tight tracking-tight text-fg sm:max-w-none sm:text-5xl md:text-6xl"
        >
          Código claro. Produtos que importam.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Front-end e mobile com foco em experiências rápidas, acessíveis e bem arquitetadas — da
          interface ao que o usuário sente no dia a dia.
        </p>
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
          <a href="#contato" className="btn btn-ghost">
            Contato
          </a>
        </div>
      </div>
    </section>
  )
}
