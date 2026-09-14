import { screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { renderWithRouter } from '#/test/render-with-router'
import { HomePage } from './home-page'

const mockRepo = {
  id: 1,
  name: 'rfinance-web',
  html_url: 'https://github.com/nikollllllas/rfinance-web',
  description: 'Aplicação web para controle financeiro pessoal.',
  language: 'TypeScript',
  topics: ['finance', 'react'],
  stargazers_count: 3,
  homepage: null,
  fork: false,
  updated_at: '2026-01-01T00:00:00Z',
}

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => ({
      ok: true,
      json: async () => [mockRepo],
    })),
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('HomePage', () => {
  it('renders every section heading in Portuguese', async () => {
    renderWithRouter(<HomePage />, { path: '/' })
    expect(
      await screen.findByRole('heading', {
        name: 'Código claro. Produtos que importam.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Projetos no GitHub' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Experiência profissional' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Código claro, interfaces com intenção.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Vamos conversar' }),
    ).toBeInTheDocument()
  })

  it('renders project cards fetched from the GitHub API once loaded', async () => {
    renderWithRouter(<HomePage />, { path: '/' })
    expect(await screen.findByText('rfinance-web')).toBeInTheDocument()
  })

  it('renders the English page at /en, including the fetched project data', async () => {
    renderWithRouter(<HomePage />, { path: '/en' })
    expect(
      await screen.findByRole('heading', { name: 'Projects on GitHub' }),
    ).toBeInTheDocument()
    expect(await screen.findByText('rfinance-web')).toBeInTheDocument()
  })
})
