import { fireEvent, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithRouter } from '#/test/render-with-router'
import Header from './header'

describe('Header', () => {
  it('renders Portuguese nav labels at /', async () => {
    renderWithRouter(<Header />, { path: '/' })
    expect(await screen.findByText('Projetos')).toBeInTheDocument()
    expect(screen.getByText('Experiência')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  it('renders English nav labels at /en', async () => {
    renderWithRouter(<Header />, { path: '/en' })
    expect(await screen.findByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('switches the displayed language when the EN toggle is clicked', async () => {
    renderWithRouter(<Header />, { path: '/' })
    expect(await screen.findByText('Projetos')).toBeInTheDocument()

    fireEvent.click(screen.getByText('EN'))

    expect(await screen.findByText('Projects')).toBeInTheDocument()
    expect(screen.queryByText('Projetos')).not.toBeInTheDocument()
  })
})
