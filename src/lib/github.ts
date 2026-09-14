export const GITHUB_USERNAME = 'nikollllllas' as const

export const GITHUB_PROFILE_URL =
  `https://github.com/${GITHUB_USERNAME}` as const

export const getRepoSocialImageUrl = (repoName: string): string =>
  `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repoName}`

export const PORTFOLIO_HOME_REPO_LIMIT = 5 as const

// Ordered by priority: frontend/mobile first, then backend, then others —
// Dart/Flutter apps go last on purpose (lowest priority in the queue).
export const HOME_PINNED_REPOSITORY_NAMES = [
  'rfinance-web',
  'lawyer-landing-page',
  'rfinance-api',
  'my-gold',
  'tcc-flutter-teacher-app',
] as const

// Repos that should never appear on the home page, regardless of description/stars.
export const HOME_EXCLUDED_REPOSITORY_NAMES = ['api-rocketnotes'] as const

export const HOME_PINNED_DESCRIPTION_FALLBACK: Readonly<
  Partial<Record<string, string>>
> = {
  'tcc-flutter-teacher-app':
    'Aplicativo em Dart/Flutter do TCC — presença e frequência acadêmica.',
  'lawyer-landing-page': 'Landing page para escritório de advocacia.',
  'rfinance-web': 'Aplicação web para controle financeiro pessoal.',
  'rfinance-api': 'API para a aplicação de controle financeiro RFinance.',
  // TODO: descrição inferida pelo nome do repositório — confirme/ajuste.
  'my-gold':
    'Aplicativo em Dart/Flutter para controle de investimentos em ouro.',
}

export type GitHubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  homepage: string | null
  fork: boolean
  updated_at: string
}

const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&type=owner`

const hashString = (value: string): number => {
  let h = 0
  for (let i = 0; i < value.length; i++) {
    h = (Math.imul(31, h) + value.charCodeAt(i)) | 0
  }
  return h
}

const applyPinnedDescriptionFallback = (repo: GitHubRepo): GitHubRepo => {
  if (repo.description?.trim()) {
    return repo
  }
  const fallback = HOME_PINNED_DESCRIPTION_FALLBACK[repo.name]
  if (!fallback) {
    return repo
  }
  return { ...repo, description: fallback }
}

export const fetchUserRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch(REPOS_URL)
  if (!response.ok) {
    throw new Error('Não foi possível carregar os repositórios.')
  }
  return response.json() as Promise<GitHubRepo[]>
}

export const filterPortfolioRepos = (repos: GitHubRepo[]): GitHubRepo[] => {
  const excluded = new Set<string>(HOME_EXCLUDED_REPOSITORY_NAMES)
  return repos
    .filter(repo => !repo.fork)
    .filter(repo => repo.name !== GITHUB_USERNAME)
    .filter(repo => !excluded.has(repo.name))
    .filter(repo => Boolean(repo.description?.trim()))
    .filter(repo => typeof repo.stargazers_count === 'number')
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    })
}

export const selectHomeRepositories = (repos: GitHubRepo[]): GitHubRepo[] => {
  const pinnedSet = new Set<string>(HOME_PINNED_REPOSITORY_NAMES)
  const byName = new Map(repos.map(r => [r.name, r]))

  const pinned: GitHubRepo[] = []
  for (const name of HOME_PINNED_REPOSITORY_NAMES) {
    const repo = byName.get(name)
    if (!repo || repo.fork || repo.name === GITHUB_USERNAME) {
      continue
    }
    pinned.push(applyPinnedDescriptionFallback(repo))
  }

  const describedPool = filterPortfolioRepos(repos).filter(
    r => !pinnedSet.has(r.name),
  )

  const wildcardCount = Math.max(0, PORTFOLIO_HOME_REPO_LIMIT - pinned.length)
  const wildcards = [...describedPool]
    .sort((a, b) => hashString(a.name) - hashString(b.name))
    .slice(0, wildcardCount)

  return [...pinned, ...wildcards].slice(0, PORTFOLIO_HOME_REPO_LIMIT)
}
