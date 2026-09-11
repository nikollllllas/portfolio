export type Locale = 'pt' | 'en'

export const LOCALES: Locale[] = ['pt', 'en']

export const content = {
  pt: {
    seo: {
      title: 'Nikollas · Front-end & mobile',
      description:
        'Site pessoal de Nikollas Ohta — front-end e mobile com React e TypeScript. Interfaces acessíveis e performáticas, projetos no GitHub e contato.',
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
        'Front-end e mobile com foco em experiências rápidas, acessíveis e bem arquitetadas — da interface ao que o usuário sente no dia a dia.',
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
            'Desenvolvimento front-end de mais de dez sistemas — backoffice e landing pages —, com foco em acessibilidade (WCAG) e performance (Web Vitals, Lighthouse). Cobertura de testes unitários e automatizados, componentização, integração com APIs RESTful e desenvolvimento ágil (SCRUM).',
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
      heading: 'Código claro, interfaces com intenção.',
      paragraphs: [
        'Sou desenvolvedor front-end com foco em mobile e web — principalmente React e TypeScript. Gosto de entregar interfaces rápidas, acessíveis e bem estruturadas, com design system, testes e performance quando o contexto exige, sempre priorizando código claro e fácil de evoluir.',
        'Fora do teclado, equilibro estudo, projetos criativos e tempo com a família — e levo isso para o lado profissional: tecnologia aplicada para resolver problemas reais.',
      ],
    },
    contact: {
      kicker: 'Contato',
      heading: 'Vamos conversar',
      subheading: 'Links diretos — sem formulários.',
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
        "Nikollas Ohta's personal site — front-end and mobile engineering with React and TypeScript. Accessible, performant interfaces, GitHub projects, and contact info.",
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
        'Front-end and mobile engineering focused on fast, accessible, well-architected experiences — from the interface down to how it feels to use.',
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
            'Front-end development for more than ten systems — back-office platforms and landing pages — focusing on WCAG accessibility and performance (Web Vitals, Lighthouse). Unit and automated test coverage, component-based architecture, RESTful API integration, and agile SCRUM development.',
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
      heading: 'Clean code, intentional interfaces.',
      paragraphs: [
        "I'm a front-end developer focused on mobile and web — mainly React and TypeScript. I like shipping fast, accessible, well-structured interfaces, with design systems, tests, and performance work when the context calls for it, always prioritizing code that's clear and easy to evolve.",
        'Away from the keyboard, I balance studying, creative projects, and family time — and I bring that mindset to work: technology applied to solve real problems.',
      ],
    },
    contact: {
      kicker: 'Contact',
      heading: "Let's talk",
      subheading: 'Direct links — no forms.',
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
