# Portfólio — backlog e status

## Resolvido nesta sessão

- [x] **Biome quebrado** — `pnpm check`/`lint`/`format` agora passam limpos.
  - Config schema: `organizeImports` migrado pra `assist.actions.source.organizeImports` (via `biome migrate`).
  - `indentStyle`/`trailingCommas` do config não batiam com o código real do repo inteiro — ajustado o config pra refletir a prática real (space/all), não o contrário.
  - Causa raiz dos milhares de diagnósticos falsos: Biome não respeitava `.gitignore` e estava lintando `.tanstack/`, `dist/` etc. (JS de vendor empacotado) — corrigido com `vcs.useIgnoreFile: true`.
  - `src/routeTree.gen.ts` (auto-gerado) excluído explicitamente.
  - `tailwindDirectives` habilitado no parser CSS pra reconhecer `@theme` do Tailwind v4.
  - Único finding real (`dangerouslySetInnerHTML` no script de tema pré-hidratação) suprimido com `biome-ignore` justificado, não a regra inteira.
- [x] **Testes unitários** — 26 testes, 6 arquivos, todos passando (`pnpm test`):
  - `src/lib/github.test.ts` (9) — filtros/exclusões/ordenação/prioridade dos repositórios.
  - `src/i18n/content.test.ts` (3) — paridade PT/EN do dicionário, currículo por idioma.
  - `src/hooks/use-locale.test.tsx` (3) — resolução de locale/prefix por rota.
  - `src/components/header.test.tsx` (3) — labels por idioma + troca de idioma ao clicar.
  - `src/components/portfolio/hero-section.test.tsx` (3) — link de currículo correto por idioma.
  - `src/components/portfolio/home-page.test.tsx` (3) — todas as seções em tela, cards do GitHub (fetch mockado), página em inglês completa.
  - Infra nova: `vitest.config.ts` (separado do `vite.config.ts` pra não conflitar com o plugin SSR do TanStack Start), `src/test/setup.ts` (mocks de `matchMedia`/`IntersectionObserver` + cleanup do RTL), `src/test/render-with-router.tsx`.
- [x] Repositório `rfinance-web` corrigido (era `rfinanece-web`, você renomeou no GitHub).
- [x] `hrefLang` (era `hreflang` minúsculo, React reclamava), hydration warning do tema (`suppressHydrationWarning` no `<html>`), borda com contraste alto nos componentes shadcn (faltava o reset global `border-color: var(--color-border)`).
- [x] Switch de idioma PT/EN animado (pílula deslizante com `layoutId` do Framer Motion).
- [x] Commits não incluem mais `Co-Authored-By` (`attribution.commit: ""` em `.claude/settings.json`, verificado funcionando).

## Ainda pendente (não foi tocado nesta sessão)

- [ ] `public/og-image.png` (1200×630) — tags OG/Twitter já apontam pro caminho, falta o arquivo.
- [ ] Descrição do `my-gold` em `HOME_PINNED_DESCRIPTION_FALLBACK` (`src/lib/github.ts`) é um chute — confirmar ou escrever a descrição real no próprio repositório do GitHub.
- [ ] Foto/avatar no Hero/Sobre — maior gap visual restante vs. os portfólios pesquisados, precisa de uma imagem sua.
- [ ] Passada visual real em claro/escuro dos componentes shadcn (Card, Badge, Alert, variantes de Button) — só validado via HTML/CSS compilado, nunca visto num navegador.
- [ ] Header em mobile (~375px) — tem `flex-wrap` pra não estourar, nunca conferido visualmente.
- [ ] Foco por teclado (`focus-visible:ring`) nos componentes novos.
- [ ] Lighthouse/Web Vitals — bundle cresceu com framer-motion + radix-ui + cva.
- [ ] 404 (`src/routes/$.tsx`) responde HTTP 200, não 404 de verdade — trade-off aceito, não corrigido.

## Como retomar

Cada item pendente é independente — pode pedir um de cada vez. Nada aqui precisa vir junto.
