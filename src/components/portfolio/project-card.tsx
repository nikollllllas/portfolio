import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

export type ProjectCardProps = {
  name: string
  description: string
  language: string | null
  topics: string[]
  htmlUrl: string
  homepage: string | null
  stargazersCount: number
  index: number
}

const listSpring = { type: 'spring' as const, stiffness: 420, damping: 32, mass: 0.85 }

export const ProjectCard = ({
  name,
  description,
  language,
  topics,
  htmlUrl,
  homepage,
  stargazersCount,
  index,
}: ProjectCardProps) => {
  const reduceMotion = useReducedMotion()
  const visibleTopics = topics.slice(0, 6)
  const demoUrl = homepage?.trim() ? homepage.trim() : null

  const gridDelay = Math.min(index * 0.07, 0.45)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.055,
        delayChildren: reduceMotion ? 0 : gridDelay,
      },
    },
  }

  const blockVariants = {
    hidden: reduceMotion
      ? {}
      : {
          opacity: 0,
          y: 20,
        },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : listSpring,
    },
  }

  const hoverLift = reduceMotion
    ? undefined
    : {
        y: -6,
        scale: 1.01,
        transition: { type: 'spring' as const, stiffness: 400, damping: 24 },
      }

  const tapScale = reduceMotion ? undefined : { scale: 0.985 }

  return (
    <motion.article
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, margin: '-8% 0px', amount: 0.2 }}
      variants={reduceMotion ? undefined : containerVariants}
      whileHover={hoverLift}
      whileTap={tapScale}
      className="group ui-card-project"
    >
      <motion.div
        variants={reduceMotion ? undefined : blockVariants}
        className="mb-3 flex flex-wrap items-start justify-between gap-3"
      >
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-fg">{name}</h2>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="ui-lang-dot" aria-hidden />
              <span className="text-mint">{language ?? 'Outros'}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5" aria-hidden />
              {stargazersCount}
            </span>
          </div>
        </div>
      </motion.div>
      <motion.p
        variants={reduceMotion ? undefined : blockVariants}
        className="mb-4 flex-1 text-sm leading-relaxed text-muted"
      >
        {description}
      </motion.p>
      {visibleTopics.length > 0 ? (
        <motion.ul
          variants={reduceMotion ? undefined : blockVariants}
          className="mb-4 flex flex-wrap gap-2"
          aria-label="Tópicos do repositório"
        >
          {visibleTopics.map((topic) => (
            <li key={topic}>
              <span className="ui-tag-topic">{topic}</span>
            </li>
          ))}
        </motion.ul>
      ) : null}
      <motion.div
        variants={reduceMotion ? undefined : blockVariants}
        className="mt-auto flex flex-wrap gap-3"
      >
        <motion.a
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ui-btn-card-repo"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          <Github className="h-4 w-4" aria-hidden />
          Repositório
          <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
        </motion.a>
        {demoUrl ? (
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-btn-live-demo"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          >
            Live demo
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </motion.a>
        ) : null}
      </motion.div>
    </motion.article>
  )
}
