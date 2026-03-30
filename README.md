# Portfólio — Nikollas Ohta

Site pessoal e portfólio de trabalhos em front-end e mobile: projetos em destaque (GitHub), página sobre e contato. Visual escuro e direto, com foco em leitura e em uma experiência rápida no navegador.

**Sobre o projeto**

Portfólio minimalista de Nikollas Ohta, desenvolvedor front-end com forte atuação em mobile e web (React, TypeScript). O site destaca repositórios públicos, resume a abordagem técnica — código legível, acessibilidade, performance quando o contexto pede — e centraliza links para GitHub, LinkedIn e contato. Interface escura, tipografia calma e microinterações leves, com atenção a quem prefere menos movimento na tela.

## Stack

- [TanStack Start](https://tanstack.com/start) / [TanStack Router](https://tanstack.com/router) — roteamento e SSR
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — animações
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

- `src/routes/` — rotas (file-based)
- `src/components/` — layout e seções do portfólio
- `src/config/site.ts` — nome, links, título e textos de descrição (incl. meta SEO)

Textos de apresentação e meta description compartilhados com o `<head>` do site vivem em `src/config/site.ts` para manter uma única fonte de verdade.

## Licença

Repositório privado; uso conforme acordo do autor.
