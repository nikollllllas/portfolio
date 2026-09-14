import { describe, expect, it } from 'vitest'
import {
  filterPortfolioRepos,
  GITHUB_USERNAME,
  type GitHubRepo,
  getRepoSocialImageUrl,
  HOME_EXCLUDED_REPOSITORY_NAMES,
  HOME_PINNED_REPOSITORY_NAMES,
  PORTFOLIO_HOME_REPO_LIMIT,
  selectHomeRepositories,
} from './github'

const makeRepo = (overrides: Partial<GitHubRepo>): GitHubRepo => ({
  id: 1,
  name: 'repo',
  html_url: `https://github.com/${GITHUB_USERNAME}/repo`,
  description: 'A repo',
  language: 'TypeScript',
  topics: [],
  stargazers_count: 0,
  homepage: null,
  fork: false,
  updated_at: '2026-01-01T00:00:00Z',
  ...overrides,
})

describe('getRepoSocialImageUrl', () => {
  it('builds the GitHub opengraph URL for the given repo name', () => {
    expect(getRepoSocialImageUrl('my-repo')).toBe(
      `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/my-repo`,
    )
  })
})

describe('filterPortfolioRepos', () => {
  it('excludes forks', () => {
    const repos = [
      makeRepo({ name: 'a', fork: true }),
      makeRepo({ name: 'b', fork: false }),
    ]
    expect(filterPortfolioRepos(repos).map(r => r.name)).toEqual(['b'])
  })

  it('excludes the profile README repo (named after the username)', () => {
    const repos = [makeRepo({ name: GITHUB_USERNAME }), makeRepo({ name: 'b' })]
    expect(filterPortfolioRepos(repos).map(r => r.name)).toEqual(['b'])
  })

  it('excludes repos listed in HOME_EXCLUDED_REPOSITORY_NAMES', () => {
    const excludedName = HOME_EXCLUDED_REPOSITORY_NAMES[0]
    const repos = [makeRepo({ name: excludedName }), makeRepo({ name: 'kept' })]
    expect(filterPortfolioRepos(repos).map(r => r.name)).toEqual(['kept'])
  })

  it('excludes repos without a description', () => {
    const repos = [
      makeRepo({ name: 'no-desc', description: '' }),
      makeRepo({ name: 'has-desc', description: 'Something' }),
    ]
    expect(filterPortfolioRepos(repos).map(r => r.name)).toEqual(['has-desc'])
  })

  it('sorts by stargazers descending, then by most recently updated', () => {
    const repos = [
      makeRepo({
        name: 'old-popular',
        stargazers_count: 10,
        updated_at: '2020-01-01',
      }),
      makeRepo({
        name: 'new-unpopular',
        stargazers_count: 1,
        updated_at: '2026-01-01',
      }),
      makeRepo({
        name: 'new-popular',
        stargazers_count: 10,
        updated_at: '2026-01-01',
      }),
    ]
    expect(filterPortfolioRepos(repos).map(r => r.name)).toEqual([
      'new-popular',
      'old-popular',
      'new-unpopular',
    ])
  })
})

describe('selectHomeRepositories', () => {
  it('returns pinned repos in the declared priority order, not GitHub API order', () => {
    const reversedPinned = [...HOME_PINNED_REPOSITORY_NAMES].reverse()
    const repos = reversedPinned.map((name, i) =>
      makeRepo({ name, id: i, description: '' }),
    )
    const result = selectHomeRepositories(repos)
    expect(result.map(r => r.name)).toEqual(
      HOME_PINNED_REPOSITORY_NAMES.slice(0, PORTFOLIO_HOME_REPO_LIMIT),
    )
  })

  it('applies the description fallback for pinned repos with no GitHub description', () => {
    const pinnedName = HOME_PINNED_REPOSITORY_NAMES[0]
    const repos = [makeRepo({ name: pinnedName, description: '' })]
    const result = selectHomeRepositories(repos)
    expect(result[0].description).toBeTruthy()
    expect(result[0].description).not.toBe('')
  })

  it('keeps the real GitHub description when a pinned repo already has one', () => {
    const pinnedName = HOME_PINNED_REPOSITORY_NAMES[0]
    const repos = [
      makeRepo({
        name: pinnedName,
        description: 'Real description from GitHub',
      }),
    ]
    const result = selectHomeRepositories(repos)
    expect(result[0].description).toBe('Real description from GitHub')
  })

  it('respects PORTFOLIO_HOME_REPO_LIMIT even when more pinned repos exist', () => {
    const repos = HOME_PINNED_REPOSITORY_NAMES.map((name, i) =>
      makeRepo({ name, id: i }),
    )
    expect(selectHomeRepositories(repos).length).toBeLessThanOrEqual(
      PORTFOLIO_HOME_REPO_LIMIT,
    )
  })

  it('skips a pinned name that does not exist in the fetched repos', () => {
    const repos = [makeRepo({ name: 'some-other-repo' })]
    const result = selectHomeRepositories(repos)
    expect(
      result.find(r => r.name === HOME_PINNED_REPOSITORY_NAMES[0]),
    ).toBeUndefined()
  })
})
