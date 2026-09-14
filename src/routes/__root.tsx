import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { MotionConfig } from 'framer-motion'
import Footer from '../components/footer'
import Header from '../components/header'
import { NotFound } from '../components/not-found'
import { SITE } from '../config/site'
import { useLocale } from '../hooks/use-locale'
import { content } from '../i18n/content'
import { seo } from '../lib/seo'

import appCss from '../styles.css?url'

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`

export const Route = createRootRoute({
  head: () => {
    const { meta, links } = seo({
      title: content.pt.seo.title,
      description: content.pt.seo.description,
      path: '/',
      locale: 'pt',
    })

    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: SITE.keywords.join(', ') },
        { name: 'author', content: SITE.name },
        { name: 'theme-color', content: '#0c0b12' },
        ...meta,
      ],
      links: [
        { rel: 'stylesheet', href: appCss },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/manifest.json' },
        ...links,
      ],
    }
  },
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale()

  return (
    <html
      lang={locale === 'en' ? 'en' : 'pt-BR'}
      className="min-h-dvh"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static hardcoded script, not user input; needed inline to set the theme before hydration */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <MotionConfig reducedMotion="user">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </MotionConfig>
        <Scripts />
      </body>
    </html>
  )
}
