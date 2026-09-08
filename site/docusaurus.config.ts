import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI Dungeon',
  tagline: 'Wissensbasis für Agentic Coding — Skills, Workflows, Best Practices',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://simonwuensch.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/ai-dungeon/',

  // GitHub pages deployment config.
  organizationName: 'SimonWuensch',
  projectName: 'ai-dungeon',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/SimonWuensch/ai-dungeon/tree/main/site/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Dungeon',
      logo: {
        alt: 'AI Dungeon Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wissensSidebar',
          position: 'left',
          label: 'Wissensbasis',
        },
        {
          href: 'https://github.com/SimonWuensch/ai-dungeon',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wissensbasis',
          items: [
            {label: 'Übersicht', to: '/docs/intro'},
            {label: 'Skills', to: '/docs/skills'},
            {label: 'Best Practices', to: '/docs/best-practices'},
            {label: 'Workflows & Sessions', to: '/docs/workflows'},
          ],
        },
        {
          title: 'Mehr',
          items: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/SimonWuensch/ai-dungeon',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Dungeon. Gebaut mit Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
