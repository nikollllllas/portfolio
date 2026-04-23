import useSWR from 'swr'
import { AlertCircle, ExternalLink, Github, Loader2 } from 'lucide-react'
import {
  GITHUB_PROFILE_URL,
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
  const { data, error, isLoading } = useSWR('github-repos', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60_000,
  })

  return (
    <section id="projetos" className="relative z-10 scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="page-wrap">
        <div className="mb-10 max-w-2xl">
          <p className="kicker mb-3">Projetos em código aberto</p>
          <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Projetos no GitHub
          </h2>
          <p className="mt-2 text-muted">
            Meus repositórios com descrição e metadados públicos:
          </p>
        </div>

        {isLoading && (
          <div className="callout" role="status" aria-live="polite">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            Carregando repositórios…
          </div>
        )}

        {error && (
          <div className="callout" role="alert">
            <AlertCircle className="mt-0.5 h-5 w-5" aria-hidden />
            <p className="m-0">
              Não foi possível carregar os projetos agora. Tente novamente em instantes.
            </p>
          </div>
        )}

        {!isLoading && !error && data?.length === 0 && (
          <p className="text-muted">
            Nenhum repositório corresponde aos filtros.
          </p>
        )}

        {data && data.length > 0 && (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.map((repo) => (
                <ProjectCard
                  key={repo.id}
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
            <div className="mt-10 flex justify-center">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Github className="h-4 w-4" aria-hidden />
                Ver mais no GitHub
                <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
