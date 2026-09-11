import { motion } from 'framer-motion'
import { AlertCircle, ExternalLink, Github, Loader2 } from 'lucide-react'
import useSWR from 'swr'
import { ProjectCard } from '#/components/portfolio/project-card'
import { useLocale } from '#/hooks/use-locale'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  fetchUserRepos,
  GITHUB_PROFILE_URL,
  type GitHubRepo,
  selectHomeRepositories,
} from '@/lib/github'

const fetcher = async (): Promise<GitHubRepo[]> => {
  const repos = await fetchUserRepos()
  return selectHomeRepositories(repos)
}

export const ProjectsSection = () => {
  const { t } = useLocale()
  const { data, error, isLoading } = useSWR('github-repos', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60_000,
  })

  return (
    <section
      id="projects"
      className="relative z-10 scroll-mt-24 px-4 py-20 sm:px-6"
      aria-labelledby="projects-heading"
    >
      <div className="page-wrap">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="kicker mb-3">{t.projects.kicker}</p>
          <h2
            id="projects-heading"
            className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
          >
            {t.projects.heading}
          </h2>
          <p className="mt-2 text-muted">{t.projects.subheading}</p>
        </motion.div>

        {isLoading && (
          <Alert
            role="status"
            aria-live="polite"
            className="flex-row items-center gap-3"
          >
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            <AlertDescription>{t.projects.loading}</AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="flex-row items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5" aria-hidden />
            <AlertDescription>{t.projects.error}</AlertDescription>
          </Alert>
        )}

        {!isLoading && !error && data?.length === 0 && (
          <p className="text-muted">{t.projects.empty}</p>
        )}

        {data && data.length > 0 && (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.map(repo => (
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
              <Button asChild variant="outline" className="rounded-full">
                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  {t.projects.seeMore}
                  <ExternalLink
                    className="h-3.5 w-3.5 opacity-70"
                    aria-hidden
                  />
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
