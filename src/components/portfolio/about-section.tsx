export const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="section-divider relative z-10 scroll-mt-24 px-4 py-20 sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="page-wrap">
        <p className="kicker mb-3">Sobre</p>
        <h2
          id="about-heading"
          className="mb-6 text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
        >
          Código claro, interfaces com intenção.
        </h2>
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            Sou desenvolvedor front-end com foco em mobile e web — principalmente React e
            TypeScript. Gosto de entregar interfaces rápidas, acessíveis e bem estruturadas, com
            design system, testes e performance quando o contexto exige, sempre priorizando
            código claro e fácil de evoluir.
          </p>
          <p>
            Fora do teclado, equilibro estudo, projetos criativos e tempo com a família — e levo
            isso para o lado profissional: tecnologia aplicada para resolver problemas reais.
          </p>
        </div>
      </div>
    </section>
  )
}
