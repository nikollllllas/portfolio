import { describe, expect, it } from 'vitest'
import { content } from './content'

describe('content dictionary', () => {
  it('exposes the same top-level section keys for pt and en', () => {
    expect(Object.keys(content.en).sort()).toEqual(
      Object.keys(content.pt).sort(),
    )
  })

  it('points the résumé download at a distinct PDF per locale', () => {
    expect(content.pt.hero.resumeFile).toBe('/nikollas-ohta-cv-pt.pdf')
    expect(content.en.hero.resumeFile).toBe('/nikollas-ohta-cv-en.pdf')
    expect(content.pt.hero.resumeFile).not.toBe(content.en.hero.resumeFile)
  })

  it('lists the same companies, in the same order, in both locales', () => {
    expect(content.en.experience.roles.map(r => r.company)).toEqual(
      content.pt.experience.roles.map(r => r.company),
    )
  })
})
