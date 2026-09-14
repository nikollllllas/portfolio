import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithRouter } from '#/test/render-with-router'
import { HeroSection } from './hero-section'

describe('HeroSection résumé download', () => {
  it('links to the Portuguese résumé at /', async () => {
    renderWithRouter(<HeroSection />, { path: '/' })
    const link = await screen.findByText('Baixar currículo')
    expect(link.closest('a')).toHaveAttribute(
      'href',
      '/nikollas-ohta-cv-pt.pdf',
    )
  })

  it('links to the English résumé at /en', async () => {
    renderWithRouter(<HeroSection />, { path: '/en' })
    const link = await screen.findByText('Download resume')
    expect(link.closest('a')).toHaveAttribute(
      'href',
      '/nikollas-ohta-cv-en.pdf',
    )
  })

  it('marks the résumé link with the download attribute', async () => {
    renderWithRouter(<HeroSection />, { path: '/' })
    const link = await screen.findByText('Baixar currículo')
    expect(link.closest('a')).toHaveAttribute('download')
  })
})
