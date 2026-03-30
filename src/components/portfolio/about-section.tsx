export const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="ui-section-divider relative z-10 scroll-mt-24 px-4 py-16 sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="page-wrap">
        <div className="island-shell rounded-2xl p-6 sm:p-8">
          <p className="island-kicker mb-2">Sobre</p>
          <h2
            id="about-heading"
            className="display-title mb-5 text-3xl font-bold leading-tight text-fg sm:text-4xl md:text-5xl"
          >
            Código claro, interfaces com intenção.
          </h2>
          <div className="leading-relaxed space-y-4 text-muted">
            <p>
              Sou desenvolvedor front-end com foco em mobile e web — principalmente React e
              TypeScript. Gosto de entregar interfaces rápidas, acessíveis e bem estruturadas, com
              design system, testes e performance quando o contexto exige, sempre priorizando
              código claro e fácil de evoluir.
            </p>
            <p>
              Meu trabalho está concentrado em front-end e mobile.
              Fora do teclado, equilibro estudo, projetos criativos e tempo com a família — e levo
              isso para o lado profissional: tecnologia aplicada para resolver problemas reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
