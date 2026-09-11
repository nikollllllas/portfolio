import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { useState } from 'react'
import { useLocale } from '#/hooks/use-locale'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getRepoSocialImageUrl } from '@/lib/github'

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
  const { t } = useLocale()
  const [imageFailed, setImageFailed] = useState(false)
  const visibleTopics = topics.slice(0, 5)
  const demoUrl = homepage?.trim() || null

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
    >
      {!imageFailed && (
        <div className="project-card-media">
          <img
            src={getRepoSocialImageUrl(name)}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        </div>
      )}
      <div className="project-card-body">
        <header className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-fg">
              {name}
            </h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted">
              {language && <span>{language}</span>}
              <span className="inline-flex items-center gap-1">
                <Star className="h-3.5 w-3.5" aria-hidden />
                {stargazersCount}
              </span>
            </div>
          </div>
        </header>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        {visibleTopics.length > 0 && (
          <ul
            className="mb-4 flex flex-wrap gap-1.5"
            aria-label={t.projects.topics}
          >
            {visibleTopics.map(topic => (
              <li key={topic}>
                <Badge variant="outline">{topic}</Badge>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" aria-hidden />
              {t.projects.repository}
            </a>
          </Button>
          {demoUrl && (
            <Button asChild size="sm" className="rounded-full">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                {t.projects.liveDemo}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
