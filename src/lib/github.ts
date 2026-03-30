export const GITHUB_USERNAME = 'nikollllllas' as const

export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}` as const

export const PORTFOLIO_HOME_REPO_LIMIT = 4 as const

export const HOME_PINNED_REPOSITORY_NAMES = [
  'tcc-flutter-teacher-app',
  'lawyer-landing-page',
] as const

export const HOME_PINNED_DESCRIPTION_FALLBACK: Readonly<Partial<Record<string, string>>> = {
  'tcc-flutter-teacher-app':
    'Aplicativo em Dart/Flutter do TCC — presença e frequência acadêmica.',
  'lawyer-landing-page': 'Landing page para escritório de advocacia.',
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
  return repos
    .filter((repo) => !repo.fork)
    .filter((repo) => repo.name !== GITHUB_USERNAME)
    .filter((repo) => Boolean(repo.description?.trim()))
    .filter((repo) => typeof repo.stargazers_count === 'number')
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    })
}

export const selectHomeRepositories = (repos: GitHubRepo[]): GitHubRepo[] => {
  const pinnedSet = new Set<string>(HOME_PINNED_REPOSITORY_NAMES)
  const byName = new Map(repos.map((r) => [r.name, r]))

  const pinned: GitHubRepo[] = []
  for (const name of HOME_PINNED_REPOSITORY_NAMES) {
    const repo = byName.get(name)
    if (!repo || repo.fork || repo.name === GITHUB_USERNAME) {
      continue
    }
    pinned.push(applyPinnedDescriptionFallback(repo))
  }

  const describedPool = filterPortfolioRepos(repos).filter((r) => !pinnedSet.has(r.name))

  const wildcardCount = Math.max(0, PORTFOLIO_HOME_REPO_LIMIT - pinned.length)
  const wildcards = [...describedPool]
    .sort((a, b) => hashString(a.name) - hashString(b.name))
    .slice(0, wildcardCount)

  return [...pinned, ...wildcards].slice(0, PORTFOLIO_HOME_REPO_LIMIT)
}
