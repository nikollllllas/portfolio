import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithRouter } from '#/test/render-with-router'
import { useLocale } from './use-locale'

function Probe() {
  const { locale, prefix } = useLocale()
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="prefix">{prefix}</span>
    </div>
  )
}

describe('useLocale', () => {
  it('resolves pt with an empty prefix at /', async () => {
    renderWithRouter(<Probe />, { path: '/' })
    expect(await screen.findByTestId('locale')).toHaveTextContent('pt')
    expect(screen.getByTestId('prefix')).toHaveTextContent('')
  })

  it('resolves en with the /en prefix at /en', async () => {
    renderWithRouter(<Probe />, { path: '/en' })
    expect(await screen.findByTestId('locale')).toHaveTextContent('en')
    expect(screen.getByTestId('prefix')).toHaveTextContent('/en')
  })

  it('resolves en for any nested path under /en', async () => {
    renderWithRouter(<Probe />, { path: '/en/whatever' })
    expect(await screen.findByTestId('locale')).toHaveTextContent('en')
  })
})
