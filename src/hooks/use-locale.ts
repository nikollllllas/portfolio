import { useLocation } from '@tanstack/react-router'
import { content, type Locale } from '#/i18n/content'

export const useLocale = () => {
  const { pathname } = useLocation()
  const locale: Locale = pathname.startsWith('/en') ? 'en' : 'pt'
  const prefix = locale === 'en' ? '/en' : ''

  return { locale, prefix, t: content[locale] }
}
