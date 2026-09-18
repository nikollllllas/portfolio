export type Locale = 'pt' | 'en'

export const LOCALES: Locale[] = ['pt', 'en']

export const content = {
  pt: {
    seo: {
      title: 'Nikollas · Front-end & mobile',
      description:
        'Site pessoal de Nikollas Ohta, front-end e mobile com React e TypeScript. Interfaces acessíveis e performáticas, projetos no GitHub e contato.',
    },
    nav: {
      projects: 'Projetos',
      experience: 'Experiência',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      heading: 'Código claro. Produtos que importam.',
      subheading:
        'Front-end e mobile com foco em experiências rápidas, acessíveis e bem arquitetadas, da interface ao que o usuário sente no dia a dia.',
      viewProjects: 'Ver projetos',
      contact: 'Contato',
      downloadResume: 'Baixar currículo',
      resumeFile: '/nikollas-ohta-cv-pt.pdf',
    },
    projects: {
      kicker: 'Projetos em código aberto',
      heading: 'Projetos no GitHub',
      subheading: 'Meus repositórios com descrição e metadados públicos:',
      loading: 'Carregando repositórios…',
      error:
        'Não foi possível carregar os projetos agora. Tente novamente em instantes.',
      empty: 'Nenhum repositório corresponde aos filtros.',
      seeMore: 'Ver mais no GitHub',
      repository: 'Repositório',
      liveDemo: 'Live demo',
      topics: 'Tópicos',
    },
    experience: {
      kicker: 'Experiência',
      heading: 'Experiência profissional',
      roles: [
        {
          company: 'E/Code Digital',
          role: 'Desenvolvedor Front-End',
          period: 'Maio de 2024 – Presente',
          description:
            'Desenvolvimento front-end de mais de dez sistemas, backoffice e landing pages, com foco em acessibilidade (WCAG) e performance (Web Vitals, Lighthouse). Cobertura de testes unitários e automatizados, componentização, integração com APIs RESTful e desenvolvimento ágil (SCRUM).',
          tools: [
            'Git',
            'GitHub',
            'Docker',
            'TypeScript',
            'React',
            'TailwindCSS',
            'Figma',
            'Playwright/Jest',
            'Next.js',
          ],
        },
        {
          company: 'Secretaria Municipal de Saúde de Umuarama',
          role: 'Estagiário de T.I.',
          period: 'Agosto de 2022 – Maio de 2024',
          description:
            'Suporte helpdesk aos sistemas Gestor Saúde (DB1 Group) e e-SUS APS (Ministério da Saúde), com capacitação de mais de 80 usuários. Desenvolvimento do front-end de uma solução integrativa para o Programa Nacional de Controle de Dengue.',
          tools: ['TypeScript', 'React', 'TailwindCSS'],
        },
      ],
    },
    about: {
      kicker: 'Sobre',
      heading:
        'Da primeira linha de código ao produto que chega às mãos de alguém.',
      paragraphs: [
        'Desenvolvedor de software apaixonado por construir para a Web, transformando ideias e problemas em experiências rápidas, acessíveis e bem pensadas, com código que eu também tenha orgulho de manter.',
        'Sou o Nikollas, desenvolvedor Front-End na E/Code Digital desde maio de 2024, onde trabalho no dia a dia com React, TypeScript, Next.js, TailwindCSS e TanStack Query, sempre buscando entregar interfaces sólidas e bem testadas (uso Playwright para E2E).',
        'Formado em Sistemas de Informação pela UNIPAR. Antes de entrar na área de desenvolvimento, fui estagiário de T.I. na Secretaria Municipal de Saúde de Umuarama, um período que me ajudou a entender tecnologia aplicada a problemas reais, fora da bolha do código.',
        'Gosto de ir além do trabalho: mantenho o RFinance, um projeto pessoal de finanças construído do zero (frontend em TanStack na Vercel, backend em NestJS com Drizzle ORM/PostgreSQL no Render), meu espaço para experimentar arquitetura e ideias.',
      ],
      photoAlt: 'Foto de Nikollas Ohta, desenvolvedor front-end',
      stackLabel: 'Stack técnica',
    },
    contact: {
      kicker: 'Contato',
      heading: 'Vamos conversar',
      subheading: 'Links diretos, sem formulários.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-mail',
    },
    notFound: {
      kicker: 'Erro 404',
      heading: 'Página não encontrada',
      description:
        'O endereço que você tentou acessar não existe ou foi movido.',
      backHome: 'Voltar para o início',
    },
    theme: {
      light: 'Ativar tema claro',
      dark: 'Ativar tema escuro',
    },
  },
  en: {
    seo: {
      title: 'Nikollas · Front-end & mobile',
      description:
        "Nikollas Ohta's personal site, front-end and mobile engineering with React and TypeScript. Accessible, performant interfaces, GitHub projects, and contact info.",
    },
    nav: {
      projects: 'Projects',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      heading: 'Clean code. Products that matter.',
      subheading:
        'Front-end and mobile engineering focused on fast, accessible, well-architected experiences, from the interface down to how it feels to use.',
      viewProjects: 'View projects',
      contact: 'Contact',
      downloadResume: 'Download resume',
      resumeFile: '/nikollas-ohta-cv-en.pdf',
    },
    projects: {
      kicker: 'Open-source projects',
      heading: 'Projects on GitHub',
      subheading: 'My repositories with public description and metadata:',
      loading: 'Loading repositories…',
      error: 'Could not load projects right now. Please try again shortly.',
      empty: 'No repository matches the filters.',
      seeMore: 'See more on GitHub',
      repository: 'Repository',
      liveDemo: 'Live demo',
      topics: 'Topics',
    },
    experience: {
      kicker: 'Experience',
      heading: 'Professional experience',
      roles: [
        {
          company: 'E/Code Digital',
          role: 'Front-End Developer',
          period: 'May 2024 – Present',
          description:
            'Front-end development for more than ten systems, back-office platforms and landing pages, focusing on WCAG accessibility and performance (Web Vitals, Lighthouse). Unit and automated test coverage, component-based architecture, RESTful API integration, and agile SCRUM development.',
          tools: [
            'Git',
            'GitHub',
            'Docker',
            'TypeScript',
            'React',
            'TailwindCSS',
            'Figma',
            'Playwright/Jest',
            'Next.js',
          ],
        },
        {
          company: 'Secretaria Municipal de Saúde de Umuarama',
          role: 'IT Intern',
          period: 'August 2022 – May 2024',
          description:
            'Help desk support for the Gestor Saúde (DB1 Group) and e-SUS APS (Brazilian Ministry of Health) systems, training more than 80 users. Developed the front end of an integrative solution for the National Dengue Control Program.',
          tools: ['TypeScript', 'React', 'TailwindCSS'],
        },
      ],
    },
    about: {
      kicker: 'About',
      heading: "From the first line of code to a product in someone's hands.",
      paragraphs: [
        "A software developer passionate about building for the Web, turning ideas and problems into fast, accessible, well-thought-out experiences, with code I'm also proud to maintain.",
        "I'm Nikollas, a Front-End Developer at E/Code Digital since May 2024, working daily with React, TypeScript, Next.js, TailwindCSS, and TanStack Query, always aiming for solid, well-tested interfaces (Playwright for E2E).",
        'I hold a degree in Information Systems from UNIPAR. Before moving into development, I was an IT intern at the Umuarama Municipal Health Department, an experience that taught me to apply technology to real problems, outside the coding bubble.',
        'I like going beyond the day job: I maintain RFinance, a personal finance project built from scratch (TanStack frontend on Vercel, NestJS backend with Drizzle ORM/PostgreSQL on Render), my space to experiment with architecture and ideas.',
      ],
      photoAlt: 'Photo of Nikollas Ohta, front-end developer',
      stackLabel: 'Tech stack',
    },
    contact: {
      kicker: 'Contact',
      heading: "Let's talk",
      subheading: 'Direct links, no forms.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    notFound: {
      kicker: '404 error',
      heading: 'Page not found',
      description: "The address you tried to reach doesn't exist or was moved.",
      backHome: 'Back to home',
    },
    theme: {
      light: 'Switch to light theme',
      dark: 'Switch to dark theme',
    },
  },
} as const

export type Content = (typeof content)['pt']
