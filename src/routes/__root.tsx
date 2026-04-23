import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { SITE } from '../config/site'
import Footer from '../components/footer'
import Header from '../components/header'

import appCss from '../styles.css?url'

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: SITE.title },
      { name: 'description', content: SITE.metaDescription },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="min-h-dvh">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
