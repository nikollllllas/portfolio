import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/footer'
import Header from '../components/header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Nikollas · Front-end & mobile',
      },
      {
        name: 'description',
        content:
          'Portfólio minimalista — desenvolvimento front-end e mobile, projetos no GitHub e contato.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark min-h-dvh">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-dvh flex-col font-sans antialiased wrap-anywhere">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
