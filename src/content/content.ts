// ============================================================
// ARQUIVO CENTRAL DE CONTEÚDO
// Edite este arquivo para personalizar o site para outro cliente.
// Nenhum componente precisa ser alterado — apenas este arquivo.
// ============================================================

export const content = {
  // ----------------------------------------------------------
  // SEO & Meta Tags
  // ----------------------------------------------------------
  seo: {
    title: 'Amanda Silvestre | Analista Financeira & Contadora',
    description:
      'Analista Financeira formada em Ciências Contábeis. Especialista em planejamento financeiro, controle gerencial e análise de resultados. Entre em contato.',
    keywords:
      'analista financeira, contadora, ciências contábeis, planejamento financeiro, gestão financeira, São Paulo',
    ogImage: 'https://github.com/silvestreamanda.png', // Substitua pela URL real
    siteUrl: 'https://silvestreamanda.github.io/my-resume', // Substitua pela URL real
    twitterHandle: '', // Ex: '@amandas_fin' — deixe vazio se não tiver
  },

  // ----------------------------------------------------------
  // Dados Pessoais
  // ----------------------------------------------------------
  person: {
    name: 'Amanda Silvestre',
    firstName: 'Amanda',
    role: 'Analista Financeira',
    credential: 'CRC/SP • Ciências Contábeis',
    tagline: 'Transformo números em estratégias que fazem seu negócio crescer.',
    location: 'São Paulo, SP',
    available: true,
    availableText: 'Disponível para novos projetos',
  },

  // ----------------------------------------------------------
  // Contato & Redes Sociais
  // ----------------------------------------------------------
  contact: {
    whatsapp: {
      number: '5511949759796', // Formato internacional, sem +, sem espaços
      display: '+55 (11) 94975-9796',
      message: 'Olá, Amanda! Vi seu perfil e gostaria de conversar sobre seus serviços.',
    },
    email: 'amanda.silvestr@gmail.com',
    linkedin: 'https://www.linkedin.com/in/my-resume-61859a20b',
  },

  // ----------------------------------------------------------
  // Seção: Sobre
  // ----------------------------------------------------------
  about: {
    title: 'Sobre mim',
    paragraphs: [
      'Sou Amanda Silvestre, Analista Financeira com formação em Ciências Contábeis e especialização em planejamento financeiro e controle gerencial. Ao longo de mais de 5 anos de experiência, ajudei empresas de diferentes portes a organizar suas finanças e crescer com segurança.',
      'Acredito que uma gestão financeira sólida é o alicerce de qualquer negócio próspero. Meu trabalho é traduzir dados complexos em decisões claras e estratégias de resultados reais.',
    ],
    highlights: [
      { value: '5+', label: 'Anos de experiência' },
      { value: '50+', label: 'Clientes atendidos' },
      { value: '100%', label: 'Foco em resultados' },
    ],
  },

  // ----------------------------------------------------------
  // Seção: Serviços
  // ----------------------------------------------------------
  services: {
    title: 'Serviços',
    subtitle: 'Soluções financeiras personalizadas para empresas e profissionais',
    items: [
      {
        icon: 'BarChart2',
        title: 'Análise Financeira',
        description:
          'Diagnóstico completo da saúde financeira do seu negócio com indicadores, relatórios e recomendações personalizadas.',
      },
      {
        icon: 'Target',
        title: 'Planejamento Orçamentário',
        description:
          'Elaboração e acompanhamento de orçamentos alinhados aos objetivos estratégicos da empresa.',
      },
      {
        icon: 'FileText',
        title: 'Relatórios Gerenciais',
        description:
          'Preparação de DRE, fluxo de caixa e balanço gerencial para uma tomada de decisão assertiva.',
      },
      {
        icon: 'TrendingUp',
        title: 'Controle de Custos',
        description:
          'Identificação de oportunidades de redução de custos sem comprometer a qualidade operacional.',
      },
      {
        icon: 'Shield',
        title: 'Gestão de Riscos',
        description:
          'Mapeamento e mitigação de riscos financeiros para proteger o patrimônio e a continuidade do negócio.',
      },
      {
        icon: 'BookOpen',
        title: 'Consultoria Contábil',
        description:
          'Orientação em obrigações fiscais, societárias e contábeis com visão estratégica e prática.',
      },
    ],
  },

  // ----------------------------------------------------------
  // Seção: Experiência & Formação
  // ----------------------------------------------------------
  experience: {
    title: 'Trajetória',
    subtitle: 'Experiência profissional e formação acadêmica',
    items: [
      {
        period: '2023 – Atual',
        title: 'Analista Financeira Sênior',
        organization: 'Empresa Confidencial',
        description:
          'Gestão de planejamento financeiro, análise de variações orçamentárias e elaboração de relatórios gerenciais para a diretoria executiva.',
        type: 'work' as const,
      },
      {
        period: '2021 – 2023',
        title: 'Analista Financeira Plena',
        organization: 'Grupo XYZ Participações',
        description:
          'Responsável pelo controle do fluxo de caixa, análise de indicadores (KPIs) financeiros e suporte ao fechamento contábil mensal.',
        type: 'work' as const,
      },
      {
        period: '2019 – 2021',
        title: 'Assistente Contábil',
        organization: 'Escritório de Contabilidade ABC',
        description:
          'Apoio nas rotinas contábeis, lançamentos, conciliações bancárias e preparação de demonstrações financeiras.',
        type: 'work' as const,
      },
      {
        period: '2018 – 2022',
        title: 'Bacharelado em Ciências Contábeis',
        organization: 'Universidade São Judas – São Paulo',
        description:
          'Formação sólida em contabilidade, finanças corporativas, tributação e gestão empresarial. CRC/SP ativo.',
        type: 'education' as const,
      },
    ],
  },

  // ----------------------------------------------------------
  // Seção: Habilidades
  // ----------------------------------------------------------
  skills: {
    title: 'Habilidades',
    subtitle: 'Ferramentas e competências que fazem a diferença',
    technical: [
      { name: 'Excel Avançado', level: 95 },
      { name: 'Análise de DRE & Balanço', level: 92 },
      { name: 'Fluxo de Caixa', level: 90 },
      { name: 'Power BI', level: 85 },
      { name: 'SAP / ERP', level: 80 },
      { name: 'Auditoria Interna', level: 75 },
    ],
    soft: [
      'Comunicação assertiva',
      'Pensamento analítico',
      'Gestão de tempo',
      'Atenção aos detalhes',
      'Trabalho em equipe',
      'Proatividade',
      'Resolução de problemas',
      'Visão estratégica',
    ],
  },

  // ----------------------------------------------------------
  // Seção: CTA Final
  // ----------------------------------------------------------
  cta: {
    title: 'Pronto para transformar\nsua gestão financeira?',
    subtitle:
      'Entre em contato e descubra como posso ajudar seu negócio a crescer com mais segurança, clareza e inteligência financeira.',
    whatsappLabel: 'Falar no WhatsApp',
    linkedinLabel: 'Conectar no LinkedIn',
  },

  // ----------------------------------------------------------
  // Footer
  // ----------------------------------------------------------
  footer: {
    tagline: 'Transformando números em decisões.',
    copyright: `© ${new Date().getFullYear()} Amanda Silvestre`,
  },
};

// Utilitário: monta link do WhatsApp com mensagem pré-preenchida
export function getWhatsAppLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
