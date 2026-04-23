import { ExternalLink, Github, Star } from 'lucide-react'

export type ProjectCardProps = {
  name: string
  description: string
  language: string | null
  topics: string[]
  htmlUrl: string
  homepage: string | null
  stargazersCount: number
}

export const ProjectCard = ({
  name,
  description,
  language,
  topics,
  htmlUrl,
  homepage,
  stargazersCount,
}: ProjectCardProps) => {
  const visibleTopics = topics.slice(0, 5)
  const demoUrl = homepage?.trim() || null

  return (
    <article className="project-card">
      <header className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-fg">{name}</h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted">
            {language && <span>{language}</span>}
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5" aria-hidden />
              {stargazersCount}
            </span>
          </div>
        </div>
      </header>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      {visibleTopics.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-1.5" aria-label="Tópicos">
          {visibleTopics.map((topic) => (
            <li key={topic}>
              <span className="tag">{topic}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-2">
        <a
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm"
        >
          <Github className="h-4 w-4" aria-hidden />
          Repositório
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Live demo
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        )}
      </div>
    </article>
  )
}
