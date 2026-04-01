// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DMP Help Center',
  tagline: 'IoT Device Management Platform Documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://greycheer.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/dmp-help-center/',

  // GitHub pages deployment config.
  organizationName: 'greycheer',
  projectName: 'dmp-help-center',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/greycheer/dmp-help-center/edit/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Search plugin configuration
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Search index configuration
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        // Search bar configuration
        searchBarPosition: 'right',
        searchBarShortcutHint: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
        defaultMode: 'light',
      },
      navbar: {
        title: 'DMP Help Center',
        logo: {
          alt: 'DMP Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/greycheer/dmp-help-center',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Platform Admin',
                to: '/category/platform-admin',
              },
              {
                label: 'Developer Guide',
                to: '/category/developer-guide',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Troubleshooting',
                to: '/category/troubleshooting',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/greycheer/dmp-help-center',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DMP Platform. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
