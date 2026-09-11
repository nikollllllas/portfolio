# Portfólio — Nikollas Ohta

Site pessoal e portfólio de trabalhos em front-end e mobile: projetos em destaque (GitHub), página sobre e contato. Visual escuro e direto, com foco em leitura e em uma experiência rápida no navegador.

**Sobre o projeto**

Portfólio minimalista de Nikollas Ohta, desenvolvedor front-end com forte atuação em mobile e web (React, TypeScript). O site destaca repositórios públicos, experiência profissional, resume a abordagem técnica — código legível, acessibilidade, performance quando o contexto pede — e centraliza links para GitHub, LinkedIn e contato. Disponível em português (padrão, `/`) e inglês (`/en`). Interface escura, tipografia calma e microinterações leves, com atenção a quem prefere menos movimento na tela.

## Stack

- [TanStack Start](https://tanstack.com/start) / [TanStack Router](https://tanstack.com/router) — roteamento e SSR
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) — componente `Button` (Radix + `class-variance-authority`), restilizado para usar os tokens de cor já existentes em `src/styles.css`
- [Framer Motion](https://www.framer.com/motion/) — reveal ao rolar a página (`whileInView`) e `MotionConfig` respeitando `prefers-reduced-motion`
- [Biome](https://biomejs.dev) — lint e formatação
- [Vitest](https://vitest.dev) — testes

## Como rodar

```bash
pnpm install
pnpm dev
```

O servidor de desenvolvimento sobe em `http://localhost:3000` (porta definida no `package.json`).

## Build e preview

```bash
pnpm build
pnpm preview
```

## Scripts úteis

| Comando       | Descrição        |
| ------------- | ---------------- |
| `pnpm dev`    | Desenvolvimento  |
| `pnpm build`  | Build produção   |
| `pnpm preview`| Servir o build   |
| `pnpm test`   | Testes (Vitest)  |
| `pnpm lint`   | Lint (Biome)     |
| `pnpm format` | Formatar (Biome) |
| `pnpm check`  | Check completo   |

## Estrutura (resumo)

- `src/routes/` — rotas (file-based): `index.tsx` (PT, `/`), `en.tsx` (EN, `/en`) e `$.tsx` (404 catch-all, bilíngue)
- `src/components/portfolio/home-page.tsx` — composição da página (Hero → Projetos → Experiência → Sobre → Contato), compartilhada pelas duas rotas de idioma
- `src/components/ui/` — componentes shadcn/ui (`button.tsx`)
- `src/i18n/content.ts` — dicionário de textos PT/EN (única fonte de verdade para todo o texto visível do site)
- `src/hooks/use-locale.ts` — resolve o idioma atual a partir da URL (`/en*` → inglês, resto → português) e devolve o dicionário certo
- `src/config/site.ts` — dados estruturais (URL, links sociais, palavras-chave) que não variam por idioma
- `src/lib/seo.ts` — helper `seo()` usado no `head()` de cada rota: título, meta description, Open Graph, Twitter card, canonical e `hreflang` (pt-BR/en/x-default)
- `public/nikollas-ohta-cv-pt.pdf` / `public/nikollas-ohta-cv-en.pdf` — currículos para download (botão no Hero, por idioma)

Para adicionar/editar texto do site, edite `src/i18n/content.ts` — os componentes só consomem esse dicionário via `useLocale()`.

## SEO

- Cada rota define seu próprio `head()` via `seo()` — título, descrição, canonical e `hreflang` por página/idioma; a 404 usa `noindex, nofollow`.
- `public/robots.txt` libera o crawling e aponta para `public/sitemap.xml` (lista `/` e `/en` com alternates de idioma).
- `public/llms.txt` descreve o site para agentes/LLMs (convenção [llms.txt](https://llmstxt.org)).
- Falta apenas gerar `public/og-image.png` (1200×630) — as tags Open Graph/Twitter já apontam para esse caminho.

## Licença

Repositório privado; uso conforme acordo do autor.
