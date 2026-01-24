import { defineConfig } from 'vitepress'
import commonSidebar from '../api/common/typedoc-sidebar.json'
import browserSidebar from '../api/browser/typedoc-sidebar.json'
import nodeSidebar from '../api/node/typedoc-sidebar.json'

export default defineConfig({
  title: 'Longmo Utils',
  description: '高质量的 TypeScript 工具库',

  base: '/longmo-utils-monorepo/',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/common/index.md' },
      {
        text: 'Packages',
        items: [
          { text: 'longmo-utils', link: '/api/longmo-utils/index.md' },
          { text: '@longmo-utils/common', link: '/api/common/index.md' },
          { text: '@longmo-utils/browser', link: '/api/browser/index.md' },
          { text: '@longmo-utils/node', link: '/api/node/index.md' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/' }
          ]
        }
      ],
      '/api/longmo-utils/': [
        {
          text: 'longmo-utils',
          items: [
            { text: 'Overview', link: '/api/longmo-utils/index.md' }
          ]
        }
      ],
      '/api/common/': [
        {
          text: 'Common API',
          items: [
            { text: 'Overview', link: '/api/common/index.md' }
          ]
        },
        ...commonSidebar
      ],
      '/api/browser/': [
        {
          text: 'Browser API',
          items: [
            { text: 'Overview', link: '/api/browser/index.md' }
          ]
        },
        ...browserSidebar
      ],
      '/api/node/': [
        {
          text: 'Node API',
          items: [
            { text: 'Overview', link: '/api/node/index.md' }
          ]
        },
        ...nodeSidebar
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/longmoo-utils-monorepo' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Longmoo'
    },

    search: {
      provider: 'local'
    }
  },

  ignoreDeadLinks: true
})
