// @ts-check
// Configuração Docusaurus - apenas documentação

const config = {
  title: 'NexPeer',
  tagline: 'Documentação do projeto',
  favicon: 'img/icon.png',

  url: 'http://localhost:3000',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Doc em /docs
        },
        blog: false,  // Sem blog
        pages: false, // Sem páginas personalizadas
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '', // sem título
      logo: {
        alt: 'NexPeer',
        src: 'img/icon.png',
        href: '/intro', // Logo abre doc inicial
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} NexPeer.`,
    },
  },
};

module.exports = config;
