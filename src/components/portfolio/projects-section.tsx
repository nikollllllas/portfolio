import useSWR from 'swr'
import { AlertCircle, ExternalLink, Github, Loader2 } from 'lucide-react'
import {
  GITHUB_PROFILE_URL,
  GITHUB_USERNAME,
  type GitHubRepo,
  fetchUserRepos,
  selectHomeRepositories,
} from '@/lib/github'
import { ProjectCard } from '#/components/portfolio/project-card'

const fetcher = async (): Promise<GitHubRepo[]> => {
  const repos = await fetchUserRepos()
  return selectHomeRepositories(repos)
}

export const ProjectsSection = () => {
  const { data, error, isLoading } = useSWR('github-repos-portfolio', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60_000,
  })

  return (
    <section id="projetos" className="relative z-10 scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="page-wrap">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Projetos em código aberto
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Projetos no GitHub
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Meus repositórios com descrição e metadados públicos no GitHub:
          </p>
        </div>

        {isLoading ? (
          <div className="ui-callout-loading" role="status" aria-live="polite">
            <Loader2 className="h-5 w-5 shrink-0 animate-spin text-accent" aria-hidden />
            Carregando repositórios…
          </div>
        ) : null}

        {error ? (
          <div className="ui-callout-error" role="alert">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-300" aria-hidden />
            <p className="m-0">
              Não foi possível carregar os projetos agora. Tente novamente em instantes.
            </p>
          </div>
        ) : null}

        {!isLoading && !error && data?.length === 0 ? (
          <p className="text-sm text-muted">
            Nenhum repositório corresponde aos filtros (descrição preenchida, sem forks).
          </p>
        ) : null}

        {data && data.length > 0 ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-6">
              {data.map((repo, index) => (
                <ProjectCard
                  key={repo.id}
                  index={index}
                  name={repo.name}
                  description={repo.description ?? ''}
                  language={repo.language}
                  topics={repo.topics ?? []}
                  htmlUrl={repo.html_url}
                  homepage={repo.homepage}
                  stargazersCount={repo.stargazers_count}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-center sm:mt-12">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn-github-more"
              >
                <Github className="h-4 w-4 shrink-0" aria-hidden />
                Ver mais no GitHub
                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
              </a>
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
